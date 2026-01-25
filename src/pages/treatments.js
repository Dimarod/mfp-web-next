import Slider from "@/ui/slider"; 
import Layout from "@/components/Layout";
import Link from "next/link";

const Treatments = () => {
  return (
    <Layout>
      <section className="w-full min-h-[90vh] flex items-center justify-center py-2 md:py-0 mb-7">
        <div className="container mx-auto px-6">
          
          {/* HEADER */}
          <div className="text-center mb-12 mt-20 space-y-3">
            <span className="text-xs font-sans tracking-[0.2em] text-brand-vanilla-dark uppercase">
              Excelencia Médica & Estética
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-brand-black">
              Nuestros Servicios
            </h1>
            <div className="w-24 h-0.5 bg-brand-vanilla mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* 1. EL SLIDER (Columna Izquierda) */}
            {/* CAMBIO CLAVE: h-[500px] md:h-[650px] para formato VERTICAL */}
            <div className="relative w-full h-[500px] md:h-[650px] order-2 md:order-1 px-4 md:px-0">
              {/* Marco decorativo desplazado */}
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-vanilla rounded-3xl hidden md:block z-0"></div>
              
              {/* Contenedor del slider */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 z-10 bg-gray-100">
                <Slider />
              </div>
            </div>

            {/* 2. EL TEXTO (Columna Derecha) */}
            <div className="space-y-8 order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-4xl text-brand-black leading-tight">
                Resultados que <br/>
                <span className="italic text-brand-vanilla-dark">hablan por sí mismos.</span>
              </h2>

              <p className="font-sans text-gray-600 text-lg leading-loose text-justify md:text-left">
                Nuestras terapias están diseñadas para respetar la anatomía de tu cuerpo mientras potenciamos los resultados de tu cirugía o tratamiento estético.
              </p>

              <div className="bg-brand-platinum/30 p-6 rounded-xl border border-brand-platinum">
                <p className="font-sans text-brand-black font-medium mb-2">Incluye:</p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-vanilla rounded-full mr-3"></span>
                    Drenaje linfático manual avanzado
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-vanilla rounded-full mr-3"></span>
                    Aparatología de última generación
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-vanilla rounded-full mr-3"></span>
                    Seguimiento nutricional personalizado
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Treatments;