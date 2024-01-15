import Card from "@/components/Card";
import React from "react";
import corporal from "/public/corporal.jpeg";
import facial from "/public/facial.jpeg";
import despigmentacion from "/public/despigmentacion.jpeg";
import reductor from "/public/reductor.jpeg";
import gluteos from '/public/Gluteos.jpeg';
import laser from '/public/Laser.jpeg';
import postoperatorio from '/public/Postoperatorio.jpeg';
import masajes from '/public/Masajes2.jpeg';
import plasma from '/public/Plasma.jpeg';
import moldeador from '/public/moldeador.jpeg'
import Layout from "@/components/Layout";

const Treatments = () => {
  return (
    <>
      <Layout>
        <h1 className="text-ferra font-bold text-5xl text-center py-6">Conoce nuestros tratamientos y concédenos el placer de atenderte</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 border-2 border-ferra w-full p-6">
          {/* Personaliza las propiedades de cada tarjeta según tus necesidades */}
          <Card
            imageUrl={corporal} // Reemplaza con la URL de tu imagen
            description="Corporal"
          />
          <Card
            imageUrl={facial} // Reemplaza con la URL de tu imagen
            description="Facial"
          />
            <Card
              imageUrl={postoperatorio} // Reemplaza con la URL de tu imagen
              description="Postoperatorio"
            />
          <Card
            imageUrl={despigmentacion} // Reemplaza con la URL de tu imagen
            description="Despigmentación"
          />
            <Card
              imageUrl={reductor} // Reemplaza con la URL de tu imagen
              description="Reductor"
            />
          <Card
            imageUrl={laser} // Reemplaza con la URL de tu imagen
            description="Láser"
          />
          <Card
            imageUrl={moldeador} // Reemplaza con la URL de tu imagen
            description="Moldeador"
          />
          <Card
            imageUrl={masajes} // Reemplaza con la URL de tu imagen
            description="Masajes Relajantes"
          />
          <Card
            imageUrl={plasma} // Reemplaza con la URL de tu imagen
            description="Plasma"
          />
          <Card
            imageUrl={gluteos} // Reemplaza con la URL de tu imagen
            description="Glúteos 3D"
          />
          {/* Agrega más tarjetas según sea necesario */}
        </div>
      </Layout>
    </>
  );
};

export default Treatments;
