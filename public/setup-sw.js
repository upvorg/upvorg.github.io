if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(
      (registration) => {
        // console.log('Service worker registration succeeded:', registration)
      },
      (error) => {
        console.log('Service worker registration failed:', error)
      }
    )
  })
  window.addEventListener('focus', async () => {
    await navigator.serviceWorker.ready
  })
}
