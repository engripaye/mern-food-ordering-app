import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layout/layout";
import HomePage from "@/pages/HomePage.tsx";
import AuthCallbackPage from "@/pages/AuthCallbackPage.tsx";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/auth-callback" element={<AuthCallbackPage/>} />
            <Route path="/user-profile"
                   element={<Layout>
                <UserProfilePage />
            </Layout>} />
            <Route path="*" element={<Navigate to ="/"/>} />
        </Routes>
    );
};

export default AppRoutes;