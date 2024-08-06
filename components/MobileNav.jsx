"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';


const links = [
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-black'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-20 text-center text-2xl text-black'>
                <Link href="/">
                    <h1 className='text-2xl font-semibold'>
                        sebnemgormus<span className='text-blue'>.</span>
                    </h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8 text-black'>
                {links.map((link, index)=> {
                    return (
                      <Link 
                        href={link.path} 
                        key={index} 
                        className={`${
                            link.path === pathname && 
                            "text-blue border-b-2 border-blue"} 
                            text-xl capitalize hover:text-blue transition-all`}
                        >
                        {link.name}
                      </Link>
                    )
                 
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav