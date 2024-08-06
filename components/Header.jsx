import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "@/components/Nav"
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <h1 className="text-xl font-semibold">
                sebnemgormus<span className="text-blue font-extrabold">.</span>
            </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
         <Nav />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
         <MobileNav />
        </div>


      </div>
    </header>
  );
};

export default Header;
