import React, { useState } from "react";

const NavBar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <header className="flex justify-between py-8 px-4 text-2xl text-white items-center bg-[#1A0B2E] fixed w-screen md:py-0 z-50">
      <h1 className="font-semibold">Cristian.G</h1>
      <i
        onClick={handleShowNav}
        className="bx bx-menu text-3xl cursor-pointer md:hidden"
      ></i>

      <nav
        className={`absolute top-full ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid text-lg bg-indigo-950 duration-200 md:static md:flex md:w-auto md:gap-2 md:bg-inherit md:text-center md:items-center`}
      >
        <a className="hover:bg-violet-800 p-4 duration-200 pl-2" href="#">
          Inicio
        </a>
        <a className="hover:bg-violet-800 p-4 duration-200 pl-2" href="#">
          Acerca de mi
        </a>
        <a className="hover:bg-violet-800 p-4 duration-200 pl-2" href="#">
          Mis habilidades
        </a>
        <a className="hover:bg-violet-800 p-4 duration-200 pl-2" href="#">
          Mis Proyectos
        </a>
        <a className="hover:bg-violet-800 p-4 duration-200 pl-2" href="#">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
