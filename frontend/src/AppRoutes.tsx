import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layout/layout";
import AuthCallbackPage from "@/pages/AuthCallbackPage.tsx";
import UserProfilePage from "@/pages/UserProfilePage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import ProtectedRoute from "@/auth/ProtectedRoute.tsx";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route
                path="/"
                element={
                    <Layout showHero>
                        <HomePage />
                    </Layout>
                }
            />
            <Route path="/auth-callback" element={<AuthCallbackPage/>} />

            <Route element={<ProtectedRoute />}>

                <Route path="/user-profile"
                       element={
                    <Layout showHero>
                           <UserProfilePage />
                       </Layout>} />
            </Route>

            <Route path="*" element={<Navigate to ="/"/>} />
        </Routes>

    );

};

export default AppRoutes;
