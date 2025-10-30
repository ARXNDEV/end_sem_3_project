import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stairs from './components/common/Stairs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Stairs>
      <App />
    </Stairs>
  </React.StrictMode>,
)
