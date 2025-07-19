import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/assets/styles/reset.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout'
import UserProfile from './pages/UserProfile'
import Models from './pages/Models'
import Cart from './pages/Cart'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Models />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
