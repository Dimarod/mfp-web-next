/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import Layout from "@/components/Layout";

const HORARIOS = {
  "9001000": "9:00 AM",
  "10001100": "10:00 AM",
  "11001200": "11:00 AM",
  "14001500": "2:00 PM",
  "15001600": "3:00 PM",
  "16001700": "4:00 PM",
  "17001800": "5:00 PM",
}

const citasFacBaq = ({ citas: citasIniciales }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const router = useRouter();

  const dataToShow = result || citasIniciales;

  // --- LÓGICA INTACTA ---
  const handleDelete = async (id) => {
    if (!confirm("¿Estás seguro que deseas eliminar la cita?")) return;
    try {
      await axios.delete(`/api/citasFac?id=${id}`);
      if (search) {
        const res = await axios.get('/api/citasFac/', { params: { fecha: search } })
        setResult(res.data.rows);
      } else {
        router.reload();
      }
    } catch (error) {
      console.error("Error al eliminar la cita", error);
    }
  };
  const handleChange = (e) => { setSearch(e.target.value) };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return
    try {
      const resultado = await axios.get('/api/citasFac', { params: { fecha: search } });
      if (resultado.data.rows) { setResult(resultado.data.rows) }
    } catch (error) {
      console.error("Error buscando las citas", error);
    }
  };
  const clearSearch = () => { setSearch(""); setResult(null) }

  return (
    <Layout>
      <div className="min-h-screen bg-transparent shadow-xl border rounded-md border-gray-50 py-6 md:py-10 px-4 mt-24 md:mt-12 mb-6">
        
        <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h1 className="font-display text-2xl md:text-3xl text-brand-black">Agenda Facial</h1>
            <p className="font-sans text-sm text-gray-500 mt-1">Gestión de citas dermocosméticas</p>
          </div>
          
          <form className="flex w-full md:w-auto items-center bg-white p-1 rounded-full shadow-sm border border-gray-200" onSubmit={handleSubmit}>
            <div className="pl-4 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
            <input name="search" value={search} onChange={handleChange} type="date" className="bg-transparent border-none outline-none text-gray-700 text-sm py-2 px-2 font-sans w-full md:w-auto" />
            <button type="submit" className="bg-brand-black text-white rounded-full px-4 md:px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors ml-2">Buscar</button>
            {search && (<button type="button" onClick={clearSearch} className="text-gray-400 hover:text-red-500 px-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>)}
          </form>
        </div>

        {/* --- MÓVIL (TARJETAS) --- */}
        <div className="md:hidden space-y-4">
          {dataToShow.length > 0 ? (
            dataToShow.map((cita) => (
              <div key={cita._id} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-black">{cita.nombre}</h3>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-md text-xs font-medium bg-brand-vanilla/10 text-brand-vanilla-dark border border-brand-vanilla/20">{cita.tipoFac}</span>
                  </div>
                  <button onClick={() => handleDelete(cita._id)} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-2"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{cita.fecha}</div>
                  <div className="flex items-center gap-2"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{HORARIOS[cita.horaf] || "N/A"}</div>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <a href={`tel:${cita.telefono}`} className="flex items-center justify-center gap-2 w-full py-2 bg-gray-50 rounded-lg text-brand-black font-medium hover:bg-brand-vanilla hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Llamar: {cita.telefono}</a>
                </div>
              </div>
            ))
          ) : (<div className="bg-white rounded-2xl p-8 text-center text-gray-400">No hay citas.</div>)}
        </div>

        {/* --- DESKTOP (TABLA) --- */}
        <div className="hidden md:block max-w-7xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider font-sans">Paciente</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider font-sans">Fecha</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider font-sans">Tratamiento</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider font-sans">Hora</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider font-sans">Contacto</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider font-sans text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dataToShow.length > 0 ? (
                  dataToShow.map((cita) => (
                    <Fragment key={cita._id}>
                      <tr className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-6 py-4"><p className="font-display font-medium text-brand-black text-lg">{cita.nombre}</p></td>
                        <td className="px-6 py-4"><div className="flex items-center text-gray-600 font-sans text-sm">{cita.fecha}</div></td>
                        <td className="px-6 py-4"><span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-vanilla/10 text-brand-vanilla-dark border border-brand-vanilla/20">{cita.tipoFac}</span></td>
                        <td className="px-6 py-4"><span className="font-sans text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">{HORARIOS[cita.horaf] || "N/A"}</span></td>
                        <td className="px-6 py-4"><a href={`tel:${cita.telefono}`} className="text-gray-500 hover:text-brand-black transition-colors text-sm font-sans flex items-center gap-1">{cita.telefono}</a></td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => handleDelete(cita._id)} className="text-red-400 hover:text-red-600 text-xs font-medium uppercase tracking-wide border border-transparent hover:border-red-200 hover:bg-red-50 px-3 py-1 rounded-md transition-all">Cancelar</button>
                        </td>
                      </tr>
                    </Fragment>
                  ))
                ) : (
                  <tr><td colSpan="6" className="px-6 py-12 text-center text-gray-400">No se encontraron citas.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default citasFacBaq;

export const getServerSideProps = async (context) => {
  const { data: citas } = await axios.get("http://localhost:3000/api/citasFac/");
  return { props: { citas } };
};
