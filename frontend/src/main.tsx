import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "@/AppRoutes.tsx";
import Auth0ProviderWithNavigate from "@/auth/Auth0ProviderWithNavigate.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "sonner";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
        <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
            <AppRoutes />
            <Toaster visibleToasts={1} position="top-right" richColors/>
        </Auth0ProviderWithNavigate>
        </QueryClientProvider>
    </Router>
  </StrictMode>,
)
