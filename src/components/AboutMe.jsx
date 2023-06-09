import React from "react";

const AboutMe = () => {
  return (
    <article className="max-w-[980px] mx-auto">
      <h1 className="text-4xl p-2 font-extrabold text-center">Acerca de mi</h1>
      <section className="px-4 text-sm md:flex md:items-center md:z-20 md:relative md:bg-[#11071F]">
        <p className="text-sm m-2">
          <span className="text-xl">
            Ingeniero de Software Full-Stack en proceso.
          </span>{" "}
          <br /> <br /> Actualmente, soy estudiante de Programación Web
          Full-Stack en{" "}
          <a
            className="text-red-500"
            href="https://www.academlo.com/"
            target="_blank"
          >
            Academlo
          </a>
          <br /> <br />
          He completado los módulos de{" "}
          <a
            className="text-[#7127BA]"
            href="https://certificates.academlo.com/en/verify/79987935185789"
            target="_blank"
          >
            Fundamentos de Desarrollo Web con HTML, CSS y JavaScript
          </a>{" "}
          y{" "}
          <a
            className="text-[#7127BA]"
            href="https://certificates.academlo.com/en/verify/96216776864475"
            target="_blank"
          >
            Desarrollo de Aplicaciones Web con React
          </a>
        </p>
        <p className="font-light bg-[#11071F] relative z-20 md:p-3">
          Probablemente soy el diseñador más apasionado con el que trabajarás.
          Si tienes un gran proyecto que necesita algunas habilidades
          increíbles, soy quien estás buscando.
        </p>
      </section>
      <div className="max-w-[320px] m-auto md:max-w-[520px]">
        
        <img className="relative -top-6 px-2 md:-top-9" src="/images/technologies.png" alt="" />
      </div>
    </article>
  );
};

export default AboutMe;
