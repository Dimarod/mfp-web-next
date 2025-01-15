import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { merriweather } from "@/ui/fonts";

const Team = () => {
  return (
    <>
      <Layout>
        <div className="w-full flex flex-col items-center py-10 h-[79vh] md:h-fit justify-center" id="team">
          <h1 className={`${merriweather.className} antialiased md:text-6xl text-2xl text-center`}>
            Conoce a nuestro equipo
          </h1>
          <p className="text-center md:text-base md:pt-2 text-maintxt text-xs">
            Recupera tu confianza y alcanza la mejor versión de ti mismo, con el
            apoyo de nuestro equipo especializado. Estamos aquí para acompañarte
            en cada paso del proceso.
          </p>
          <div className="w-2/4 rounded-lg justify-around h-72 md:h-[100vh] mt-7 relative grid grid-cols-6 gap-4">
            <div className="col opacity-50 hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:opacity-100 hover:z-50 rounded-lg hover:rounded-lg transition-all h-full duration-700 bg-mainbg">
              <Image
                src="/angie.jpeg"
                alt="angie"
                width={624}
                height={1024}
                className="w-full h-full object-cover md:hover:object-contain rounded-tl-lg rounded-bl-lg hover:rounded-lg transition-all duration-500"
              />
            </div>
            <div className="col opacity-50 hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:opacity-100 hover:z-50 rounded-lg hover:rounded-lg transition-all duration-700 bg-mainbg">
              <Image
                src="/jorjito.jpeg"
                alt="jorjito"
                width={624}
                height={1024}
                className="w-full h-full object-cover md:hover:object-contain hover:rounded-lg transition-all duration-500"
              />
            </div>
            <div className="col opacity-50 hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:opacity-100 hover:z-50 rounded-lg hover:rounded-lg transition-all duration-700 bg-mainbg">
              <Image
                src="/psicologa.jpeg"
                alt="psicologa"
                width={624}
                height={1024}
                className="w-full h-full md:hover:object-contain object-cover hover:rounded-lg transition-all duration-500"
              />
            </div>
            <div className="col opacity-50 hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:opacity-100 hover:z-50 rounded-lg hover:rounded-lg transition-all duration-700 bg-mainbg">
              <Image
                src="/draKathy.jpg"
                alt="med-general"
                width={624}
                height={1024}
                className="w-full h-full object-cover md:hover:object-contain hover:rounded-lg transition-all duration-500"
              />
            </div>
            <div className="col opacity-50 hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:opacity-100 hover:z-50 rounded-lg hover:rounded-lg transition-all duration-700 bg-mainbg">
              <Image
                src="/enfermera.jpg"
                alt="enfermera"
                width={624}
                height={1024}
                className="w-full h-full object-cover md:hover:object-contain hover:rounded-lg transition-all duration-500"
              />
            </div>
            <div className="col opacity-50 hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:opacity-100 hover:z-50 rounded-lg hover:rounded-lg transition-all duration-700 bg-mainbg">
              <Image
                src="/steven.jpg"
                alt="fisioterapeuta"
                width={624}
                height={1024}
                className="w-full h-full object-cover md:hover:object-contain rounded-tr-lg rounded-br-lg hover:rounded-lg transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Team;
