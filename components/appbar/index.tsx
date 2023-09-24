import React from "react";

import Link from "next/link";
import Image from "next/image";

import logo from '../../assets/icons/transparente.png';

const AppBar = () => {
  return (
    <nav className="flex flex-row px-4 py-0 items-center font-semibold gap-x-4">
      <Image
          className="rounded-full h-16 w-16 "
          src={logo}
          alt="Logo"
        />
      <ul className="flex flex-row grow">
        <li>
          <Link className="mr-8 px-0 py-2" href="/">About</Link>
        </li>
        <li>
          <Link className="mr-8 px-0 py-2" href="/experience">Experience</Link>
        </li>
        <li>
          <Link className="mr-8 px-0 py-2" href="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
