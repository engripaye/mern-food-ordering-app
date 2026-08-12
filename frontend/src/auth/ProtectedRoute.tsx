import {useAuth0} from "@auth0/auth0-react";
import {Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? (<Outlet />) : ()
};

export default ProtectedRoute;