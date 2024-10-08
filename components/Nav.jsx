"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [

    {
        name: 'about',
        path:'/about'
    },
    {
        name: 'work',
        path:'/work'
    },
    {
        name: 'contact',
        path:'/contact'
    },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index)=> {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname &&
                        "text-blue border-b-2 border-blue dark:text-fuchsia-400 dark:border-fuchsia-400"}
                        capitalize font-medium hover:text-blue dark:hover:text-fuchsia-400 transition-all`}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
};

export default Nav;