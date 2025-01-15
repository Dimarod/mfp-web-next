/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { isSunday, isSameDay } from "date-fns";
import { es } from "date-fns/locale/es";
registerLocale("es", es);
import Modal from "@/components/Modal";
import { merriweather } from "@/ui/fonts";

const agendaCorpSol = () => {
  return (
    <Layout>
      <div className="h-[402px] md:h-[75vh] flex flex-col justify-center items-center">
        <h1 className={ `${merriweather.className} antialiased text-center md:text-6xl text-4xl` }>¡Oops!</h1>
        <p className="text-center py-4 md:text-xl">
          Estamos transladando esta sede, en nuestras redes te contaremos cuando
          todo esté listo. ¡Gracias por tu paciencia!
        </p>
      </div>
    </Layout>
  );
  // const disabledDate = null;

  // const isDisabledDate = (date) => {
  //   return isSunday(date) || isSameDay(date, disabledDate);
  // };

  // const [appoinment, setAppoinment] = useState({
  //   nombre: "",
  //   apellido: "",
  //   fecha: null,
  //   horac: "",
  //   tipoCorp: "",
  //   telefono: "",
  // });
  // const [alerta, setAlerta] = useState("");

  // const handleChange = ({ target: { name, value } }) => {
  //   console.log(name, value);
  //   setAppoinment({ ...appoinment, [name]: value });
  // };

  // const handleDateChange = (date) => {
  //   setAppoinment({ ...appoinment, fecha: date });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const resVerificar = await axios.post("/api/citas/verificar", appoinment);

  //     if (resVerificar.data.existente) {
  //       setAlerta("Usted ya tiene una cita agendada para este día");
  //       return;
  //     }
  //     const resSobrecupo = await axios.post("/api/citas/sobrecupo", appoinment);

  //     if (resSobrecupo.data.sobrecupo) {
  //       setAlerta(
  //         "Este horario presenta sobrecupo, por favor seleccione uno diferente"
  //       );
  //       return;
  //     }
  //     const resNutricion = await axios.post(
  //       "/api/citas/validarNutricion",
  //       appoinment
  //     );

  //     if (resNutricion.data.nutricion) {
  //       setAlerta(resNutricion.data.message);
  //       return;
  //     } else if (resNutricion.data.notNutrition) {
  //       setAlerta(resNutricion.data.message);
  //       return;
  //     }

  //     const resAgendar = await axios.post("/api/citas/", appoinment);
  //     if (resAgendar.data.noActual) {
  //       setAlerta(resAgendar.data.message);
  //       return;
  //     } else if (resAgendar.data.weekday) {
  //       setAlerta(resAgendar.data.message);
  //       return;
  //     } else if (resAgendar.data.unavailable) {
  //       setAlerta(resAgendar.data.message);
  //       return;
  //     } else if (resAgendar.data.agendado) {
  //       setAlerta(resAgendar.data.message);
  //       return;
  //     }
  //   } catch (error) {
  //     console.log("Hubo un error", err);
  //   }
  // };
  // return (
  //   <>
  //     <Layout>
  //       <h1
  //         className={`${merriweather.className} antialiased text-center text-ferra font-bold text-2xl`}
  //       >
  //         Asignación de citas
  //       </h1>
  //       <p className="text-xs text-center">
  //         Complete los campos para apartar su cita corporal en la sede de
  //         Soledad
  //       </p>
  //       <div className="w-full h-full flex flex-col">
  //         <form className="text-ferra flex flex-col" onSubmit={handleSubmit}>
  //           <label className={`${merriweather.className} antialiased`}>
  //             Nombre:
  //           </label>
  //           <input
  //             name="nombre"
  //             minLength={3}
  //             className=" w-full my-3 border-x-2 border-b-2 rounded-md border-maintxt/60"
  //             type="text"
  //             onChange={handleChange}
  //             required
  //           />
  //           <label className={`${merriweather.className} antialised`}>
  //             Apellido:
  //           </label>
  //           <input
  //             name="apellido"
  //             minLength={3}
  //             className=" w-full my-3 border-x-2 border-b-2 rounded-md border-maintxt/60"
  //             type="text"
  //             onChange={handleChange}
  //             required
  //           />
  //           <label className={`${merriweather.className} antialised`}>
  //             Fecha:
  //           </label>
  //           <DatePicker
  //             id="datePicker"
  //             name="fecha"
  //             selected={appoinment.fecha}
  //             onChange={handleDateChange}
  //             filterDate={(fecha) => !isDisabledDate(fecha)}
  //             dateFormat="dd/MM/YYYY"
  //             className="block  w-full my-3 border-x-2 border-b-2 rounded-md border-maintxt/60"
  //             locale="es"
  //             required
  //           />
  //           {/* <input
  //             name="fecha"
  //             className=" my-3 w-full border-x-2 border-b-2 rounded-md border-maintxt/60 h-7"
  //             type="date"
  //             onChange={handleChange}
  //             required
  //           /> */}
  //           <label className={`${merriweather.className} antialised`}>
  //             Tipo de cita:
  //           </label>
  //           <select
  //             name="tipoCorp"
  //             className=" my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-maintxt/60"
  //             onChange={handleChange}
  //             required
  //           >
  //             <option value="default"></option>
  //             <option value="Valoracion">Valoración</option>
  //             <option value="Antiguo">Tratamiento ya iniciado</option>
  //             <option value="Post">Postoperatorio</option>
  //             <option value="Suero">Sueroterapia</option>
  //             {/* <option value="Gym">Gym</option> */}
  //             {/* <option value="Love">Plan Love</option> */}
  //             <option value="Reina">Reina</option>
  //             <option value="Publicidad">Publicidad</option>
  //             <option value="Nutricion">Nutrición</option>
  //           </select>
  //           <label className={`${merriweather.className} antialised`}>
  //             Hora de la cita:
  //           </label>
  //           <select
  //             name="horac"
  //             className=" my-3 bg-transparent w-full border-x-2 border-b-2 rounded-md border-maintxt/60"
  //             onChange={handleChange}
  //             required
  //           >
  //             <option value="default"></option>
  //             <option value="800840">8:00 AM - 8:40 AM</option>
  //             <option value="840920">8:40 AM - 9:20 AM</option>
  //             <option value="9201000">9:20 AM - 10:00 AM</option>
  //             <option value="10001040">10:00 AM - 10:40 AM</option>
  //             <option value="10401120">10:40 AM - 11:20 AM</option>
  //             <option value="11201200">11:20 AM - 12:00 PM</option>
  //             <option value="14001440">2:00 PM - 2:40 PM</option>
  //             <option value="14401520">2:40 PM - 3:20 PM</option>
  //             <option value="15201600">3:20 PM - 4:00 PM</option>
  //             <option value="16001640">4:00 PM - 4:40 PM</option>
  //             <option value="16401720">4:40 PM - 5:20 PM</option>
  //             <option value="17201800">5:20 PM - 6:00 PM</option>
  //             <option value="18001840">6:00 PM - 6:40 PM</option>
  //           </select>
  //           <label className={`${merriweather.className} antialised`}>
  //             Teléfono:
  //           </label>
  //           <input
  //             name="telefono"
  //             className=" my-3 w-full border-x-2 border-b-2 rounded-md border-maintxt/60"
  //             type="number"
  //             onChange={handleChange}
  //             required
  //           />
  //           <button className="bg-buttons text-white p-1 rounded-md w-full">
  //             Agendar Cita
  //           </button>
  //           {alerta && <Modal alerta={alerta} />}
  //         </form>
  //       </div>
  //     </Layout>
  //   </>
  // );
};

export default agendaCorpSol;
