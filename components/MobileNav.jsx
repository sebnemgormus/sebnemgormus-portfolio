"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-black dark:text-white' />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className='mt-32 mb-20 text-center text-2xl text-black'>
          <Link href="/">
            <h1 className='text-2xl font-semibold dark:text-white'>
              sebnemgormus<span className='text-blue dark:text-fuchsia-400'>.</span>
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8 text-black dark:text-white'>
          {links.map((link, index) => {
            return (
              <Link 
                href={link.path} 
                key={index} 
                className={`${
                  link.path === pathname && 
                  "text-blue border-b-2 border-blue dark:text-fuchsia-400 dark:border-fuchsia-400"} 
                  text-xl capitalize hover:text-blue dark:hover:text-fuchsia-400 transition-all`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
