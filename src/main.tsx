import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/assets/styles/reset.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout'
import UserProfile from './pages/UserProfile'
import HomePage from './pages/HomePage'
import MyModels from './pages/MyModels'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="my-models" element={<MyModels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
