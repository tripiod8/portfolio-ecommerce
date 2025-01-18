import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
    return (<>
    <header>
        <div className="flex justify-between border-b p-2">
            <div>
                <Link href="/" className="flex items-center">
                    <Image src='/images/ghost_skateboard_logo.svg' alt={`APP_NAME Logo`} width={48} height={48} priority={true} />
                    <span className="hidden md:block">{APP_NAME}</span>
                </Link>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    </header>
    </>)
}

export default Header