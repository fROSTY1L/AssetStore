import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/assets/styles/reset.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import HomePage from './components/pages/HomePage'
import UserProfile from './components/pages/UserProfile'
import MyModels from './components/pages/MyModels'


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
