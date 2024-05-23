import React from "react";
import Image from "next/image";

import flutter from "../../../assets/icons/flutter.png";
import android from "../../../assets/icons/android.png";
import css from "../../../assets/icons/css.png";
import dart from "../../../assets/icons/dart.png";
import figma from "../../../assets/icons/figma.png";
import git from "../../../assets/icons/git.png";
import html from "../../../assets/icons/html.png";
import trello from "../../../assets/icons/trello.png";
import javascript from "../../../assets/icons/javascript.png";
import postman from "../../../assets/icons/postman-icon.png";
import python from "../../../assets/icons/python.png";
import vscode from "../../../assets/icons/vscode.png";
import windows from "../../../assets/icons/windows.png";
import macos from "../../../assets/icons/icons8-macos-30.png";
import react from "../../../assets/icons/icons8-react-16.png";
import typescript from "../../../assets/icons/icons8-typescript-50.png";
import mysql from "../../../assets/icons/mysql.png";
import tailwind from "../../../assets/icons/tailwindcss.png";
import spain from "../../../assets/icons/spain.png";
import britian from "../../../assets/icons/great-britain.png";
import italy from "../../../assets/icons/italy.png";
import nvda from "../../../assets/icons/nvda.png";
import veryGood from "../../../assets/icons/very-good.png";
import  aws from "../../../assets/icons/aws.png";
import  bloc from "../../../assets/icons/bloc.png";
import  dependency from "../../../assets/icons/dependency_injection.webp";
import django from "@/assets/icons/djang.png"
import material from '@/assets/icons/material-ui.png'
import sass from '@/assets/icons/sass.png'
import daisy from '@/assets/icons/daisyui.png'
import flask from '@/assets/icons/flask-horizontal.png'
import postgrest from '@/assets/icons/postgresql.png'



const SkillsPage = () => {
  return (
    <main className="flex flex-col w-full px-8 mx-4 lg:my-12">
      <h1 className="text-thulian_pink-500  text-3xl font-bold py-5">Skills</h1>
      <section className="w-full py-5">
        <h2 className="text-thulian_pink-700 text-1xl font-bold">
          Programming languages:
        </h2>
        <ul className="ms-4 flex flex-wrap">
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row items-center">
              <Image
                className="h-6 w-6 mr-1"
                src={python}
                alt="Picture of the author"
              />
              Python
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={dart}
                alt="Picture of the author"
              />
              Dart
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={html}
                alt="Picture of the author"
              />
              HTML
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={css}
                alt="Picture of the author"
              />
              CSS
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={javascript}
                alt="Picture of the author"
              />
              JavaScript
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={typescript}
                alt="Picture of the author"
              />
              TypeScript
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row items-center">
              <Image
                className="h-6 w-6 mr-1"
                src={mysql}
                alt="Picture of the author"
              />
              MySQL
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row items-center">
              <Image
                className="h-6 w-6 mr-1"
                src={postgrest}
                alt="Postgrest"
              />
              PostgretSQL
            </div>
          </li>
        </ul>
      </section>
      <section className="py-5">
        <h2 className="text-thulian_pink-700  text-1xl font-bold">
          Tools and frameworks:
        </h2>
        <ul className="ms-4 flex flex-wrap">
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={flutter}
                alt="Picture of the author"
              />
              Flutter
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={android}
                alt="Picture of the author"
              />
              Android Studio
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={git}
                alt="Picture of the author"
              />
              Git
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={vscode}
                alt="Picture of the author"
              />
              VSCode
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={react}
                alt="Picture of the author"
              />
              React
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={figma}
                alt="Picture of the author"
              />
              Figma
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={aws}
                alt="Picture of the author"
              />
              Amazon Web Services
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={postman}
                alt="Picture of the author"
              />
              Postman
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={nvda}
                alt="Picture of the author"
              />
              NVDA
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={tailwind}
                alt="Picture of the author"
              />
              Tailwind
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={trello}
                alt="Picture of the author"
              />
              Trello
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={django}
                alt="Django"
              />
              Django
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={material}
                alt="Material Ui"
              />
              Material Ui
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={sass}
                alt="Saass"
              />
              Saass
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={daisy}
                alt="DaysiUI"
              />
              DaysiUI 
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={flask}
                alt="Flask"
              />
               Flask 
            </div>
          </li>
        </ul>
      </section>
      <section className="py-5">
        <h2 className="text-thulian_pink-700  text-1xl font-bold">
          Operating systems:
        </h2>
        <ul className="ms-4 flex flex-wrap">
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={windows}
                alt="Picture of the author"
              />
              Windows
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={macos}
                alt="Picture of the author"
              />
              MacOS
            </div>
          </li>
        </ul>
      </section>
      <section className="w-full py-5">
        <h2 className="text-thulian_pink-700  text-1xl font-bold">Patterns of design and best practices:</h2>
        <ul className="ms-4 flex flex-wrap">
        <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={veryGood}
                alt="Picture of the author"
              />
              Very Good Architecture
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={bloc}
                alt="Picture of the author"
              />
              BLoC pattern
            </div>
          </li>
          <li className="mr-2.5 mt-2">
            <div className="flex flex-row">
              <Image
                className="h-6 w-6 mr-1"
                src={dependency}
                alt="Picture of the author"
              />
              Dependency injection
            </div>
          </li>
        </ul>
      </section>
      <section className="ms-4 flex flex-col py-5 w-full">
        <h2 className="text-thulian_pink-700  text-1xl font-bold">Languages</h2>
        <div className="flex flex-row">
          <Image
            className="h-6 w-6 mr-1"
            src={spain}
            alt="Picture of the author"
          />
          Spanish(native)
        </div>
        <div className="flex flex-row">
          <Image
            className="h-6 w-6 mr-1"
            src={britian}
            alt="Picture of the author"
          />
          English(intermediate)
        </div>
        <div className="flex flex-row">
          <Image
            className="h-6 w-6 mr-1"
            src={italy}
            alt="Picture of the author"
          />
          Italian(basic)
        </div>
      </section>
      <section>
        <h1 className="text-thulian_pink-700  text-1xl font-bold">
          Education</h1>
          <p>University of Cienfuegos</p>
        <p className="tex-sm text-thulian_pink-300">Carlos Rafael Rodriguez.
        </p>
        <p  >Computer Engineer (in progress)</p>
      </section>
    </main>
  );
};

export default SkillsPage;
