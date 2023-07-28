import React from "react";

const SkillsPage = () => {
  return (
    <main className="skills-page ms-4">
      <h1 className="text-pink-700  text-2xl font-bold">Habilidades</h1>
      <hr />
      <section>
        <h2 className="text-pink-700 text-1xl font-bold">Lenguajes de programacion:</h2>
        <ul className="ms-4">
          <li>Python</li>
          <li>Dart</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2 className="text-pink-700  text-1xl font-bold">Sistemas operativos:</h2>
        <ul className="ms-4">
          <li>Windows</li>
          <li>Macos</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2 className="text-pink-700  text-1xl font-bold" >Herrmientas y frameworks:</h2>
        <ul className="ms-4">
          <li>Flutter</li>
          <li>Android Studio</li>
          <li>Git</li>
          <li>VSCode</li>
          <li>React</li>
          <li>Figma</li>
          <li>Postman</li>
          <li></li>
        </ul>
      </section>
      <hr />
      <section>
        <h2 className="text-pink-700  text-1xl font-bold">Idiomas</h2>
        <p>Español(nativo)</p>
        <p>Ingles(medio)</p>
      </section>
    </main>
  );
};

export default SkillsPage;
