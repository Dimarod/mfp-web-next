/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const citasCorpSol = ({ citas }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(false);
  const router = useRouter();

  const handleDelete = async (id) => {
    await axios.delete("/api/citas/personalAppoinment?id=" + id);
    const result = await axios.post("/api/citas/search", search);
    console.log(result.data.rows.length);
    if (result.data.rows.length > 0) {
      setResult(result.data.rows);
    }else{
      router.reload("appoCorpBaq")
    }
    return;
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post("/api/citas/search", search);
    console.log(result.data.rows);
    if (result.data.rows) {
      setResult(result.data.rows);
    }
    return;
  };

  return (
    <>
      <h2 className="text-center font-extralight text-2xl mt-2">
        Listado de citas para la sede de Soledad
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
            className="w-1/3 border-2 h-7 rounded-md border-ferra text-center"
          />
          <button
            type="submit"
            className="w-1/4 bg-ferra text-white font-semibold my-2 px-2 py-1 rounded-md"
          >
            Buscar
          </button>
        </form>
        {result ? (
          <table className=" md:w-full border-collapse text-ferra">
            <thead className="border-y-2 bg-slate-50/30 border-ferra">
              <tr>
                <th className="">Nombre</th>
                <th>Fecha</th>
                <th className="px-6">Cita</th>
                <th>Hora</th>
                <th className="px-10">Teléfono</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center border-y-2 border-ferra">
              {result.map((res) => {
                if(res.horac === 720800){
                  var hora = "7:20 AM"
                }else if(res.horac === 800840){
                  var hora = "8:00 AM"
                }else if(res.horac === 840920){
                  var hora = "8:40 AM"
                }else if(res.horac === 9201000){
                  var hora = "9:20 AM"
                }else if(res.horac === 10001040){
                  var hora = "10:00 AM"
                }else if(res.horac === 10401120){
                  var hora = "10:40 AM"
                }else if(res.horac === 11201200){
                  var hora = "11:20 AM"
                }else if(res.horac === 12001240){
                  var hora = "12:00 PM"
                }else if(res.horac === 12401320){
                  var hora = "12:40 PM"
                }else if(res.horac === 13201400){
                  var hora = "1:20 PM"
                }else if(res.horac === 14001440){
                  var hora = "2:00 PM"
                }else if(res.horac === 14401520){
                  var hora = "2:40 PM"
                }else if(res.horac === 15201600){
                  var hora = "3:20 PM"
                }else if(res.horac === 16001640){
                  var hora = "4:00 PM"
                }else if(res.horac === 16401720){
                  var hora = "4:40 PM"
                }else if(res.horac === 17201800){
                  var hora = "5:20 PM"
                }else if(res.horac === 18001840){
                  var hora = "6:00 PM"
                }else if(res.horac === 18401920){
                  var hora = "6:40 PM"
                }else{
                  var hora = 0
                }
                return (
                  <Fragment key={res._id}>
                    <tr className="border-y text-sm md:text-base   border-ferra">
                      <td className="p-3 m-3">{res.nombre}</td>
                      <td>{res.fecha}</td>
                      <td>{res.tipoCorp}</td>
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
                <th>Fecha</th>
                <th className="px-6">Cita</th>
                <th>Hora</th>
                <th className="px-10">Teléfono</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center border-y-2 border-ferra">
              {citas.map((cita) => {
                if(cita.horac === 720800){
                  var hora = "7:20 AM"
                }else if(cita.horac === 800840){
                  var hora = "8:00 AM"
                }else if(cita.horac === 840920){
                  var hora = "8:40 AM"
                }else if(cita.horac === 9201000){
                  var hora = "9:20 AM"
                }else if(cita.horac === 10001040){
                  var hora = "10:00 AM"
                }else if(cita.horac === 10401120){
                  var hora = "10:40 AM"
                }else if(cita.horac === 11201200){
                  var hora = "11:20 AM"
                }else if(cita.horac === 12001240){
                  var hora = "12:00 PM"
                }else if(cita.horac === 12401320){
                  var hora = "12:40 PM"
                }else if(cita.horac === 13201400){
                  var hora = "1:20 PM"
                }else if(cita.horac === 14001440){
                  var hora = "2:00 PM"
                }else if(cita.horac === 14401520){
                  var hora = "2:40 PM"
                }else if(cita.horac === 15201600){
                  var hora = "3:20 PM"
                }else if(cita.horac === 16001640){
                  var hora = "4:00 PM"
                }else if(cita.horac === 16401720){
                  var hora = "4:40 PM"
                }else if(cita.horac === 17201800){
                  var hora = "5:20 PM"
                }else if(cita.horac === 18001840){
                  var hora = "6:00 PM"
                }else if(cita.horac === 18401920){
                  var hora = "6:40 PM"
                }else{
                  var hora = 0
                }
                return (
                  <Fragment key={cita._id}>
                    <tr className="border-y text-sm md:text-base   border-ferra">
                      <td className="p-3 m-3">{cita.nombre}</td>
                      <td>{cita.fecha}</td>
                      <td>{cita.tipoCorp}</td>
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

export default citasCorpSol;

export const getServerSideProps = async (context) => {
  const { data: citas } = await axios.get("http://localhost:3000/api/citas");

  return {
    props: {
      citas,
    },
  };
};
