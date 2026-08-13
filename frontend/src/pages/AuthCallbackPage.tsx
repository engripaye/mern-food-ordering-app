import {useAuth0} from "@auth0/auth0-react";
import {useCreateMyUser} from "@/api/MyUserApi.tsx";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthCallbackPage = () => {

    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();
    const [error, setError] = useState<string | null>(null);

    const hasCreatedUser = useRef(false);
    useEffect(() => {
        const createUserAndNavigate = async () => {
            if (!user?.sub || !user.email || hasCreatedUser.current) {
                return;
            }

            hasCreatedUser.current = true;

            try {
                await createUser({ auth0Id: user.sub, email: user.email });
                navigate("/", { replace: true });
            } catch (error) {
                setError(error instanceof Error ? error.message : "Failed to create user");
            }
        };

        void createUserAndNavigate();
    }, [createUser, navigate, user]);

    return error ? <span>{error}</span> : <span>Creating your profile...</span>;
}

export default AuthCallbackPage;
