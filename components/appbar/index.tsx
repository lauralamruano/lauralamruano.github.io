'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../../assets/icons/transparente.svg";

const AppBar = () => {

  const pathname = usePathname();

  return (
    <nav className="flex flex-row px-8 py-4 items-center font-semibold gap-x-4 lg:flex-col lg:py-10 lg:px-10">
      <Image
        className="rounded-full h-6 w-auto lg:h-16"
        src={logo}
        alt="Logo"
      />
      <ul className="flex flex-row grow lg:flex-col lg:py-5 lg:gap-y-3 ">
        <li>
          <Link className={`mr-8 px-0 py-2 hover:text-thulian_pink-500 ${pathname === '/' && 'text-thulian_pink-500'}`} href="/">About</Link>
        </li>
        <li>
          <Link className={`mr-8 px-0 py-2 hover:text-thulian_pink-500 ${pathname === '/experience' ? 'text-thulian_pink-500' : ''}`} href="/experience">Experience</Link>
        </li>
        <li>
          <Link className={`mr-8 px-0 py-2 hover:text-thulian_pink-500 ${pathname === '/skills' ? 'text-thulian_pink-500' : ''}`} href="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
