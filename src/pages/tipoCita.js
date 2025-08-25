/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { merriweather } from "@/ui/fonts";

const sede = () => {
  return (
    <>
      <h1 className={`${merriweather.className} antialiased text-center text-2xl my-20`}>
        Elige el tipo de tratamiento que te gustaría realizarte
      </h1>
      <div className="flex justify-around w-full items-center mt-44">
        <a href="agendaCorpBaq">
          <div className="w-48 h-48 rounded-md flex-col p-2 flex justify-center border-2 border-maintxt opacity-75 cursor-pointer">
            <Image
              className=" w-full h-full object-cover rounded-md p-4"
              src="/corporal.jpeg"
              width={1200}
              height={1600}
              alt="Sede Soledad"
              title="Sede Soledad"
            />
            <p className="text-center text-lg font-bold">Corporal</p>
          </div>
        </a>
        <a href="agendaFacBaq">
          <div className="w-48 h-48 rounded-md flex flex-col p-6 justify-center border-2 border-maintxt opacity-75 cursor-pointer">
            <Image
              className="w-full h-full object-cover rounded-md p-4"
              src="/facial.png"
              width={3024}
              height={4032}
              alt="Sede Barranquilla"
              title="Sede Barranquilla"
            />
            <p className="text-center text-lg font-bold">Dermocosmético</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default sede;
