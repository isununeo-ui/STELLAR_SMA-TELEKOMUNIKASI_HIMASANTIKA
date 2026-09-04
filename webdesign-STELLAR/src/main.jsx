// StrictMode membantu menemukan pola React yang berpotensi bermasalah saat development.
import { StrictMode } from 'react'
// createRoot adalah API React modern untuk memasang aplikasi ke elemen root.
import { createRoot } from 'react-dom/client'
// Style global dimuat sebelum seluruh komponen aplikasi.
import './index.css'
// App adalah root component website.
import App from './App.jsx'

// Memulai aplikasi React di elemen dengan id root pada index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
