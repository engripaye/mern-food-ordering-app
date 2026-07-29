import {Button} from "@/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return(
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? <UsernameMenu /> :  <Button variant="ghost"
                                                          className="font-bold hover:text-orange-500 hover:bg-white"
                                                          onClick={async () => await loginWithRedirect()}>
                Log In

            </Button> }
        </span>

    )
}

export default MainNav