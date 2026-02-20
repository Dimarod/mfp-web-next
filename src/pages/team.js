import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";

// 1. DATOS DEL EQUIPO (Fácil de editar)
// Aquí asignamos las imágenes que me pasaste a roles lógicos.
// Puedes cambiar los nombres y cargos según corresponda.
const teamMembers = [
  {
    id: 1,
    name: "Angie Ospino",
    role: "Ingeniera Industrial",
    image: "/angie.jpeg",
    specialty: "Terapias Dermocosmética"
  },
  {
    id: 2,
    name: "Jorjito Maestre",
    role: "Psicólogo", // Ajusta el rol real
    image: "/jorjito.jpeg",
    specialty: "Terapias Post Quirúrgicas"
  },
  {
    id: 3,
    name: "Michelle Orozco",
    role: "Terapeuta Corporal",
    image: "/Cosmeatra3.PNG",
    specialty: "Jefa de Personal"
  },
  {
    id: 4,
    name: "Zharick Mejía",
    role: "Cosmetóloga - Cosmeatra",
    image: "/Cosmeatra1.PNG",
    specialty: "Terapias Faciales y Corporales"
  },
  {
    id: 5,
    name: "Merian Orozco",
    role: "Cosmetóloga - Cosmeatra",
    image: "/Cosmeatra2.PNG",
    specialty: "Terapias Faciales y Corporales"
  },
  {
    id: 13,
    name: "Hilalry Fernández",
    role: "Cosmetóloga - Cosmeatra",
    image: "/Cosmeatra5.PNG",
    specialty: "Terapias Faciales y Corporales"
  },
  {
    id: 14,
    name: "Margareth León",
    role: "Enfermero",
    image: "/Cosmeatra4.PNG",
    specialty: "Terapias Faciales y Corporales"
  },
  {
    id: 6,
    name: "Sergio Ortega",
    role: "Deportólogo",
    image: "/Sergio.jpeg",
    specialty: "Coach Personalizado"
  },
  {
    id: 7,
    name: "Viviana Ferrer",
    role: "Psicóloga",
    image: "/psicologa.jpeg",
    specialty: "Recursos Humanos"
  },
  {
    id: 8,
    name: "Juan José Maestre",
    role: "Administrador de Empresas",
    image: "/Juan.PNG",
    specialty: "Gestión y Administración"
  },
  {
    id: 9,
    name: "Mercedes Fontalvo",
    role: "Mercaderista - Asesora de Ventas",
    image: "/Mercedes.jpeg",
    specialty: "Recepción y Atención al Cliente"
  },
  {
    id: 10,
    name: "Diego Maestre",
    role: "Ing. Sistemas",
    image: "/Diego.PNG",
    specialty: "Tecnología y Desarrollo Web"
  },
  {
    id: 11,
    name: "Karolay Mena",
    role: "Abogada",
    image: "/abogada.jpeg",
    specialty: "Departamento Jurídico"
  },
  {
    id: 12,
    name: "Andrés Beleño",
    role: "Enfermero",
    image: "/Andres.jpeg",
    specialty: "Procedimiento Clínico"
  },
];

const Team = () => {
  return (
    <>
      <Head>
        <title>Nuestros Especialistas | My Footprint Barranquilla</title>
        <meta
          name="description"
          content="Conoce al equipo de especialistas de My Footprint. Médicos, fisioterapeutas y esteticistas dedicados a tu recuperación y belleza en Barranquilla. Expertos en tu cuidado."
        />
      </Head>
      <Layout>
        <section className="w-full min-h-screen py-20 bg-transparent" id="team">
          <div className="container mx-auto px-6">

            {/* HEADER DE LA SECCIÓN */}
            <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-sans tracking-[0.2em] text-brand-vanilla-dark uppercase">
                Profesionales a tu servicio
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-brand-black">
                Conoce a nuestro equipo
              </h1>
              <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed">
                Recupera tu confianza y alcanza la mejor versión de ti mismo con el apoyo de nuestros especialistas.
                Estamos aquí para acompañarte en cada paso del proceso.
              </p>
              <div className="w-24 h-0.5 bg-brand-vanilla mx-auto rounded-full"></div>
            </div>

            {/* GRID DE TARJETAS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* CAMBIO 1: Usamos 'aspect-[2/3]' (formato retrato alto).
          Si sientes que quedan MUY altas, cámbialo a 'aspect-[3/4]'.
          Esto asegura que el contenedor tenga forma vertical.
      */}
                  <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      /* CAMBIO 2: 'object-top' es la magia.
                         Asegura que la cabeza siempre se vea.
                      */
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Degradado negro suave abajo para que el texto resalte si decides ponerlo sobre la foto, 
            o simplemente para dar profundidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Información del Miembro */}
                  <div className="p-6 text-center relative z-10 bg-white">
                    {/* Decoración flotante */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm z-20">
                      <div className="w-2 h-2 bg-brand-vanilla rounded-full"></div>
                    </div>

                    <h3 className="font-display text-2xl text-brand-black mt-2">
                      {member.name}
                    </h3>
                    <p className="font-sans text-brand-vanilla-dark font-medium text-sm tracking-wide uppercase mb-2">
                      {member.role}
                    </p>
                    <p className="font-sans text-gray-400 text-xs italic border-t border-gray-100 pt-3 mt-2 inline-block px-4">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Layout>
    </>
  );
};

export default Team;