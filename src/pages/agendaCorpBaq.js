/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Asegúrate de importar el CSS del calendario
import { isSameDay, isSunday, format, parseISO } from "date-fns";
import { es } from "date-fns/locale/es";
registerLocale("es", es);
import Modal from "@/components/Modal";
import Head from "next/head";

// Mapeo de horarios para crear botones visuales en lugar de un select aburrido
// El 'value' es el código que tu backend espera (según tu código original)
const timeSlots = [
  { label: "8:00 AM", value: "800840" },
  { label: "8:40 AM", value: "840920" },
  { label: "9:20 AM", value: "9201000" },
  { label: "10:00 AM", value: "10001040" },
  { label: "10:40 AM", value: "10401120" },
  { label: "11:20 AM", value: "11201200" },
  { label: "2:00 PM", value: "14001440" },
  { label: "2:40 PM", value: "14401520" },
  { label: "3:20 PM", value: "15201600" },
  { label: "4:00 PM", value: "16001640" },
  { label: "4:40 PM", value: "16401720" },
  { label: "5:20 PM", value: "17201800" },
  { label: "6:00 PM", value: "18001840" },
  { label: "6:40 PM", value: "18401920" },
];

const agendaCorpBaq = () => {
  // --- LÓGICA ORIGINAL (INTACTA) ---
  const disabledDate = [new Date(2026, 3, 2), new Date(2026, 3, 3), new Date(2026, 3, 4), new Date(2026, 3, 5), new Date(2026, 4, 1), new Date(2026, 4, 18), new Date(2026, 5, 8), new Date(2026, 5, 15), new Date(2026, 5, 29), new Date(2026, 6, 20), new Date(2026, 7, 7), new Date(2026, 7, 17), new Date(2026, 9, 12), new Date(2026, 10, 2), new Date(2026, 10, 16), new Date(2026, 11, 8), new Date(2026, 11, 25), new Date(2027, 0, 1)]

  const isDisabledDate = (date) => {
    return disabledDate.some(disableD => isSameDay(date, disableD) || isSunday(date))
  }

  const [appoinment, setAppoinment] = useState({
    nombre: "",
    apellido: "",
    fecha: null,
    horab: "",
    tipoBaq: "",
    telefono: "",
  });
  const [alerta, setAlerta] = useState("");

  const [blockedHours, setBlockedHours] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      const { fecha, tipoBaq } = appoinment;

      if (fecha && tipoBaq) {
        try {
          const res = await axios.get('/api/citasBaq', {
            params: {
              check: true,
              fecha: fecha,
              tipoBaq: tipoBaq
            }
          });

          setBlockedHours(res.data.blocked);
        } catch (error) {
          console.error("Error consultando la disponibilidad", error);
        }
      }
    }
    fetchAvailability();
  }, [appoinment.fecha, appoinment.tipoBaq])

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value); // Comentado para limpiar consola
    setAppoinment({ ...appoinment, [name]: value });
  };

  // Helper para los botones de hora (simula el evento change)
  const handleTimeSelect = (value) => {
    setAppoinment({ ...appoinment, horab: value });
  };

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      setAppoinment({ ...appoinment, fecha: formattedDate });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta("")
    // Validación extra visual por si acaso
    if (!appoinment.horab) {
      setAlerta("Por favor selecciona una hora");
      return;
    }

    try {
      const res = await axios.post("/api/citasBaq/", appoinment)
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

  // Estilos comunes para inputs
  const inputClass = "w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-brand-black focus:border-brand-vanilla focus:ring-1 focus:ring-brand-vanilla transition-all outline-none font-sans";
  const labelClass = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans";

  console.log("Horas Bloqueadas (Frontend):", blockedHours);

  return (
    <>
    <Head>
      <title>Agenda Corporal | My Footprint Barranquilla</title>
      <meta name="description" content="Reserva tu cita para tratamientos corporales y valoración estética en Barranquilla. Agenda tu espacio de relajación y moldeamiento con expertos en My Footprint."/>
    </Head>
      <Layout>
        <div className="min-h-screen bg-transparent py-12 px-4 flex justify-center items-center mt-12 mb-6">
         <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
          {/* Contenedor tipo Tarjeta Flotante */}
          <div className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

            {/* COLUMNA IZQUIERDA: Encabezado y Datos Personales */}
            <div className="w-full md:w-2/5 bg-transparent text-gray-600 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-vanilla-dark rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <span className="text-brand-vanilla-dark text-xs font-sans tracking-[0.2em] uppercase">
                  Sede Barranquilla
                </span>
                <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
                  Reserva tu <br /> <span className="text-brand-vanilla italic">Espacio.</span>
                </h1>
                <p className="font-sans text-gray-500 text-sm mb-8 leading-relaxed">
                  Estás a un paso de comenzar tu transformación. Por favor completa tus datos personales.
                </p>

                {/* Formulario Parte 1: Datos Personales (Dentro de la columna oscura para contraste) */}
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
                      type="tel"
                      maxLength="10"
                      pattern="\d{10}"
                      onChange={handleChange}
                      required
                      placeholder="300 123 4567"
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
                        name="tipoBaq"
                        className={`${inputClass} appearance-none cursor-pointer`}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="Valoracion">Valoración Inicial</option>
                        <option value="Antiguo">Tratamiento ya iniciado (Seguimiento)</option>
                        <option value="Reina">Paquete Reina</option>
                        <option value="Publicidad">Promo Publicidad</option>
                        <option value="Nutricion">Consulta Nutricional</option>
                      </select>
                      {/* Flecha custom para el select */}
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
                  {/* 3. HORA (GRID DE BOTONES) */}
                  <div>
                    <label className={labelClass}>Horario Disponible</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-2">
                      {timeSlots.map((slot) => {

                        // 1. CONVERSIÓN DE TIPO OBLIGATORIA
                        // Convertimos el valor del slot a Número para comparar con el array del backend
                        const isBlocked = blockedHours.includes(Number(slot.value));

                        // 2. LOGICA DE ESTILOS
                        let buttonClasses = "text-xs py-2 px-1 rounded-md border transition-all duration-200 ";

                        if (isBlocked) {
                          // ESTILO DESHABILITADO: Opacidad baja, gris, cursor de prohibido
                          buttonClasses += "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed opacity-50";
                        } else if (appoinment.horab === slot.value) {
                          // ESTILO SELECCIONADO: Negro fuerte
                          buttonClasses += "bg-brand-black text-white border-brand-black shadow-md transform scale-105";
                        } else {
                          // ESTILO DISPONIBLE: Blanco
                          buttonClasses += "bg-white text-gray-600 border-gray-200 hover:border-brand-vanilla hover:text-brand-vanilla";
                        }

                        return (
                          <button
                            key={slot.value}
                            type="button"
                            // 3. PROPIEDAD DISABLED HTML (Impide el click real)
                            disabled={isBlocked}
                            onClick={() => handleTimeSelect(slot.value)}
                            className={buttonClasses}
                          >
                            {slot.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Input oculto para validación */}
                    <input
                      type="hidden"
                      name="horab"
                      value={appoinment.horab}
                      required
                    />

                    {/* Opcional: Mensaje si no hay horas disponibles */}
                    {blockedHours.length >= timeSlots.length && appoinment.fecha && (
                      <p className="text-xs text-red-400 mt-2 font-medium">
                        No hay horarios disponibles para esta fecha.
                      </p>
                    )}
                  </div>
                </div>

                {/* BOTÓN DE ACCIÓN */}
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

          <div className="relative z-[9999]">
            {alerta && <Modal alerta={alerta} setAlerta={setAlerta} />}
          </div>

          {/* Asumo que Modal puede recibir setAlerta para cerrarse, si no, déjalo como estaba */}
        </div>
      </Layout>
    </>
  );
};

export default agendaCorpBaq;
