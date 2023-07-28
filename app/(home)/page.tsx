import React from "react";
import Image from "next/image";

import me from "../../assets/images/r.jpg";
import github from "../../assets/icons/icons8-github-24.png";
import whatsapp from "../../assets/icons/icons8-whatsapp-30.png";
import gmail from "../../assets/icons/icons8-gmail-100.png";
import insta from '../../assets/icons/icons8-instagram-50.png';

const HomePage = () => {
  return (
    <main className="flex flex-col ml-4 mr-4" >
      <h1 className=" text-rosita text-3xl ">Laura Lam</h1>
      <p>Hola soy Laura y este es mi portafolio</p>
      <div className="flex flex-row items-center ">
        <Image
          className="rounded-full h-28 w-28"
          src={me}
          alt="Picture of the author"
        />
        <div className="flex flex-col">
          <div className="flex flex-row px-2  items-center">
            <Image
              className="rounded-full h-6 w-6"
              src={github}
              alt="Picture of the author"
            />
            <a
              className="ml-4  text-rosita"
              href="https://github.com/lauralamruano"
            >
              Github
            </a>
          </div>
          <div className="flex flex-row px-2  items-center">
            <Image
              className="rounded-full h-6 w-6"
              src={gmail}
              alt="Picture of the author"
            />
            <a
              className="ml-4  text-rosita"
              href="mailto:lamruanolaura@gmail.com"
            >
              Gmail
            </a>
          </div>
          <div className="flex flex-row px-2  items-center">
          <Image
              className="rounded-full h-6 w-6"
              src={whatsapp}
              alt="Picture of the author"
            />
            <a className="ml-4  text-rosita" href="https://wa.me/+5354916323">
              Whathsapp
            </a>
          </div>
          <div className="flex flex-row px-2  items-center">
          <Image
              className="rounded-full h-6 w-6"
              src={insta}
              alt="Picture of the author"
            />
            <a className="ml-4  text-rosita" href="">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="py-4">
        Soy Ingeniera en Informática con experiencia en desarrollo de software,
        programación y diseño de aplicaciones móviles. Me considero una persona
        capacitada y motivada en mi área de especialización. Me apasiona
        trabajar en equipo y me esfuerzo por tener una comunicación efectiva y
        colaborativa.
      </p>
    </main>
  );
};

export default HomePage;
