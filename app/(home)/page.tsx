import React from "react";
import Image from "next/image";

import me from "../../assets/images/r.jpg";
import github from "../../assets/icons/icons8-github-24.png";
import whatsapp from "../../assets/icons/icons8-whatsapp-30.png";
import gmail from "../../assets/icons/icons8-gmail-100.png";
import insta from "../../assets/icons/icons8-instagram-50.png";

const HomePage = () => {
  return (
    <main className="flex flex-col ml-4 mr-3 px-8">
      <h1 className=" text-thulian_pink-500 text-3xl font-semibold py-2">
        Laura Lam
      </h1>
      <p>Hi, I am Laura and this is my profile</p>
      <div className="flex flex-row items-center py-8 ">
        <Image
          className="rounded-full h-28 w-28 object-cover object-center"
          src={me}
          alt="Picture of the author"
          quality={100}
          priority
        />
        <div className="flex flex-col px-3">
          <div className="flex flex-row px-2  items-center">
            <Image
              className="rounded-full h-6 w-6"
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
              className="rounded-full h-6 w-6"
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
              className="rounded-full h-6 w-6"
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
              className="rounded-full h-6 w-6"
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
      <p className="py-4">
        Highly trained and motivated{" "}
        <span className="text-thulian_pink-400">Computer Engineer</span> with
        experience in
        <span className="text-thulian_pink-400"> software development</span>,
        programming and frontend design. Excellent teamwork skills, effective
        communication, and problem-solving skills.
      </p>
      <hr className=" bg-tutext-thulian_pink-800" />
      <section>
        <p className="text-1xl py-4">
          I am passionate about the world of
          <span className="text-thulian_pink-400"> design</span> and{" "}
          <span className="text-thulian_pink-400"> Arts</span>. I have always
          enjoyed programming and creation of
          <span className="text-thulian_pink-400"> websites</span> and{" "}
          <span className="text-thulian_pink-400"> applications</span>, which has
          led me to specialize in{" "}
          <span className="text-thulian_pink-400">frontend development</span>.
        </p>
      </section>
      <hr className=" bg-tutext-thulian_pink-700" />
      <section>
        <p className="text-1xl py-4">
          <span className="text-thulian_pink-400">Computer science</span> has
          given me a set of{" "}
          <span className="text-thulian_pink-400"> technical tools</span> to take
          my passion for design and arts to another level. I I love to think
          creatively and outside of the conventional, which makes me allows us
          to offer personalized and <span className="text-thulian_pink-400">innovative solutions</span> for each
          one of my projects.
        </p>
        <hr className=" bg-tutext-thulian_pink-800" />
        <p className="text-1xl py-4">
          I am constantly learning and updating myself on the latest trends in
          <span className="text-thulian_pink-400"> design</span> and <span className="text-thulian_pink-400">programming</span>. This allows me to
          always be prepared to implement unique and visually{" "}
          <span className="text-thulian_pink-400"> attractive solutions</span>.
        </p>
        <hr className=" bg-tutext-thulian_pink-700" />
        <p className="text-1xl py-4">
          My motivation and commitment make me an{" "}
          <span className="text-thulian_pink-400"> excellent collaborator</span> in a work team. I like to work
          collaboratively with others professionals to achieve the{" "}
          <span className="text-thulian_pink-400"> best possible results</span>.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
