import { Link } from "react-router-dom";
import MobileNav from "@/components/MobileNav.tsx";
import MainNav from "@/components/MainNav.tsx";

const Header = () => {
  return (
      <div className="border-b-2 border-b-orange-500 py-6">
          <div className="container mx-auto flex justify-between items-center">
              <Link
                  to="/"
                  className="text-3xl font-bold tracking-tight text-orange-500">
                  LetsEat.com
              </Link>

              <div className="md:hidden">
                  <MobileNav />
              </div>
              <div className="hidden md:block">
                  <MainNav />
              </div>
          </div>

      </div>
  )
}

export default Header