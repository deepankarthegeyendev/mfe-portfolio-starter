import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'

// Ensure favicon points to the emitted asset in dist/assets after build
const emittedFaviconUrl = new URL('./assets/DK-logo.svg', import.meta.url).href
const existingFavicon = document.querySelector('link[rel="icon"]')
if (existingFavicon) {
  existingFavicon.setAttribute('href', emittedFaviconUrl)
} else {
  const link = document.createElement('link')
  link.setAttribute('rel', 'icon')
  link.setAttribute('type', 'image/svg+xml')
  link.setAttribute('href', emittedFaviconUrl)
  document.head.appendChild(link)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
