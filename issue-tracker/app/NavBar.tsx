'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { LuBug } from 'react-icons/lu'
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
    


    const links=[
        {label:'Dashboard' , href:'/'},
        {label:'Issues' , href:'/issues'}
    ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-12 items-center'>
        <Link href='/'><LuBug/></Link>
        <ul className='flex space-x-6'>
                {links.map(link => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        className={classNames({'text-zinc-900': link.href===currentPath,
                        'text-zinc-500': link.href!== currentPath,
                        ' hover:text-zinc-800 transition-colors':true
                        })}>
                        {link.label}
                    </Link>
                ))}
            </ul>
    </nav>
  )
}

export default NavBar
