/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const citasCorpSol = ({ citas }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    await axios.delete("/api/citasfacbaq/" + id);
    router.push("citasFacBaq");
  };

  return (
    <>
      <Layout>
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
              return (
                <Fragment key={cita._id}>
                  <tr className="border-y text-sm md:text-base   border-ferra">
                    <td className="p-3 m-3">{cita.nombre}</td>
                    <td>{cita.fecha}</td>
                    <td>{cita.tipoDermoBaq}</td>
                    <td>{cita.horafb}</td>
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
      </Layout>
    </>
  );
};

export default citasCorpSol;

export const getServerSideProps = async (context) => {
  const { data: citas } = await axios.get("http://192.168.1.11:3000/api/citasfacbaq");

  return {
    props: {
      citas,
    },
  };
};
