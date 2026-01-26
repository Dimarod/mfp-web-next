import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Head from "next/head";

const TreatmentType = () => {
  return (
    <>
    <Head>
      <title>Selecciona el tipo de tratamiento a realizar | My Footprint Barranquilla</title>
      <meta name="description" content="¿Qué deseas mejorar hoy? Selecciona entre nuestros tratamientos corporales de reducción o faciales dermocosméticos. Personaliza tu experiencia en My Footprint."/>
    </Head>
      <Layout>
        <section className="w-full min-h-[85vh] flex flex-col items-center justify-center py-12 px-6 bg-transparent mt-12 mb-6">

          {/* ENCABEZADO */}
          <div className="text-center mb-16 max-w-2xl space-y-4">
            <h1 className="font-display text-3xl md:text-5xl text-brand-black leading-tight">
              ¿Qué área deseas tratar?
            </h1>
            <p className="font-sans text-gray-500 text-sm md:text-base">
              Selecciona el tipo de tratamiento para personalizar tu experiencia.
            </p>
          </div>

          {/* GRID DE OPCIONES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-5xl">

            {/* OPCIÓN 1: CORPORAL (Cosmoterapéutico) */}
            <Link href="/agendaCorpBaq" className="group relative w-full h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Imagen */}
              <Image
                src="/corporal.jpeg"
                alt="Tratamiento Corporal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Texto y Acción */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white flex flex-col items-start justify-end h-full">

                {/* Icono Decorativo (Silueta Cuerpo) */}
                <div className="mb-auto opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 bg-white/20 backdrop-blur-md p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <span className="font-sans text-brand-vanilla-dark text-xs tracking-[0.2em] backdrop-blur-xl uppercase mb-2">
                  Zona Corporal
                </span>
                <h2 className="font-display text-3xl md:text-4xl mb-2 leading-tight">
                  Tratamiento <br /> Cosmoterapéutico
                </h2>
                <p className="font-sans text-gray-300 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
                  Reducción, moldeamiento y terapias postoperatorias para esculpir tu figura.
                </p>

                {/* Botón Simulado */}
                <div className="mt-6 px-6 py-2 border border-white/30 rounded-full font-sans text-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
                  Seleccionar
                </div>
              </div>
            </Link>

            {/* OPCIÓN 2: FACIAL (Dermocosmético) */}
            <Link href="/agendaFacBaq" className="group relative w-full h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Imagen */}
              <Image
                src="/facial.png"
                alt="Tratamiento Facial"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white flex flex-col items-start justify-end h-full">

                {/* Icono Decorativo (Cara/Brillo) */}
                <div className="mb-auto opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 bg-white/20 backdrop-blur-md p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <span className="font-sans text-[#8B5E3C] backdrop-blur-md text-xs tracking-[0.2em] uppercase mb-2">
                  Zona Facial
                </span>
                <h2 className="font-display text-3xl md:text-4xl mb-2 leading-tight">
                  Tratamiento <br /> Dermocosmético
                </h2>
                <p className="font-sans text-gray-300 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
                  Limpiezas profundas, hidratación y rejuvenecimiento para una piel radiante.
                </p>

                <div className="mt-6 px-6 py-2 border border-white/30 rounded-full font-sans text-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
                  Seleccionar
                </div>
              </div>
            </Link>

          </div>
        </section>
      </Layout>
    </>
  );
};

export default TreatmentType;