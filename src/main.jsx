import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ScrollToTop from './Components/Utils/ScrollToTop';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <Toaster
        position="top-right"
        containerStyle={{
          top: 20,
          right: 20,
          zIndex: 999999,
        }}
      />
    </BrowserRouter>
  </StrictMode>,
)