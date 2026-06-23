/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilos calendario
import { isSameDay, format, parseISO } from "date-fns";
import { es } from "date-fns/locale/es";
registerLocale("es", es);
import Modal from "@/components/Modal";
import Head from "next/head";

// Mapeo de Horarios para Postoperatorios (Según tus valores)
const timeSlots = [
  { label: "8:00 AM", value: "800900" },
  { label: "9:00 AM", value: "9001000" },
  { label: "10:00 AM", value: "10001100" },
  { label: "11:00 AM", value: "11001200" },
  { label: "2:00 PM", value: "14001500" },
  { label: "3:00 PM", value: "15001600" },
  { label: "4:00 PM", value: "16001700" },
  { label: "5:00 PM", value: "17001800" },
  { label: "6:00 PM", value: "18001900" },
//  {label: "7:00 PM", value: "19002000"}
];

const AgendaPostBaq = () => {
  // --- LÓGICA DE FECHAS (INTACTA) ---
  const disabledDate = [new Date(2026, 3, 2), new Date(2026, 3, 3), new Date(2026, 3, 4), new Date(2026, 3, 5), new Date(2026, 4, 1), new Date(2026, 4, 18), new Date(2026, 5, 8), new Date(2026, 5, 15), new Date(2026, 5, 29), new Date(2026, 6, 20), new Date(2026, 7, 7), new Date(2026, 7, 17), new Date(2026, 9, 12), new Date(2026, 10, 2), new Date(2026, 10, 16), new Date(2026, 11, 8), new Date(2026, 11, 25), new Date(2026, 0, 1)];

  const isDisabledDate = (date) => {
    // Nota: Tu código original NO filtraba domingos, solo fechas específicas. Lo mantengo así.
    return disabledDate.some(disableD => isSameDay(date, disableD));
  }

  const [appoinment, setAppoinment] = useState({
    nombre: "",
    apellido: "",
    fecha: null,
    horapc: "",      // Nombre original
    tipoPostCorp: "", // Nombre original
    telefono: "",
  });
  const [alerta, setAlerta] = useState("");

  const [blockedHours, setBlockedHours] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      const { fecha, tipoPostCorp } = appoinment;

      if (fecha && tipoPostCorp) {
        try {
          const res = await axios.get('/api/citasPostBaq', {
            params: {
              check: true,
              fecha: fecha,
              tipoPostCorp: tipoPostCorp
            }
          });

          const bloqueadas = Array.isArray(res.data) ? res.data : (res.data.blocked || []);
          setBlockedHours(bloqueadas);
        } catch (error) {
          console.error("Error consultando la disponibilidad", error);
        }
      }
    }
    fetchAvailability();
  }, [appoinment.fecha, appoinment.tipoPostCorp])

  const handleChange = ({ target: { name, value } }) => {
    setAppoinment({ ...appoinment, [name]: value });
  };

  // Helper para botones de hora
  const handleTimeSelect = (value) => {
    setAppoinment({ ...appoinment, horapc: value });
  };

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      setAppoinment({ ...appoinment, fecha: formattedDate });
    }
  };

  // --- LÓGICA DE ENVÍO (INTACTA) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta("")

    if (!appoinment.horapc) {
      setAlerta("Por favor selecciona una hora");
      return;
    }

    try {
      const res = await axios.post("/api/citasPostBaq/", appoinment)
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
        <title>Agenda Postoperatoria | My Footprint Barranquilla</title>
        <meta name="description" content="Programación de citas para drenajes linfáticos y recuperación postquirúrgica o postoperatoria en Barranquilla. Atención profesional y segura para tu proceso de sanación." />
      </Head>
      <Layout>
        <div className="min-h-screen bg-transparent py-12 px-4 flex justify-center items-center mt-12 mb-6">

          {/* Contenedor Principal */}
         <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
          <div className="bg-brand-vanilla/5 w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

            {/* COLUMNA IZQUIERDA: Datos Personales (Estilo Recovery/Warm) */}
            {/* Usamos un tono oscuro cálido (vanilla dark/marrón) para diferenciar */}
            <div className="w-full md:w-2/5 bg-vanilla-dark text-gray-600 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10">
                <span className="text-brand-vanilla-dark text-xs font-sans tracking-[0.2em] uppercase">
                  Recuperación Corporal
                </span>
                <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
                  Tu Salud <br /> <span className="text-brand-vanilla italic">en manos expertas.</span>
                </h1>
                <p className="font-sans text-gray-500 text-sm mb-8 leading-relaxed">
                  Agenda tu sesión de recuperación o mantenimiento postoperatorio.
                </p>

                {/* Formulario Datos Personales */}
                <div className="space-y-5">
                  <div>
                    <label className="text-xs text-brand-vanilla font-bold uppercase tracking-wider mb-2 block">Nombre</label>
                    <input
                      name="nombre"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-400 focus:bg-white/20 transition-all outline-none"
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
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-400 focus:bg-white/20 transition-all outline-none"
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
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-500 placeholder-gray-400 focus:bg-white/20 transition-all outline-none"
                      type="tel"
                      maxLength="10"
                      pattern="\d{10}"
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
                  {/* 1. TIPO DE CITA */}
                  <div>
                    <label className={labelClass}>Tipo de Tratamiento</label>
                    <div className="relative">
                      <select
                        name="tipoPostCorp" // Nombre original mantenido
                        className={`${inputClass} appearance-none cursor-pointer`}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="Valoracion">Valoración</option>
                        <option value="Preoperatorio">Preoperatorio</option>
                        <option value="Post">Postoperatorio</option>
                        <option value="Postmoldeo">Postmoldeo</option>
                        <option value="Postparto">Postparto</option>
                        <option value="Correccion">Corrección Post</option>
                        <option value="Drenajes">Solo drenajes</option>
                      </select>
                      {/* Flecha Icono */}
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

                  {/* 3. HORA (Grid de Botones) */}
                  <div>
                    <label className={labelClass}>Horario Disponible</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-2">
                      {timeSlots.map((slot) => {

                        // 1. VERIFICACIÓN: Comparamos números con números
                        const isBlocked = blockedHours.includes(Number(slot.value));

                        // 2. ESTILOS DINÁMICOS
                        let buttonClass = "text-xs py-3 px-1 rounded-lg border transition-all duration-200 font-medium ";

                        if (isBlocked) {
                          // CASO BLOQUEADO: Gris claro, texto suave, cursor prohibido
                          buttonClass += "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed opacity-50";
                        } else if (appoinment.horapc === slot.value) {
                          // CASO SELECCIONADO: Tono oscuro (Vanilla Dark)
                          buttonClass += "bg-vanilla-dark text-white border-vanilla-dark shadow-md transform scale-105";
                        } else {
                          // CASO DISPONIBLE: Blanco con hover
                          buttonClass += "bg-white text-gray-600 border-gray-200 hover:border-vanilla-dark hover:text-vanilla-dark";
                        }

                        return (
                          <button
                            key={slot.value}
                            type="button"
                            disabled={isBlocked} // <--- ESTO BLOQUEA EL CLIC
                            onClick={() => handleTimeSelect(slot.value)}
                            className={buttonClass}
                          >
                            {slot.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Validación HTML oculta */}
                    <input type="hidden" name="horapc" value={appoinment.horapc} required />

                    {/* Mensaje de aviso si todo está lleno */}
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
                    Agendar Cita
                  </button>
                </div>
            </div>
          </div>
         </form>

          {/* MODAL (Z-Index Corregido) */}
          <div className="relative z-[9999]">
            {alerta && <Modal alerta={alerta} setAlerta={setAlerta} />}
          </div>

        </div>
      </Layout >
    </>
  );
};

export default AgendaPostBaq;
