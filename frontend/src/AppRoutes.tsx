import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layout/layout";
import AuthCallbackPage from "@/pages/AuthCallbackPage.tsx";
import UserProfilePage from "@/pages/UserProfilePage.tsx";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/auth-callback" element={<AuthCallbackPage/>} />
            <Route path="/user-profile"
                   element={<Layout showHero>
                <UserProfilePage />
            </Layout>} />
            <Route path="*" element={<Navigate to ="/"/>} />
        </Routes>
    );
};

export default AppRoutes;