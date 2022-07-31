function toggle() {
  const body = document.body
  const theme = localStorage.getItem('theme')

  if (theme && theme === 'dark-mode') {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    localStorage.setItem('theme', 'light-mode')
  } else {
    body.classList.add('dark-mode')
    body.classList.remove('light-mode')
    localStorage.setItem('theme', 'dark-mode')
  }
}

(function() {
  const theme = localStorage.getItem('theme') || 'light-mode'
  const body = document.body
  const toggleButton = document.getElementById('theme-switch')

  body.classList.add(theme)

  if (theme && theme === 'light-mode') {
    toggleButton.setAttribute('checked', true)
  }
    
  toggleButton.addEventListener('change', toggle)
})()
