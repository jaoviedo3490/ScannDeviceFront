import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvide } from './Context/MetricsContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvide>
      <App />
    </UserProvide>
  </StrictMode>,
)
