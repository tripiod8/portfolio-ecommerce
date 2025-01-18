import { Button } from "@/components/ui/button"
import ModeToggle from "./mode-toggle"
import Link from "next/link"
import { ShoppingCart, UserIcon, Menu as MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
    return (
    <>
    <nav className="hidden md:flex">
        <ModeToggle />
        <Button asChild variant="ghost">
            <Link href="/cart">
            <ShoppingCart /> Cart
            </Link>
        </Button>
        <Button asChild variant="ghost">
            <Link href="/sign-in">
            <UserIcon /> Sign In
            </Link>
        </Button>
    </nav>
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
                <SheetTitle>Menu</SheetTitle>
                <div className="flex items-center"><ModeToggle /></div>
                <Button asChild variant="ghost">
                    <Link href="/cart">
                    <ShoppingCart /> Cart
                    </Link>
                </Button>
                <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
    </nav>
    </>
    )
}

export default Menu