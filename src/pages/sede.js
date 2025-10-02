/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { merriweather } from "@/ui/fonts";

const sede = () => {
  return (
    <>
      <h1 className={`${merriweather.className} antialiased text-center text-2xl my-20`}>
        Elige la sede donde se llevará a cabo tu tratamiento
      </h1>
      <div className="flex justify-around w-full items-center mt-44">
        <a href="tipoCita">
          <div className="w-48 h-56 rounded-md flex flex-col p-6 justify-center border-2 border-maintxt opacity-70 cursor-pointer">
            <Image
              className="w-full h-full object-cover rounded-md"
              src="/despigmentacion.jpeg"
              width={3024}
              height={4032}
              alt="Sede Estética Médica"
              title="Sede Estética Médica"
            />
            <p className="text-center text-lg font-bold">Sede Cosmoterapéutica</p>
          </div>
        </a>
        <a href="tipoCitaPost">
          <div className="w-48 h-56 rounded-md flex flex-col p-6 justify-center border-2 border-maintxt opacity-70 cursor-pointer">
            <Image
              className="w-full h-full object-cover rounded-md overflow-hidden"
              src="/post3.JPG"
              width={3024}
              height={4032}
              alt="Sede Postoperatorios"
              title="Sede Postoperatorios"
            />
            <p className="text-center text-lg font-bold">Sede Postoperatorios</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default sede;
