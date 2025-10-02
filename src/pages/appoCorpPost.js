/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const citasCorpBaq = ({ citas }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(false);
  const router = useRouter()

  const handleDelete = async (id) => {
    await axios.delete("/api/citasPostBaq/personalAppoinment?id=" + id);
    const result = await axios.post("/api/citasPostBaq/search", search);
    console.log(result.data.rows.length);
    if (result.data.rows.length > 0) {
      setResult(result.data.rows);
    }else{
      router.reload("appoCorpPost")
    }
    return;
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post("/api/citasPostBaq/search", search);
    console.log(result.data.rows);
    if (result.data.rows) {
      setResult(result.data.rows);
    }
    return;
  };

  return (
    <>
      <h2 className="text-center font-extralight text-2xl mt-2">
        Listado de citas para la sede de Barranquilla Postoperatorio
      </h2>
      <div className="w-full my-6">
        <form
          className="w-full flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            name="search"
            onChange={handleChange}
            type="date"
            className="w-1/3 border-2 rounded-md border-ferra text-center h-7"
          />
          <button
            type="submit"
            className="w-1/4 bg-buttons text-white font-semibold my-2 px-2 py-1 rounded-md"
          >
            Buscar
          </button>
        </form>
        {result ? (
          <table className=" md:w-full border-collapse text-ferra">
            <thead className="border-y-2 bg-slate-50/30 border-ferra">
              <tr>
                <th className="">Nombre</th>
                <th className="px-4">Fecha</th>
                <th className="px-6">Tipo de cita</th>
                <th>Hora</th>
                <th className="px-10">Teléfono</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center border-y-2 border-ferra">
              {result.map((res) => {
                if(res.horapc === 700800){
                  var hora = "7:00 AM"
                }else if(res.horapc === 800900){
                  var hora = "8:00 AM"
                }else if(res.horapc === 9001000){
                  var hora = "9:00 AM"
                }else if(res.horapc === 10001100){
                  var hora = "10:00 AM"
                }else if(res.horapc === 11001200){
                  var hora = "11:00 AM"
                }else if(res.horapc === 14001500){
                  var hora = "2:00 PM"
                }else if(res.horapc === 15001600){
                  var hora = "3:00 PM"
                }else if(res.horapc === 16001700){
                  var hora = "4:00 PM"
                }else if(res.horapc === 17001800){
                  var hora = "5:00 PM"
                }else if(res.horapc === 18001900){
                  var hora = "6:00 PM"
                }else{
                  var hora = 0
                }
                return (
                  <Fragment key={res._id}>
                    <tr className="border-y text-sm md:text-base   border-ferra">
                      <td className="p-3 m-3">{res.nombre}</td>
                      <td>{res.fecha}</td>
                      <td>{res.tipoBaq}</td>
                      <td>{hora}</td>
                      <td>{res.telefono}</td>
                      <td>
                        <button
                          className="p-2 bg-red-500 text-white rounded-md cursor-pointer"
                          onClick={() => handleDelete(res._id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table className=" md:w-full border-collapse text-ferra">
            <thead className="border-y-2 bg-slate-50/30 border-ferra">
              <tr>
                <th className="">Nombre</th>
                <th className="px-4">Fecha</th>
                <th className="px-6">Cita</th>
                <th>Hora</th>
                <th className="px-10">Teléfono</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center border-y-2 border-ferra">
              {citas.map((cita) => {
                if(cita.horapc === 700800){
                  var hora = "7:00 AM"
                }else if(cita.horapc === 800900){
                  var hora = "8:00 AM"
                }else if(cita.horapc === 9001000){
                  var hora = "9:00 AM"
                }else if(cita.horapc === 10001100){
                  var hora = "10:00 AM"
                }else if(cita.horapc === 11001200){
                  var hora = "11:00 AM"
                }else if(cita.horapc === 14001500){
                  var hora = "2:00 PM"
                }else if(cita.horapc === 15001600){
                  var hora = "3:00 PM"
                }else if(cita.horapc === 16001700){
                  var hora = "4:00 PM"
                }else if(cita.horapc === 17001800){
                  var hora = "5:00 PM"
                }else if(cita.horapc === 18001900){
                  var hora = "6:00 PM"
                }else{
                  var hora = 0
                }
                return (
                  <Fragment key={cita._id}>
                    <tr className="border-y text-sm md:text-base   border-ferra">
                      <td className="p-3 m-3">{cita.nombre}</td>
                      <td>{cita.fecha}</td>
                      <td>{cita.tipoPostCorp}</td>
                      <td>{hora}</td>
                      <td>{cita.telefono}</td>
                      <td>
                        <button
                          className="p-2 bg-red-500 text-white rounded-md cursor-pointer"
                          onClick={() => handleDelete(cita._id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default citasCorpBaq;

export const getServerSideProps = async (context) => {
  const { data: citas } = await axios.get("http://localhost:3000/api/citasPostBaq");

  return {
    props: {
      citas,
    },
  };
};
