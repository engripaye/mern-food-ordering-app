import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "./ui/dropdown-menu";
import {CircleUserRound} from "lucide-react";
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";

const UserNameMenu= () => {
    const { user, logout } = useAuth0();
  return (
      <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
              <CircleUserRound className="text-orange-500 " />
              {user?.email}

          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuItem asChild>
                  <Link to="/user-profile" className="font-bold hover:text-orange-500">
                      User Profile
                  </Link>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                  <Button onClick={() => logout()}
                          className="flex flex-1 font-bold bg-orange-500">
                      Log Out
                  </Button>
              </DropdownMenuItem>

          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default UserNameMenu
