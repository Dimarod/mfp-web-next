/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilos calendario
import { isSameDay, isSunday, format, parseISO } from "date-fns";
import { es } from "date-fns/locale/es";
registerLocale("es", es);
import Modal from "@/components/Modal";
import Head from "next/head";

// Definimos los horarios visuales mapeados a los valores que espera tu Backend
const timeSlots = [
  { label: "9:00 AM", value: "9001000" },
  { label: "10:00 AM", value: "10001100" },
  { label: "11:00 AM", value: "11001200" },
  { label: "2:00 PM", value: "14001500" },
  { label: "3:00 PM", value: "15001600" },
];

const agendaFacBaq = () => {
  // --- LÓGICA DE FECHAS (INTACTA) ---
  const disabledDate = [new Date(2025, 11, 12), new Date(2025, 11, 15), new Date(2025, 11, 25), new Date(2025, 11, 27), new Date(2025, 11, 28), new Date(2025, 11, 29), new Date(2025, 11, 30), new Date(2025, 11, 31), new Date(2026, 0, 1), new Date(2026, 0, 2), new Date(2026, 0, 3), new Date(2026, 0, 4), new Date(2026, 0, 5), new Date(2026, 0, 6), new Date(2026, 0, 7), new Date(2025, 11, 8), new Date(2026, 0, 8), new Date(2026, 0, 9), new Date(2026, 0, 10), new Date(2026, 0, 11), new Date(2026, 0, 12)];

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

  const [blockedHours, setBlockedHours] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      const { fecha, tipoFac } = appoinment;

      if (fecha && tipoFac) {
        try {
          const res = await axios.get('/api/citasFac', {
            params: {
              check: true,
              fecha: fecha,
              tipoFac: tipoFac
            }
          });

          setBlockedHours(res.data.blocked);
        } catch (error) {
          console.error("Error consultando la disponibilidad", error);
        }
      }
    }
    fetchAvailability();
  }, [appoinment.fecha, appoinment.tipoFac])

  const handleChange = ({ target: { name, value } }) => {
    setAppoinment({ ...appoinment, [name]: value });
  };

  // Helper para los botones de hora visuales
  const handleTimeSelect = (value) => {
    setAppoinment({ ...appoinment, horaf: value });
  };

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      setAppoinment({ ...appoinment, fecha: formattedDate });
    }
  };

  // --- TU NUEVA LÓGICA SIMPLIFICADA ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta("")

    // Validación extra visual
    if (!appoinment.horaf) {
      setAlerta("Por favor selecciona una hora");
      return;
    }

    try {
      const res = await axios.post("/api/citasFac/", appoinment)
      if (res.data.agendado) {
        setAlerta(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        setAlerta(message || "Ocurrió un error al agendar la cita.");
      } else {
        console.log(error, "Error de red");
      }
    }
  };

  // Estilos reutilizables
  const inputClass = "w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-brand-black focus:border-brand-vanilla focus:ring-1 focus:ring-brand-vanilla transition-all outline-none font-sans";
  const labelClass = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans";

  return (
    <>
    <Head>
      <title>Agenda Desmocosmética | My Footprint Barranquilla</title>
      <meta name="description" content="Agenda tu limpieza facial, hidratación o tratamiento dermocosmético en Barranquilla. Renueva tu rostro con la mejor tecnología y productos de calidad."/>
    </Head>
      <Layout>
        <div className="min-h-screen bg-transparent py-12 px-4 flex justify-center items-center mt-12 mb-6">
         <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
          {/* Contenedor Principal Estilizado */}
          <div className="bg-brand-vanilla/5 w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

            {/* COLUMNA IZQUIERDA: Datos Personales (Estilo Dark Spa) */}
            <div className="w-full md:w-2/5 bg-white-900 text-gray-600 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-vanilla rounded-full blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <span className="text-brand-vanilla-dark text-xs font-sans tracking-[0.2em] uppercase">
                  Estética Facial
                </span>
                <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
                  Renueva <br /> <span className="text-brand-vanilla italic">tu Rostro.</span>
                </h1>
                <p className="font-sans text-gray-500 text-sm mb-8 leading-relaxed">
                  Completa tus datos para programar tu sesión dermocosmética en nuestra sede Barranquilla.
                </p>

                {/* Formulario Datos Personales */}
                <div className="space-y-5">
                  <div>
                    <label className="text-xs text-brand-vanilla font-bold uppercase tracking-wider mb-2 block">Nombre</label>
                    <input
                      name="nombre"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-400 focus:border-brand-vanilla focus:bg-white/20 transition-all outline-none"
                      type="text"
                      onChange={handleChange}
                      minLength="3"
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-brand-vanilla font-bold uppercase tracking-wider mb-2 block">Apellido</label>
                    <input
                      name="apellido"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-400 focus:border-brand-vanilla focus:bg-white/20 transition-all outline-none"
                      type="text"
                      onChange={handleChange}
                      minLength="3"
                      required
                      placeholder="Tu apellido"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-brand-vanilla font-bold uppercase tracking-wider mb-2 block">Teléfono</label>
                    <input
                      name="telefono"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-400 focus:border-brand-vanilla focus:bg-white/20 transition-all outline-none"
                      type="number" // Mantengo type="number" como tenías
                      onChange={handleChange}
                      required
                      placeholder="Número de contacto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: Detalles de la Cita */}
            <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
                <div className="space-y-8">
                  {/* 1. TIPO DE CITA (Select Estilizado) */}
                  <div>
                    <label className={labelClass}>Tipo de Tratamiento Facial</label>
                    <div className="relative">
                      <select
                        name="tipoFac" // Mismo nombre que tenías
                        className={`${inputClass} appearance-none cursor-pointer`}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="Valoracion">Valoración</option>
                        <option value="Depilacion">Depilación Láser</option>
                        <option value="Hydrafacial">Hydrafacial</option>
                        <option value="Plasma">Plasma</option>
                        <option value="Radiofrecuencia">Radiofrecuencia Fraccionada</option>
                        <option value="Despigmentacion">Despigmentación</option>
                        <option value="Post">Postoperatorio Facial</option>
                        <option value="Armonizacion">Armonización Facial</option>
                        <option value="Antiestrias">Antiestrías</option>
                      </select>
                      {/* Icono Flecha */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* 2. FECHA */}
                  <div>
                    <label className={labelClass}>Fecha Preferida</label>
                    <div className="custom-datepicker-wrapper">
                      <DatePicker
                        id="datePicker"
                        name="fecha"
                        selected={appoinment.fecha ? parseISO(appoinment.fecha) : null}
                        onChange={handleDateChange}
                        filterDate={(fecha) => !isDisabledDate(fecha)}
                        dateFormat="dd/MM/yyyy"
                        className={inputClass}
                        locale="es"
                        required
                        autoComplete="off"
                        placeholderText="Selecciona un día en el calendario"
                      />
                    </div>
                  </div>

                  {/* 3. HORA (Grid de Botones en vez de Select) */}
                  <div>
                    <label className={labelClass}>Horario Disponible</label>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {timeSlots.map((slot) => {

                        // 1. VERIFICACIÓN: ¿Esta hora está bloqueada?
                        // Convertimos slot.value a Number para comparar peras con peras
                        const isBlocked = blockedHours.includes(Number(slot.value));

                        // 2. ESTILOS DINÁMICOS
                        let buttonClass = "text-xs py-3 px-2 rounded-lg border transition-all duration-200 font-medium ";

                        if (isBlocked) {
                          // CASO BLOQUEADO: Gris, opaco y sin cursor
                          buttonClass += "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed opacity-50";
                        } else if (appoinment.horaf === slot.value) {
                          // CASO SELECCIONADO: Tu estilo oscuro (Brand Black)
                          buttonClass += "bg-brand-black text-white border-brand-black shadow-md transform scale-105";
                        } else {
                          // CASO DISPONIBLE: Blanco con hover
                          buttonClass += "bg-white text-gray-600 border-gray-200 hover:border-brand-vanilla hover:text-brand-vanilla";
                        }

                        return (
                          <button
                            key={slot.value}
                            type="button"
                            disabled={isBlocked} // <--- ESTO EVITA EL CLICK
                            onClick={() => handleTimeSelect(slot.value)}
                            className={buttonClass}
                          >
                            {slot.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Validación HTML oculta */}
                    <input type="hidden" name="horaf" value={appoinment.horaf} required />

                    {/* Mensaje opcional si todo está lleno */}
                    {blockedHours.length >= timeSlots.length && appoinment.fecha && (
                      <p className="text-xs text-red-400 mt-2 font-medium animate-pulse">
                        No hay horarios disponibles para esta fecha.
                      </p>
                    )}
                  </div>
                </div>

                {/* BOTÓN AGENDAR */}
                <div className="mt-10">
                  <button
                    className="w-full bg-brand-vanilla text-white font-sans font-medium py-4 rounded-xl shadow-lg hover:bg-brand-vanilla-dark hover:shadow-xl transition-all duration-300 transform active:scale-[0.98]"
                  >
                    Confirmar Cita
                  </button>
                </div>
            </div>
          </div>
         </form>
          {/* MODAL CORREGIDO (z-index alto) */}
          <div className="relative z-[9999]">
            {alerta && <Modal alerta={alerta} setAlerta={setAlerta} />}
          </div>

        </div>
      </Layout>
    </>
  );
};

export default agendaFacBaq;
