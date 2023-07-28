import React from "react";

import Link from "next/link";
import Image from "next/image";

import logo from '../../assets/icons/transparente.png';

const AppBar = () => {
  return (
    <nav className="flex flex-col  text-rosita px-4 py-0 ">
      <Image
          className="rounded-full h-16 w-16 "
          src={logo}
          alt="Picture of the author"
        />
      <ul className="flex flex-row">
        <li>
          <Link className="mr-8 px-0 py-2" href="/">Inicio</Link>
        </li>
        <li>
          <Link className="mr-8 px-0 py-2" href="/about">Sobre</Link>
        </li>
        <li>
          <Link className="mr-8 px-0 py-2" href="/skills">Habilidades</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
