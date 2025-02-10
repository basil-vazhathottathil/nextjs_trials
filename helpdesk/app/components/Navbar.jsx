import React from 'react'
import Link from 'next/link'
import logo from './logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <Image
        src={logo}
        alt ='the logo '
        width={70}
        quality={100}
        placeholder='blur'
        />
        <Link href = '/'>Dashboard</Link>
        <Link href= '/tickets'>Tickets</Link>
    </nav>
  )
}

export default Navbar
