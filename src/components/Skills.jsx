import React from "react";

const Skills = () => {
  return (
    <article className="px-4 max-w-[980px] mx-auto ">
      <h2 className="text-center py-1 text-4xl font-extrabold">
        Mis Habilidades
      </h2>

      <section className="grid sm:grid-cols-3  gap-2 justify-center">
        <div className="py-2 border-[3px] bg-gradient-to-r from-[#130428] to-[#38126D] border-[#38126D] rounded-md sm:h-96 px-2 shadow-md max-w-[290px] md:w-full">
        <h3 className="font-normal underline py-1">Mis habilidades blandas</h3>
        <ul className="font-extralight px-4">
          <li>/* Trabajo en equipo</li>
          <li>/* Capacidad de aprendizaje</li>
          <li>/* Comunicación acertiva</li>
          <li>/* Adaptabilidad</li>
        </ul>
      </div>
      <div className="py-2 border-[3px] bg-gradient-to-r from-[#130428] to-[#38126D] border-[#38126D] rounded-md sm:h-96 px-2 shadow-md max-w-[290px] sm:w-full">
        <h3 className="font-normal underline py-1">
          Mis habilidades Front-End
        </h3>
        <ul className="font-extralight px-4 items-center gap-2 grid grid-cols-2 ">
          <li>/* HTML</li>

          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/html.png" alt="" />
          </div>

          <li>/* CSS</li>

          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/css.png" alt="" />
          </div>

          <li>/* JavaScript</li>

          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/javascript.png" alt="" />
          </div>

          <li>/* TailwindCSS</li>
          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/Tailwind.png" alt="" />
          </div>
          <li>/* React</li>
          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/React.png" alt="" />
          </div>
          <li>/* Redux</li>
          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/redux.png" alt="" />
          </div>
          <li>/* Vite</li>
          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/vite.png" alt="" />
          </div>
        </ul>
      </div>

      <div className="py-2 border-[3px] bg-gradient-to-r from-[#130428] to-[#38126D] border-[#38126D] rounded-md sm:h-96 px-2 shadow-md max-w-[290px] sm:w-full">
        <h3 className="font-normal underline py-1">Mis habilidades Back-End</h3>
        <ul className="font-extralight px-4 items-center gap-2 grid grid-cols-2 ">
          <li>/* Nodejs</li>

          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/nodejs.png" alt="" />
          </div>

          <li>/* Sql</li>

          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/sql-data.png" alt="" />
          </div>

          <li>/* Java</li>

          <div className="flex justify-end">
            <img className="max-w-[30px]" src="/images/Java.png" alt="" />
          </div>
        </ul>
      </div>
      </section>

      
    </article>
  );
};

export default Skills;
