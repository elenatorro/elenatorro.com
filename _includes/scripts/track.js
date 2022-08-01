async function fingerprint() {
  const url = '/.netlify/functions/ip'
  const res = await fetch(url)
  console.log('@@@ res', res)
  const info = await res.json()
  console.log('@@@ info', info)
}

async function track() {
  await fingerprint()
  const url = '/.netlify/functions/track'
  const currentDate = new Date(Date.now())
  const theme = localStorage.getItem('theme')

  const data = {
    'event': 'load',
    'timestamp': currentDate.toISOString(),
    'language': navigator.language || 'unknown',
    'languages': JSON.stringify(navigator.languages) || 'unknown',
    'useragent': navigator.userAgent || 'unknown',
    'referrer': document.referrer || 'unknown',
    'href': location.href || 'unknown',
    'origin': location.origin || 'unknown',
    'screenx': window.screenX || 0,
    'screeny': window.screenY || 0,
    'theme': theme || 'light-mode'
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
