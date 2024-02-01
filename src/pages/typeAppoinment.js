import React from "react";
import Image from "next/image";
import corp from "/public/corporal.jpeg";
import fac from "/public/facial.jpeg";
import Layout from "@/components/Layout";

const typeAppoinment = () => {
  return (
    <>
      <Layout>
        <h1 className="text-center text-ferra text-4xl font-bold mt-12 md:mt-20 mb-20">
          Elige el tipo de tratamiento al que vas a acudir
        </h1>
        <div className="w-full items-center flex flex-col md:flex-row">
          <div className="md:w-1/2 p-1 border-2 border-ferra rounded-md text-center mb-4 md:mb-0">
            <span className="text-lg text-ferra font-semibold">Corporal</span>
            <a href="sede">
              <Image
                className="rounded-md object-cover opacity-50"
                src={corp}
                alt="Corporal"
                title="Corporal"
              />
            </a>
          </div>
          <div className="md:w-1/2 p-1 border-2 border-ferra rounded-md text-center">
          <span className="text-lg text-ferra font-semibold">Facial</span>
            <a href="sedeFacial">
              <Image
                className="rounded-md object-cover opacity-50"
                src={fac}
                alt="facial"
                title="Facial"
              />
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default typeAppoinment;
