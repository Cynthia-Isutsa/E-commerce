import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './context/ProductContext.jsx'
import { SidebarContext } from './context/SidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarContext>
  <ProductProvider>
   <React.StrictMode>
    <App />
   </React.StrictMode>
  </ProductProvider>
  </SidebarContext>
)
