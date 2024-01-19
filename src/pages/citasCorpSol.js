/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const citasCorpSol = ({ citas }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    await axios.delete("/api/citassol/" + id);
    router.push("citasCorpSol");
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
              if(cita.horab === 720800){
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
              }else if(cita.horac === 19202000){
                var hora = "7:20 PM"
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
      </Layout>
    </>
  );
};

export default citasCorpSol;

export const getServerSideProps = async (context) => {
  const { data: citas } = await axios.get(
    "http://192.168.1.11:3000/api/citassol"
  );

  return {
    props: {
      citas,
    },
  };
};
