/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { isSameDay, isSunday } from "date-fns";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale/es";
registerLocale("es", es);
import Modal from "@/components/Modal";
import { merriweather } from "@/ui/fonts";

const agendaFacBaq = () => {
  const disabledDate = [new Date(2025, 5, 24), new Date(2025, 5, 25), new Date(2025, 5, 26), new Date(2025, 5, 27), new Date(2025, 5, 2), new Date(2025, 5, 23), new Date(2025, 5, 30), new Date(2025, 5, 28), new Date(2025, 5, 29), new Date(2025, 5, 30), new Date(2025, 7, 7), new Date(2025, 7, 18), new Date(2025, 9, 13), new Date(2025, 10, 3), new Date(2025, 10, 17), new Date(2025, 11, 8), new Date(2025, 11, 25)]

  const isDisabledDate = (date) => {
    return disabledDate.some(disabledD => isSameDay(date, disabledD)) || isSunday(date) || new Date(date).getDay() === 6
  }

  const [appoinment, setAppoinment] = useState({
    nombre: "",
    apellido: "",
    fecha: null,
    horaf: "",
    tipoFac: "",
    telefono: "",
  });
  const [alerta, setAlerta] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setAppoinment({ ...appoinment, [name]: value });
  };

  const handleDateChange = (date) => {
    if (date){
      const formattedDate = format(date, "yyyy-MM-dd");
      setAppoinment({ ...appoinment, fecha: formattedDate });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resVerificar = await axios.post(
        "/api/citasFac/verificar",
        appoinment
      );

      if (resVerificar.data.existente) {
        setAlerta("Usted ya tiene una cita agendada para este día");
        return;
      }
      const resSobrecupo = await axios.post(
        "/api/citasFac/sobrecupo",
        appoinment
      );

      if (resSobrecupo.data.sobrecupo) {
        setAlerta(
          "Este horario presenta sobrecupo, por favor seleccione uno diferente"
        );
        return;
      }

      const resAgendar = await axios.post("/api/citasFac/", appoinment);
      if (resAgendar.data.noActual) {
        setAlerta(resAgendar.data.message);
        return;
      } else if (resAgendar.data.weekday) {
        setAlerta(resAgendar.data.message);
        return;
      } else if (resAgendar.data.unavailable) {
        setAlerta(resAgendar.data.message);
        return;
      } else if (resAgendar.data.agendado) {
        setAlerta(resAgendar.data.message);
        return;
      }
    } catch (error) {
      console.log("Hubo un error", err);
    }
  };
  return (
    <>
      <Layout>
        <h1
          className={`${merriweather.className} antialiased text-center text-2xl`}
        >
          Asignación de citas
        </h1>
        <p className="text-xs text-center">
          Complete los campos para apartar su cita facial en la sede de
          Barranquilla
        </p>
        <div className="w-full h-full flex flex-col">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className={`${merriweather.className} antialiased`}>
              Nombre:
            </label>
            <input
              name="nombre"
              className=" w-full my-3 border-x-2 border-b-2 rounded-md border-maintxt/60"
              type="text"
              onChange={handleChange}
              minLength="3"
              required
            />
            <label className={`${merriweather.className} antialiased`}>
              Apellido:
            </label>
            <input
              name="apellido"
              className=" w-full my-3 border-x-2 border-b-2 rounded-md border-maintxt/60"
              type="text"
              onChange={handleChange}
              minLength="3"
              required
            />
            <label className={`${merriweather.className} antialiased`}>
              Fecha:
            </label>
            <DatePicker
              id="datePicker"
              name="fecha"
              selected={
                appoinment.fecha ? parseISO(appoinment.fecha) : null
              }
              onChange={handleDateChange}
              filterDate={(fecha) => !isDisabledDate(fecha)}
              dateFormat="dd/MM/YYYY"
              className="block  w-full my-3 border-x-2 border-b-2 rounded-md border-maintxt/60"
              locale="es"
              required
              autoComplete="off"
            />
            <label className={`${merriweather.className} antialiased`}>
              Tipo de cita:
            </label>
            <select
              name="tipoFac"
              className=" my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-maintxt/60"
              onChange={handleChange}
              required
            >
              <option value="default"></option>
              <option value="Valoracion">Valoración</option>
              <option value="Depilacion">Depilación Láser</option>
              <option value="Hydrafacial">Hydrafacial</option>
              <option value="Plasma">Plasma</option>
              <option value="Radiofrecuencia">Radiofrecuencia Fraccionada</option>
              <option value="Correccion">Correccion Post</option>
              <option value="Despigmentacion">Despigmentación</option>
              <option value="Post">Postoperatorio Facial</option>
              <option value="Armonizacion">Armonización Facial</option>
              <option value="Antiestrias">Antiestrías</option>
            </select>
            <label className={`${merriweather.className} antialiased`}>
              Hora de la cita:
            </label>
            <select
              name="horaf"
              className=" my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-maintxt/60"
              onChange={handleChange}
              required
            >
              <option value="default"></option>
              <option value="9001000">9:00 AM - 10:00 AM</option>
              <option value="10001100">10:00 AM - 11:00 AM</option>
              <option value="11001200">11:00 AM - 12:00 M</option>
              <option value="14001500">2:00 PM - 3:00 PM</option>
              <option value="15001600">3:00 PM - 4:00 PM</option>
            </select>
            <label className={`${merriweather.className} antialiased`}>
              Teléfono:
            </label>
            <input
              name="telefono"
              className=" my-3 w-full border-x-2 border-b-2 rounded-md border-maintxt/60"
              type="number"
              onChange={handleChange}
              required
            />
            <button className=" bg-buttons text-white p-1 rounded-md w-full hover:bg-mulberry">
              Agendar Cita
            </button>
            {alerta && <Modal alerta={alerta} />}
          </form>
        </div>
      </Layout>
    </>
  );
};

export default agendaFacBaq;
