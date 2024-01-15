/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import Pdf from "@/components/Pdf";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const agendaCorpSol = () => {
  const [appoinment, setAppoinment] = useState({
    nombre: "",
    fecha: "",
    horac: "",
    tipoCorp: "",
    telefono: "",
  });

  const handleChange = ({target: {name, value}}) =>{
    console.log(name, value)
    setAppoinment({...appoinment, [name]: value})
  }

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/citas", appoinment);
    console.log(result);
    <Pdf formCorporal={appoinment} />
    router.push("pdfCorporal");
  };
  return (
    <>
      <Layout>
        <h1 className="text-center text-ferra font-bold text-4xl">Asignación de citas</h1>
        <p className="text-ferra text-center">
          Complete los campos para apartar su cita corporal en la sede de
          Soledad
        </p>
        <div className="w-full h-full flex flex-col">
          <form className="text-ferra" onSubmit={handleSubmit}>
            <label className="font-bold">Nombre y apellidos:</label>
            <input
              name="nombre"
              className="backdrop-blur-sm w-full my-3 border-x-2 border-b-2 rounded-md border-ferra"
              type="text"
              onChange={handleChange}
            />
            <label className="font-bold">Fecha:</label>
            <input
              name="fecha"
              className="backdrop-blur-sm my-3 w-full border-x-2 border-b-2 rounded-md border-ferra"
              type="date"
              onChange={handleChange}
            />
            <label className="font-bold">Tipo de cita:</label>
            <select
              name="tipoCorp"
              className="backdrop-blur-sm my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-ferra"
              onChange={handleChange}
            >
              <option value="default"></option>
              <option value="Valoracion">Valoración</option>
            </select>
            <label className="font-bold">Hora de la cita:</label>
            <select
              name="horac"
              className="backdrop-blur-sm my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-ferra"
              onChange={handleChange}
            >
              <option value="default"></option>
              <option value="9201000">9:20 AM - 10:00 AM</option>
            </select>
            <label className="font-bold">Teléfono:</label>
            <input
              name="telefono"
              className="backdrop-blur-sm my-3 w-full border-x-2 border-b-2 rounded-md border-ferra"
              type="number"
              onChange={handleChange}
            />
            <button className="border-2 border-ferra bg-ferra text-white p-1 rounded-md w-full hover:bg-mulberry">
              Agendar Cita
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default agendaCorpSol;
