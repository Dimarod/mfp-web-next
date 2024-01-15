import Layout from "@/components/Layout";
import axios from "axios";
import { Fragment } from "react";

const personalAppoinment = ({ citas }) => {
  return (
    <>
      <Layout>
        <h1 className="text-4xl text-center text-ferra font-bold pb-4">
          Esta es tu próxima cita
        </h1>
        <table className=" md:w-full border-collapse text-ferra">
          <thead className="border-y-2 bg-slate-50/30 border-ferra">
            <tr>
              <th>Nombre</th>
              <th className="p-2">Fecha</th>
              <th className="px-6">Tipo cita</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody className="text-center border-y-2 border-ferra">
            {citas.map((cita) => {
              return (
                <Fragment key={cita._id}>
                  <tr className="border-y text-sm md:text-base   border-ferra">
                    <td>{cita.nombre}</td>
                    <td className="p-3">{cita.fecha}</td>
                    <td className="p-3">{cita.tipoCorp}</td>
                    <td>{cita.horac}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
        <p className="text-ferra tet-sm text-center pt-4">
          En caso de querer cancelarla comunicate con nosotros via whatsapp
          antes de las 6:00 PM del día anterior a tu cita
        </p>
      </Layout>
    </>
  );
};

export default personalAppoinment;

export const getServerSideProps = async (context) => {
  const { data: citas } = await axios.get(
    `http://192.168.1.11:3000/api${context.resolvedUrl}`
  );
  console.log(citas);

  return {
    props: { citas }, // will be passed to the page component as props
  };
};
