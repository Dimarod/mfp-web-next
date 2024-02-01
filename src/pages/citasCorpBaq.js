/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const citasCorpBaq = ({ citas }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(false);
  const router = useRouter();

  const handleDelete = async (id) => {
    await axios.delete("/api/citasBaq/personalAppoinment?id=" + id);
    router.reload("citasCorpBaq");
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post("/api/citasBaq/search", search);
    console.log(result.data.rows);
    if (result.data.rows) {
      setResult(result.data.rows);
    }
    return;
  };

  return (
    <>
      <h2 className="text-center font-extralight text-2xl mt-2">
        Listado de citas para la sede de Barranquilla
      </h2>
      <div className="w-full my-6">
        <form
          className="w-full flex md:flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            name="search"
            onChange={handleChange}
            type="date"
            className="w-1/3 border-2 rounded-md border-ferra text-center"
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
                <th className="px-6">Tipo de cita</th>
                <th>Hora</th>
                <th className="px-4">Teléfono</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center border-y-2 border-ferra">
              {result.map((res) => {
                if (res.horab) {
                  let sHour = res.horab.toString();
                  if (sHour.length === 6) {
                    var tempHour = sHour.substr(0, 3);
                    var hour = tempHour.substr(0, 1);
                    var minutes = tempHour.substr(1, 2);
                  } else {
                    var tempHour = sHour.substr(0, 4);
                    var hour = tempHour.substr(0, 2);
                    var minutes = tempHour.substr(2, 2);
                  }
                }
                return (
                  <Fragment key={res._id}>
                    <tr className="border-y text-sm md:text-base   border-ferra">
                      <td className="p-3 m-3">{res.nombre}</td>
                      <td>{res.fecha}</td>
                      <td>{res.tipoCorp}</td>
                      <td>{`${hour}:${minutes}`}</td>
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
                <th className="px-6">Tipo de cita</th>
                <th>Hora</th>
                <th className="px-4">Teléfono</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center border-y-2 border-ferra">
              {citas.map((cita) => {
                if (cita.horab) {
                  let sHour = cita.horab.toString();
                  if (sHour.length === 6) {
                    var tempHour = sHour.substr(0, 3);
                    var hour = tempHour.substr(0, 1);
                    var minutes = tempHour.substr(1, 2);
                  } else {
                    var tempHour = sHour.substr(0, 4);
                    var hour = tempHour.substr(0, 2);
                    var minutes = tempHour.substr(2, 2);
                  }
                }
                return (
                  <Fragment key={cita._id}>
                    <tr className="border-y text-sm md:text-base   border-ferra">
                      <td className="p-3 m-3">{cita.nombre}</td>
                      <td>{cita.fecha}</td>
                      <td>{cita.tipoCorp}</td>
                      <td>{`${hour}:${minutes}`}</td>
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
  const { data: citas } = await axios.get("http://localhost:3000/api/citasBaq");

  return {
    props: {
      citas,
    },
  };
};
