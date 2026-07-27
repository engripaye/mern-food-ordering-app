import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "./ui/sheet";
import {Menu} from "lucide-react";
import {Separator} from "@radix-ui/react-separator";
import {Button} from "@/components/ui/button.tsx";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500"/>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                    <span> Welcome to LetsEat.com </span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )

}

export default MobileNav