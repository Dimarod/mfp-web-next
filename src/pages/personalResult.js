/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import { merriweather } from "@/ui/fonts";

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
      {/* <Layout>
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
      </Layout> */}
      <Layout>
        <div
          className="w-full flex flex-col items-center h-[79vh] justify-center"
          id="nextAppo"
        >
          <h1 className={`${merriweather.className} text-maintxt text-2xl `}>
            Consulta tu cita
          </h1>
          <p className="text-xs text-maintxt">¿No recuerdas tu próxima cita?</p>
          <p className="text-xs text-maintxt">Consúltala aquí</p>
          {/* <div className="flex flex-col items-center justify-around h-56">
            <form className="flex items-center mt-7">
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y Apellido"
                  className="bg-transparent rounded-xl border border-maintxt pl-2"
                />
                <span className="pt-4 text-xs">Elige tu sede de atención</span>
                <div className="w-full flex items-center justify-around">
                  <input
                    type="radio"
                    name="sede"
                    value="citasBaq"
                    placeholder=""
                    className="bg-transparent rounded-xl border border-maintxt pl-2"
                  />
                  <label>Barranquilla</label>
                  <input
                    type="radio"
                    name="sede"
                    value="citas"
                    placeholder=""
                    className="bg-transparent rounded-xl border border-maintxt pl-2"
                  />
                  <label>Soledad</label>
                </div>
              </div>
            </form>
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
                      var hour = tempHour.substr(0, 1);
                      var minutes = tempHour.substr(1, 2);
                    } else {
                      var tempHour = sHour.substr(0, 4);
                      var hour = tempHour.substr(0, 2);
                      var minutes = tempHour.substr(2, 2);
                    }
                  } else {
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
          </div> */}
          <div className="w-full h-56 my-3 flex flex-col items-center justify-around">
            <form className="flex flex-col items-center justify-around h-24 w-full">
              <div className=" flex items-center justify-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y Apellido"
                  className="bg-transparent rounded-xl border border-maintxt pl-2"
                />
                <button className="px-1">
                  <Image src="/lupa.svg" alt="buscar" width={32} height={32} />
                </button>
              </div>
              <span className="text-xs w-full text-center">
                Elige tu sede de atención
              </span>
              <div className="flex items-center justify-around w-3/5">
                <input
                  type="radio"
                  name="sede"
                  value="citasBaq"
                  placeholder=""
                  className="bg-transparent rounded-xl border border-maintxt pl-2"
                />
                <label>Barranquilla</label>
                <input
                  type="radio"
                  name="sede"
                  value="citas"
                  placeholder=""
                  className="bg-transparent rounded-xl border border-maintxt pl-2"
                />
                <label>Soledad</label>
              </div>
            </form>
            <table className=" md:w-full border-collapse text-ferra">
              <thead className="border-y-2 bg-mainbg/30 border-maintxt/20">
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
                      var hour = tempHour.substr(0, 1);
                      var minutes = tempHour.substr(1, 2);
                    } else {
                      var tempHour = sHour.substr(0, 4);
                      var hour = tempHour.substr(0, 2);
                      var minutes = tempHour.substr(2, 2);
                    }
                  } else {
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
          </div>
        </div>
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
