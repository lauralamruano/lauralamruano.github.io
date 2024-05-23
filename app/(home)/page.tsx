import React from "react";
import Image from "next/image";

import me from "../../assets/images/avatar.png";
import github from "../../assets/icons/icons8-github-24.png";
import whatsapp from "../../assets/icons/icons8-whatsapp-30.png";
import gmail from "../../assets/icons/icons8-gmail-100.png";
import insta from "../../assets/icons/icons8-instagram-50.png";
import ilustracion from "../../assets/images/ilustracion.png";


const HomePage = () => {
  return (
    <main className="flex flex-col mx-4 px-8 lg:my-12 lg:w-full">
      <h1 className=" text-thulian_pink-500 text-3xl font-bold py-5">
        Laura Lam
      </h1>
      <p className="text-sm"><span className="text-thulian_pink-500 text-lg">Welcome!</span> I am Laura and this is my profile</p>
      <div className="flex flex-row items-center py-8 lg:first-letter lg:gap-x-10">
        <Image
          className="rounded-full h-28 w-28 object-cover object-center lg:ms-10 lg:h-40 lg:w-40"
          src={me}
          alt="Picture of the author"
          quality={100}
          priority
        />
        <div className="flex flex-col px-3">
          <div className="flex flex-row px-2  items-center">
            <Image
              className="rounded-full h-6 w-6 lg:h-8 lg:w-auto lg:object-cover lg:object-center lg:rounded-full"
              src={github}
              alt="Picture of the author"
            />
            <a
              className="ml-4  text-thulian_pink-800"
              href="https://github.com/lauralamruano"
            >
              Github
            </a>
          </div>
          <div className="flex flex-row px-2  items-center">
            <Image
              className="rounded-full h-6 w-6 lg:h-8 lg:w-auto lg:object-cover lg:object-center lg:rounded-full"
              src={gmail}
              alt="Picture of the author"
            />
            <a
              className="ml-4  text-thulian_pink-800"
              href="mailto:lamruanolaura@gmail.com"
            >
              Gmail
            </a>
          </div>
          <div className="flex flex-row px-2 py-1 items-center">
            <Image
              className="rounded-full h-6 w-6 lg:h-8 lg:w-auto lg:object-cover lg:object-center lg:rounded-full"
              src={whatsapp}
              alt="Picture of the author"
            />
            <a
              className="ml-4  text-thulian_pink-800"
              href="https://wa.me/+5354916323"
            >
              Whathsapp
            </a>
          </div>
          <div className="flex flex-row px-2  items-center">
            <Image
              className="rounded-full h-6 w-6 lg:h-8 lg:w-auto lg:object-cover lg:object-center lg:rounded-full"
              src={insta}
              alt="Picture of the author"
            />
            <a
              className="ml-4  text-thulian_pink-800"
              href="https://www.instagram.com/lasmujeresprograman/#"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="py-4 text-sm lg:text-base">
        Highly trained and motivated{" "}
        <span className="text-thulian_pink-400">Computer Engineer</span> with
        experience in
        <span className="text-thulian_pink-400"> software development</span>,
        programming and frontend design. Excellent teamwork skills, effective
        communication, and problem-solving skills.
      </p> 
    </main>
  );
};

export default HomePage;
