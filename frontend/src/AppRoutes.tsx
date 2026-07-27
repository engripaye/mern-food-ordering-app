import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layout/layout";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout>HOME PAGE</Layout>} />
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
            <Route path="*" element={<Navigate to ="/"/>} />
        </Routes>
    );
};

export default AppRoutes;