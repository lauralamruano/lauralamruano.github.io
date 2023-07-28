import React from "react";

const AboutPage = () => {
  return (
    <main className=" mr-4 ml-4">
      <h1 className="text-2xl font-bold text-pink-700">Sobre mi</h1>
      <section>
        <p className="text-1xl py-4">
          Soy desarrolladora de software y me apasiona el mundo del diseño y las
          artes. Desde siempre, he disfrutado de la programación y de la
          creación de sitios web y aplicaciones, lo que me ha llevado a
          especializarme en el desarrollo frontend.
        </p>
      </section>
      <hr className=" bg-pink-700"/>
      <section>
        <p className="text-1xl py-4">
          La informática me ha brindado un conjunto de herramientas técnicas
          para llevar mi pasión por el diseño y las artes a otro nivel. Me
          encanta pensar de forma creativa y fuera de lo convencional, lo que me
          permite ofrecer soluciones personalizadas e innovadoras para cada uno
          de mis proyectos.
        </p>
        <hr className=" bg-pink-700"/>
        <p className="text-1xl py-4">
          Estoy constantemente aprendiendo y actualizándome en las últimas
          tendencias en diseño y programación. Esto me permite estar siempre
          preparada para implementar soluciones únicas y visualmente atractivas.
        </p>
        <hr className=" bg-pink-700"/>
        <p className="text-1xl py-4">
          Mi motivación y compromiso hacen que sea una excelente colaboradora en
          un equipo de trabajo. Me gusta trabajar en colaboración con otros
          profesionales para lograr los mejores resultados posibles.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
