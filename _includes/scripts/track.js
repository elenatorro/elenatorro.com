function modulo(a, b) {
  return a - Math.floor(a/b)*b
}

function toUInt32(x) {
  return modulo(parseInt(x), Math.pow(2, 32))
}

async function getInfo() {
  const url = '/.netlify/functions/ip'
  const res = await fetch(url)
  return await res.json()
}

async function getHash(source) {
  let hash = 0

  for (i = 0; i < source.length; i++) {
    char = source.charCodeAt(i)
    hash = ((hash<<5)-hash)+char
    hash = hash & hash
  }

  return hash
}

async function getFingerprint() {
  const { ip } = await getInfo()
  const canvas = document.getElementById("cnvs")
  const ctx = canvas.getContext("2d")

  ctx.fillStyle = "rgb(255,0,255)"
  ctx.beginPath()
  ctx.rect(20, 20, 150, 100)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.fillStyle = "rgb(0,255,255)"
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  const txt = ip
  ctx.textBaseline = "top"
  ctx.font = '17px "Arial 17"'
  ctx.textBaseline = "alphabetic"
  ctx.fillStyle = "rgb(255,5,5)"
  ctx.rotate(.03)
  ctx.fillText(txt, 4, 17)
  ctx.fillStyle = "rgb(155,255,5)"
  ctx.shadowBlur=8
  ctx.shadowColor="red"
  ctx.fillRect(20,12,100,5)

  const src = canvas.toDataURL()
  let hash = getHash(src)

  if (!hash) {
    hash = getHash(`${navigator.language}${navigator.userAgent}`)
  }
  
  const fngrprt = toUint32(hash)
  localStorage.setItem('fingerprint', fngrprt)
  return fngrprt
}

async function track() {
  const { geo } = await getInfo()
  let fngrprt = toUInt32(localStorage.getItem('fingerprint', 0))

  try {
    if (!fngrprt) {
      fngrprt = await getFingerprint()
    }
  } catch {
    fngrprt = 0
  }

  const url = '/.netlify/functions/track'
  const currentDate = new Date(Date.now())
  const theme = localStorage.getItem('theme')
  const data = {
    'fingerprint': fngrprt || 'unknown',
    'event': 'load',
    'timestamp': currentDate.toISOString(),
    'language': navigator.language || 'unknown',
    'useragent': navigator.userAgent || 'unknown',
    'referrer': document.referrer || 'unknown',
    'href': location.href || 'unknown',
    'origin': location.origin || 'unknown',
    'screenx': window.screenX || 0,
    'screeny': window.screenY || 0,
    'theme': theme || 'light-mode',
    'city': geo.city || 'unknown',
    'code': geo.country.code || 'unknown',
    'country': geo.country.name || 'unknown'
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    body: JSON.stringify(data)
  })
}

(function() {
  window.onload = track
})()
