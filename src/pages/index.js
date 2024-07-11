import Layout from "@/components/Layout";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import mainback from "/public/fondopaginaweb.png";

const About = () => {
  const timelineEvents = [
    {
      date: "01-01-2014",
      title: "Inicio de My Footprint",
      imageUrl: `angie.jpeg`,
    },
    {
      date: "2023-03-15",
      title: "Evento 2",
      imageUrl: `jorjito.jpg`,
    },
    {
      date: "2023-03-15",
      title: "Evento 2",
      imageUrl: `michelle.jpeg`,
    },
    {
      date: "2023-03-15",
      title: "Inicio de My Footprint",
      imageUrl: `angie.jpeg`,
    },
    {
      date: "2023-03-15",
      title: "Evento 2",
      imageUrl: `jorjito.jpg`,
    },
    // Agrega más eventos según sea necesario
  ];

  return (
    <>
      <Layout>
        <h1 className="text-5xl text-center text-ferra font-bold mt-8">
          Conoce un poco más sobre My Footprint
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center mt-12">
          <div className="w-screen md:w-1/3 px-2">
            <Image
              priority={true}
              src={mainback}
              alt="Imagen de Inicio"
              title="Imagen de inicio"
              className="w-full"
            />
          </div>
          <div className="w-screen px-4 md:w-2/3 pt-4 flex justify-center">
            <p className="w-full md:w-3/5 text-ferra text-center">
              Somos un centro terapéutico integral. Contamos con excelentes
              profesionales capacitados para brindar no solo servicios
              estéticos, sino también servicios en medicina, nutrición,
              psicología, dermatología y terapias alternativas (espirituales y
              emocionales). Para ayudarte así a cumplir tu sueño dejando nuestra
              huella.
            </p>
          </div>
        </div>
        {/* <h1 className="text-center text-ferra text-5xl font-bold my-28">
          Nuestra historia
        </h1>
        <p className="text-2xl mb-8 text-ferra">Este ha sido nuestro camino hasta ahora</p>
        <div className="w-full h-72 flex justify-center mt-12">
          <Timeline events={timelineEvents} />
        </div> */}
      </Layout>
    </>
  );
};

export default About;
