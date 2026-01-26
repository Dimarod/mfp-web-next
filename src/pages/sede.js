import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importante: Usamos Link de Next
import Layout from "@/components/Layout"; // Envolvemos en tu Layout
import Head from "next/head";

const Sede = () => {
  return (
    <>
    <Head>
      <title>Elige entre nuestra sede Cosmoterapéutica o Postoperatoria | My Footprint Barranquilla</title>
      <meta name="description" content="Selecciona tu sede de atención en Barranquilla. Elige entre nuestra Unidad de Recuperación Postoperatoria o nuestra Sede de Estética y Bienestar. Ubicadas en la Calle 72"/>
    </Head>
      <Layout>
        <section className="w-full min-h-[85vh] flex flex-col items-center justify-center py-10 px-6">

          {/* ENCABEZADO */}
          <div className="text-center mb-12 max-w-2xl space-y-4 mt-12">
            <span className="text-xs font-sans tracking-[0.2em] text-brand-vanilla-dark uppercase">
              Reserva tu cita
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-brand-black leading-tight">
              Selecciona tu Sede
            </h1>
            <p className="font-sans text-gray-500 text-sm md:text-base">
              Elige la ubicación más conveniente para iniciar tu tratamiento.
            </p>
          </div>

          {/* CONTENEDOR DE TARJETAS (GRID) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

            {/* OPCIÓN 1: Sede Cosmoterapéutica */}
            <Link href="/tipoCita" className="group relative w-full h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
              {/* Imagen de Fondo con efecto Zoom */}
              <Image
                src="/despigmentacion.jpeg" // Idealmente cambiar por foto de fachada o recepción
                alt="Sede Estética Médica"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay Oscuro (Gradiente) para que se lea el texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Contenido de Texto (Abajo) */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-sans text-brand-vanilla text-xs tracking-widest uppercase mb-2">
                  Estética & Bienestar
                </p>
                <h2 className="font-display text-3xl mb-2">
                  Sede Cosmoterapéutica
                </h2>
                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-sm font-medium font-sans">Agendar aquí</span>
                  {/* Flecha Icono */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-vanilla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* OPCIÓN 2: Sede Terapias Post */}
            <Link href="/tipoCitaPost" className="group relative w-full h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
              <Image
                src="/post3.JPG" // Idealmente cambiar por foto de sala de masajes
                alt="Sede Postoperatorios"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-sans text-brand-vanilla text-xs tracking-widest uppercase mb-2">
                  Recuperación Avanzada
                </p>
                <h2 className="font-display text-3xl mb-2">
                  Sede Postoperatoria Adrian Ospino
                </h2>
                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-sm font-medium font-sans">Agendar aquí</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-vanilla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </section>
      </Layout>
    </>
  );
};

export default Sede;