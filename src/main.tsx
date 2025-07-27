import { createRoot } from 'react-dom/client'
import "../src/assets/styles/reset.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout'
import UserProfile from './pages/UserProfile'
import Models from './pages/Models'
import Cart from './pages/Cart'
import { AuthProvider } from './features/auth/utils'
import { ProtectedRoute } from './features/auth/ui'



createRoot(document.getElementById('root')!).render(
    <AuthProvider enableFakeAuth={true}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Models />} />
            <Route path="profile" element={

                <UserProfile />

            } />
            <Route path="cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
);
