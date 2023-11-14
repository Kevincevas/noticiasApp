import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NoticiasProvider } from './context/NoticiasProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NoticiasProvider>
        <App />
      </NoticiasProvider>
  </React.StrictMode>,

)
