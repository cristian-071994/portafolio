import React from "react";

const Skills = () => {
  return (
    <article className="px-4">
      <h2 className="text-center py-1 text-4xl font-extrabold">
        Mis Habilidades
      </h2>

      <div className="py-2">
        <h3 className="font-normal underline py-1">Mis habilidades blandas</h3>
        <ul className="font-extralight px-4">
          <li>/* Trabajo en equipo</li>
          <li>/* Capacidad de aprendizaje</li>
          <li>/* Comunicación acertiva</li>
          <li>/* Adaptabilidad</li>
        </ul>
      </div>
      <div>
        <h3 className="font-normal underline py-1">
          Mis habilidades Front-End
        </h3>        
           <ul className="font-extralight px-4 grid grid-cols-2 items-center gap-1">
          <li>/* HTML</li>
          <div className="justify-end ml-20">
            <img className="max-w-[30px]" src="/images/html.png" alt="" />
          </div>
          <li>/* CSS</li>
          <div className="justify-end ml-20">
            <img className="max-w-[30px]" src="/images/css.png" alt="" />
          </div>
          <li>/* JavaScript</li>
          <div className="justify-end ml-20">
            <img className="max-w-[30px]" src="/images/javascript.png" alt="" />
          </div>
          <li>/* TailwindCSS</li>
          <li>/* React</li>
          <li>/* Redux</li>
          <li>/* Vite</li>
        </ul> 
        
        
      </div>
    </article>
  );
};

export default Skills;
