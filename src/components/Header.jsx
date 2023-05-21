import React from "react";

const Header = () => {
  return (
    <section className="max-w-[520px] mx-auto grid gap-3">
      <article className="px-3">
        <h2 className="p-2 pb-0 text-center">
          Hola,{" "}
          <span className="text-[#7127BA]">soy Cristian Arley Gutierrez,</span>{" "}
          un desarrollador frontend
        </h2>
        <section className="md:flex md:pr-10 md:py-8">
          <div className="relative">
            <img
              className="mx-auto"
              src="/images/background-image.png"
              alt=""
            />
            <img
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              src="/images/Me.png"
              alt=""
            />
            <img
              className="absolute -top-3 left-1/2 md:-top-10"
              src="/images/Arrow.png"
              alt=""
            />
          </div>

          <div className="grid gap-2">
            <h1 className="text-4xl">
              <span className="text-sm underline">Un diseñador </span> <br />{" "}
              que juzga un libro por su{" "}
              <span className="text-[#7127BA]">portada</span>...
            </h1>
            <h6 className="font-extralight text-xs">
              Porque si la portada no te impresiona ¿qué más puede?
            </h6>
          </div>
        </section>
      </article>      
    </section>
  );
};

export default Header;
