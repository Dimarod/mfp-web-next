/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import Modal from "@/components/Modal";

const agendaCorpSol = () => {
  const [appoinment, setAppoinment] = useState({
    nombre: "",
    fecha: "",
    horac: "",
    tipoCorp: "",
    telefono: "",
  });
  const [alerta, setAlerta] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setAppoinment({ ...appoinment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resVerificar = await axios.post(
        "/api/citassol/verificar",
        appoinment
      );

      if (resVerificar.data.existente) {
        setAlerta("Usted ya tiene una cita agendada para este día");
        return;
      }
      const resSobrecupo = await axios.post("/api/citassol/sobrecupo", appoinment);

      if (resSobrecupo.data.sobrecupo) {
        setAlerta(
          "Este horario presenta sobrecupo, por favor seleccione uno diferente"
        );
        return;
      }
      const resAgendar = await axios.post("/api/citassol/", appoinment);
      if (resAgendar.data.agendado) {
        setAlerta("Usted ha sido agendado exitosamente");
        return;
      }
    } catch (error) {}
  };
  return (
    <>
      <Layout>
        <h1 className="text-center text-ferra font-bold text-4xl">
          Asignación de citas
        </h1>
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
              required
            />
            <label className="font-bold">Fecha:</label>
            <input
              name="fecha"
              className="backdrop-blur-sm my-3 w-full border-x-2 border-b-2 rounded-md border-ferra"
              type="date"
              onChange={handleChange}
              required
            />
            <label className="font-bold">Tipo de cita:</label>
            <select
              name="tipoCorp"
              className="backdrop-blur-sm my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-ferra"
              onChange={handleChange}
              required
            >
              <option value="default"></option>
              <option value="Valoracion">Valoración</option>
              <option value="Antiguo">Tratamiento ya iniciado</option>
              <option value="Post">Postoperatorio</option>
              <option value="Suero">Sueroterapia</option>
              {/* <option value="Gym">Gym</option> */}
              {/* <option value="Love">Plan Love</option> */}
              <option value="Reina">Reina</option>
              <option value="Publicidad">Publicidad</option>
              <option value="Nutricion">Nutrición</option>
            </select>
            <label className="font-bold">Hora de la cita:</label>
            <select
              name="horac"
              className="backdrop-blur-sm my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-ferra"
              onChange={handleChange}
              required
            >
              <option value="default"></option>
              <option value="720800">7:20 AM - 8:00 AM</option>
              <option value="800840">8:00 AM - 8:40 AM</option>
              <option value="840920">8:40 AM - 9:20 AM</option>
              <option value="9201000">9:20 AM - 10:00 AM</option>
              <option value="10001040">10:00 AM - 10:40 AM</option>
              <option value="10401120">10:40 AM - 11:20 AM</option>
              <option value="11201200">11:20 AM - 12:00 PM</option>
              <option value="12001240">12:00 PM - 12:40 PM</option>
              <option value="12401320">12:40 PM - 1:20 PM</option>
              <option value="13201400">1:20 PM - 2:00 PM</option>
              <option value="14001440">2:00 PM - 2:40 PM</option>
              <option value="14401520">2:40 PM - 3:20 PM</option>
              <option value="15201600">3:20 PM - 4:00 PM</option>
              <option value="16001640">4:00 PM - 4:40 PM</option>
              <option value="16401720">4:40 PM - 5:20 PM</option>
              <option value="17201800">5:20 PM - 6:00 PM</option>
              <option value="18001840">6:00 PM - 6:40 PM</option>
              <option value="18401920">6:40 PM - 7:20 PM</option>
              <option value="19202000">7:20 PM - 8:00 PM</option>
            </select>
            <label className="font-bold">Teléfono:</label>
            <input
              name="telefono"
              className="backdrop-blur-sm my-3 w-full border-x-2 border-b-2 rounded-md border-ferra"
              type="number"
              onChange={handleChange}
              required
            />
            <button className="border-2 border-ferra bg-ferra text-white p-1 rounded-md w-full hover:bg-mulberry">
              Agendar Cita
            </button>
            {alerta && <Modal alerta={alerta} />}
          </form>
        </div>
      </Layout>
    </>
  );
};

export default agendaCorpSol;
