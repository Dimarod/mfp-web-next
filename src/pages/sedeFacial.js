import React from "react";
import Image from "next/image";
import sol from "/public/Sol.jpg";
import baq from "/public/Baq.jpg";

const sedeFacial = () => {
  return (
    <>
      <h1 className="text-center text-ferra text-4xl font-bold my-20">
        Elige la sede donde te gustaría ser atendida/o
      </h1>
      <div className="flex flex-col md:flex-row justify-around w-full items-center">
        <a href="agendaFacSol">
          <div className="w-64 h-80 rounded-md flex-col p-2 flex justify-center border-4 border-ferra opacity-50 cursor-pointer">
            <Image
              className="object-cover rounded-md"
              src={sol}
              alt="Sede Soledad"
              title="Sede Soledad"
            />
            <p className="text-center text-lg font-bold">Soledad</p>
          </div>
        </a>
        <a href="agendaFacBaq">
          <div className="w-64 h-80 rounded-md flex flex-col p-6 justify-center border-4 border-ferra opacity-50 cursor-pointer">
            <Image
              className="object-cover rounded-md"
              src={baq}
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

export default sedeFacial;
