/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { merriweather } from "@/ui/fonts";

const sede = () => {
  return (
    <>
      <h1 className={`${merriweather.className} antialiased text-center text-2xl my-20`}>
        Elige la sede donde te gustaría ser atendida/o
      </h1>
      <div className="flex justify-around w-full items-center mt-44">
        <a href="agendaCorpSol">
          <div className="w-40 h-40 rounded-md flex-col p-2 flex justify-center border-2 border-maintxt opacity-50 cursor-pointer">
            <Image
              className=" w-full h-full object-cover rounded-md"
              src="/sol.png"
              width={4032}
              height={3024}
              alt="Sede Soledad"
              title="Sede Soledad"
            />
            <p className="text-center text-lg font-bold">Soledad</p>
          </div>
        </a>
        <a href="agendaCorpBaq">
          <div className="w-40 h-40 rounded-md flex flex-col p-6 justify-center border-2 border-maintxt opacity-50 cursor-pointer">
            <Image
              className="w-full h-full object-cover rounded-md"
              src="/baq.png"
              width={3024}
              height={4032}
              alt="Sede Barranquilla"
              title="Sede Barranquilla"
            />
            <p className="text-center text-lg font-bold">Barranquilla</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default sede;
