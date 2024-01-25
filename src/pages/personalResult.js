/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useState, useEffect } from "react";

const personalResult = () => {
  const router = useRouter();
  const { name, sede } = router.query;
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    if (name && sede) {
      buscarCitas(name, sede);
    }
  }, [name, sede]);

  const buscarCitas = async (name, sede) => {
    const result = await axios.get(
      `/api/${sede}/personalAppoinment?name=${name}&sede=${sede}`
    );
    setCitas(result.data);
  };

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
              if (cita.tipoCorp) {
                var tipo = cita.tipoCorp;
              } else {
                var tipo = cita.tipoBaq;
              }
              if (cita.horac) {
                let sHour = cita.horac.toString();
                if (sHour.length === 6) {
                  var tempHour = sHour.substr(0, 3);
                  var hour = tempHour.substr(0,1)
                  var minutes = tempHour.substr(1,2)
                } else {
                  var tempHour = sHour.substr(0, 4);
                  var hour = tempHour.substr(0,2)
                  var minutes = tempHour.substr(2,2)
                }
              } else {
                let sHour = cita.horab.toString();
                if (sHour.length === 6) {
                  var tempHour = sHour.substr(0, 3);
                  var hour = tempHour.substr(0,1)
                  var minutes = tempHour.substr(1,2)
                } else {
                  var tempHour = sHour.substr(0, 4);
                  var hour = tempHour.substr(0,2)
                  var minutes = tempHour.substr(2,2)
                }
              }

              console.log(typeof hora);
              return (
                <Fragment key={cita._id}>
                  <tr className="border-y text-sm md:text-base   border-ferra">
                    <td>{cita.nombre}</td>
                    <td className="p-3">{cita.fecha}</td>
                    <td className="p-3">{tipo}</td>
                    <td>{`${hour}:${minutes}`}</td>
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

export default personalResult;

// export const getServerSideProps = async (context) => {
//    const { data: citas } = await axios.get(
//      `http://192.168.1.11:3000/api/${sede}`
//    );
//   console.log(citas);

//   return {
//     props: {  }, // will be passed to the page component as props
//   };
// };
