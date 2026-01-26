import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";

const Contact = () => {
  return (
    <>
    <Head>
      <title>Contáctanos | My Footprint Barranquilla</title>
      <meta name="description" content="Contáctanos en Barranquilla. Ubicación en la Calle 72, WhatsApp y correo para agendar tu cita. Resolvemos tus dudas sobre estética y recuperación integral."/>
    </Head>
      <Layout>
        <div className="w-full min-h-screen bg-transparent relative overflow-hidden">

          {/* Fondo Decorativo Sutil */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          {/* --- HEADER --- */}
          <section className="pt-24 pb-12 px-6 text-center relative z-10">
            <span className="text-xs font-sans tracking-[0.2em] text-brand-vanilla-dark uppercase">
              Estamos para escucharte
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-brand-black mt-4 mb-6">
              Hablemos de tu <br />
              <span className="italic text-brand-vanilla-dark">transformación.</span>
            </h1>
            <p className="font-sans text-gray-500 max-w-xl mx-auto text-base md:text-lg">
              ¿Tienes dudas sobre un procedimiento o quieres saber cuál es el plan ideal para ti?
              Contáctanos directamente.
            </p>
          </section>

          {/* --- GRID DE INFORMACIÓN --- */}
          <section className="container mx-auto px-6 pb-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* 1. TARJETA: CONTACTO DIRECTO (WhatsApp & Email) */}
              <div className="bg-transparent text-brand-vanilla-dark rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                {/* Decoración */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-vanilla rounded-full blur-[50px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

                <div>
                  <h3 className="font-display text-2xl mb-6">Contacto Directo</h3>

                  {/* WhatsApp */}
                  <div className="mb-8">
                    <p className="text-xs text-brand-vanilla font-sans uppercase tracking-widest mb-2">WhatsApp / Citas</p>
                    <a
                      href="https://wa.me/573046209879"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-2xl md:text-3xl font-display text-gray-600 hover:text-brand-vanilla transition-colors"
                    >
                      <span>304 620 9879</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                    <p className="text-sm text-gray-400 mt-2 font-sans">Respuesta inmediata en horario laboral.</p>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-xs text-brand-vanilla-dark font-sans uppercase tracking-widest mb-2">Instagram y Redes</p>
                    <a
                      href="https://www.instagram.com/myfootprintsas"
                      className="text-lg md:text-xl font-sans text-gray-600 hover:text-brand-vanilla transition-colors border-b border-brand-vanilla-dark hover:border-white pb-1"
                    >
                      @myfootprintsas
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-brand-vanilla-dark">
                  <p className="text-sm text-gray-500 font-sans">
                    Horario de Atención: <br />
                    Lunes a Viernes: 8:00 AM - 6:00 PM
                    <br />
                    Sábados: 8:00 AM - 12:00 M
                  </p>
                </div>
              </div>

              {/* 2. TARJETA: UBICACIONES (Sedes) */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col justify-center lg:col-span-2">
                <h3 className="font-display text-2xl text-brand-black mb-8 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-vanilla-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Nuestras Sedes
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                  {/* Sede Estética */}
                  <div className="group">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-vanilla transition-colors duration-300">
                      <span className="font-display text-xl text-brand-black group-hover:text-white">01</span>
                    </div>
                    <h4 className="font-display text-xl text-brand-black mb-2">Cosmoterapia & Dermocosmética</h4>
                    <p className="font-sans text-gray-500 text-sm leading-relaxed">
                      Calle 72 # 41B - 09 <br />
                      <strong className="text-[#8B5E3C]">Piso 3 - Local 307</strong> <br />
                      Barranquilla, Atlántico
                    </p>
                    <a
                      href="https://maps.google.com/?q=Cl+72+%23+41B+-+09+Barranquilla"
                      target="_blank"
                      className="inline-block mt-3 text-xs font-bold uppercase tracking-wider text-brand-black border-b-2 border-brand-vanilla hover:text-brand-vanilla-dark transition-colors"
                    >
                      Ver en Mapa
                    </a>
                  </div>

                  {/* Sede Postoperatorios */}
                  <div className="group">
                    <div className="w-12 h-12 bg-[#8B5E3C]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#8B5E3C] transition-colors duration-300">
                      <span className="font-display text-xl text-[#8B5E3C] group-hover:text-white">02</span>
                    </div>
                    <h4 className="font-display text-xl text-brand-black mb-2">Sede Postoperatoria Adrián Ospino</h4>
                    <p className="font-sans text-gray-500 text-sm leading-relaxed">
                      Calle 72 # 41B - 09 <br />
                      <strong className="text-[#8B5E3C]">Piso 2 - Local 202</strong> <br />
                      Barranquilla, Atlántico
                    </p>
                    <a
                      href="https://maps.google.com/?q=Cl+72+%23+41B+-+09+Barranquilla"
                      target="_blank"
                      className="inline-block mt-3 text-xs font-bold uppercase tracking-wider text-brand-black border-b-2 border-[#8B5E3C] hover:text-[#8B5E3C] transition-colors"
                    >
                      Ver en Mapa
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* --- FORMULARIO DE MENSAJE RÁPIDO --- */}


        </div>
      </Layout>
    </>
  );
};

export default Contact;