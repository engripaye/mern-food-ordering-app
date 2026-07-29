import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "@/AppRoutes.tsx";
import Auth0ProviderWithNavigate from "@/auth/Auth0ProviderWithNavigate.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
        <Auth0ProviderWithNavigate>
            <AppRoutes />
        </Auth0ProviderWithNavigate>
    </Router>
  </StrictMode>,
)
