import {Sheet, SheetTrigger} from "./ui/sheet";
import {Menu} from "lucide-react";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500"/>
            </SheetTrigger>
        </Sheet>
    )

}

export default MobileNav