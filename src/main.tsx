import { createRoot } from 'react-dom/client'
import "../src/assets/styles/reset.css"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './features/auth/utils'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
    <AuthProvider enableFakeAuth={true}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
);
