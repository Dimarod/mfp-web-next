import Slider from "@/ui/slider";
import React from "react";
import { merriweather } from "@/ui/fonts";
import Layout from "@/components/Layout";

const Treatments = () => {
  return (
    <>
      <Layout>
        <div className="w-full flex flex-col justify-center items-center h-[79vh]">
          <div className="my-3">
            <h1
              className={`${merriweather.className} antialiased text-center text-2xl text-maintxt md:text-6xl`}
            >
              Nuestros servicios
            </h1>
            <p className="text-xs text-center md:text-base text-maintxt">
              Transforma tu cuerpo con cuidado experto
            </p>
          </div>
          <div className="md:w-4/5 flex items-center justify-around py-10 max-h-56 overflow-hidden">
            <Slider />
            <p className="w-1/2 md:text-base text-xs text-maintxt">
              Ofrecemos tratamientos postoperatorios, reductores y moldeadores
              para acelerar tu recuperación y esculpir tu figura. Cada plan
              incluye instrucciones nutricionales personalizadas y
              recomendaciones adicionales para resultados duraderos.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Treatments;
