import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Hero = () => {
  return (
    <>
      <Head>
        <title>Centro Terapéutico Integral My Footprint Barranquilla | Cuidado Postoperatorio</title>
        <meta
          name="description"
          content="Centro Terapéutico Integral en Barranquilla. Especialistas en recuperación postoperatoria, estética facial y corporal. Vive una experiencia de lujo y bienestar en la Calle 72."
        />
      </Head>
      <Layout>

        <section className="relative w-full min-h-[90vh] bg-transparent flex items-center overflow-hidden">

          {/* Elemento Decorativo de Fondo (Círculo difuminado) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-6 pt-20 md:pt-0 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

              {/* 1. COLUMNA DE TEXTO (Izquierda) */}
              <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">

                {/* Etiqueta pequeña superior */}
                <span className="inline-block py-1 px-3 border border-brand-vanilla rounded-full text-brand-vanilla-dark text-xs font-sans tracking-widest uppercase mb-2">
                  Centro Terapéutico Integral
                </span>

                {/* Título Principal con la nueva fuente Tenor Sans */}
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-600 leading-tight">
                  Cumplimos tu sueño, <br />
                  <span className="italic text-gray-800 lg:text-7xl">dejando nuestra huella.</span>
                </h1>

                {/* Subtítulo con DM Sans */}
                <p className="font-sans text-gray-500 text-base md:text-lg leading-loose max-w-lg mx-auto md:mx-0 text-justify md:text-left">
                  Somos un centro terapéutico integral dedicado a cuidar tu bienestar físico, emocional y espiritual. <br /> Nuestro equipo interdisciplinario te ofrece
                  tratamientos personalizados en: cirugía plástica reconstructiva, cirugía estética, dermatología, psicología, nutrición, deportología, holística, terapias post-operatorias,
                  cuidados de la piel y estética. Eleva tuautoéstima y proyecta la seguridad que llevas dentro. Tu bienestar es nuestra misión y juntos haremos realidad tus sueños.
                </p>
                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <Link href="/sede">
                    <button className="bg-brand-vanilla text-white px-8 py-4 rounded-full font-sans font-medium tracking-wide hover:bg-brand-vanilla-dark transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                      Agendar Cita
                    </button>
                  </Link>

                  <Link href="/treatments">
                    <button className="flex items-center text-gray-600 px-8 py-4 rounded-full font-sans font-medium hover:bg-white/50 transition-all w-full sm:w-auto justify-center">
                      <span>Ver Tratamientos</span>
                      {/* Flecha simple */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>

                {/* Stats / Prueba Social (Opcional pero genera confianza) */}
                <div className="pt-4 flex items-center justify-center md:justify-start gap-8 border-t border-gray-300/50 mt-8">
                  <div>
                    <p className="font-display text-2xl text-brand-vanilla-dark">5+</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Especialistas</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-brand-vanilla-dark">2</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Sedes</p>
                  </div>
                </div>
              </div>

              {/* 2. COLUMNA DE IMAGEN (Derecha) */}
              <div className="w-full md:w-1/2 relative">
                {/* Contenedor de la imagen principal con forma interesante */}
                <div className="relative w-full h-[500px] md:h-[600px] rounded-t-full rounded-b-[200px] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/main.jpeg" // NECESITAS BUSCAR ESTA IMAGEN
                    alt="Paciente relajada en terapia"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Overlay gradiente suave abajo para dar profundidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Tarjeta Flotante "Confort" */}
                <div className="absolute bottom-10 left-0 md:-left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs animate-bounce-slow hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-vanilla/20 p-2 rounded-full text-brand-vanilla-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-brand-black text-sm">Enfoque Integral</p>
                      <p className="text-xs text-gray-500 font-sans">Mente sana, cuerpo sano.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Hero;
