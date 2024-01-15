import React from "react";
import FlipCard from "@/components/FlipCard";
import Layout from "@/components/Layout";
import angie from "/public/angie.jpeg";
import jorjito from '/public/jorjito.jpg';
import mich from '/public/michelle.jpeg';
import nutri from '/public/nutricionista.jpg';
import kathy from '/public/DraKathy.jpg';
import steven from '/public/steven.jpg';
import enfermera from '/public/enfermera.jpg';

const Team = () => {
  return (
    <>
      <Layout>
        <h1 className="text-center text-ferra text-5xl md:text-5xl font-bold">
          Te presentamos a nuestro más que capacitado equipo de trabajo
        </h1>
        <div className="flex flex-wrap gap-5 mt-12 rounded-lg md:flex-row justify-around items-center w-full border-2 border-ferra">
          <FlipCard
            imageUrl={angie}
            title="Angie Ospino"
            description="Terapeuta Facial"
          />
          <FlipCard
            imageUrl={jorjito}
            title="Jorjito Maestre"
            description="Terapeuta Corporal"
          />
          <FlipCard
            imageUrl={mich}
            title="Michel Orozco"
            description="Asistente"
          />
          <FlipCard
            imageUrl={nutri}
            title="Aileen Garcia"
            description="Nutricionista"
          />
          <FlipCard
            imageUrl={kathy}
            title="Dra. Kathy Lorena"
            description="Médico General"
          />
          <FlipCard
            imageUrl={steven}
            title="Steven Lleras"
            description="Preparador Físico"
          />
          <FlipCard
            imageUrl={enfermera}
            title="Wendy Herrera"
            description="Enfermera"
          />
        </div>
      </Layout>
    </>
  );
};

export default Team;
