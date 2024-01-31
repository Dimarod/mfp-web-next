/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Image from "next/image";
import seca from "../../public/seca.png";
import grasa from "../../public/grasa.png";
import rostro from "../../public/rostro.png";

const FormFacial = ({ onSubmit }) => {
  const [formFacial, setFormFacial] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    ciudad: "",
    documento: "",
    edad: "",
    estCivil: "",
    correo: "",
    fecha: "",
    enfCar: "",
    enfRen: "",
    enfCirc: "",
    tratDermo: "",
    enfDige: "",
    meds: "",
    fractura: "",
    azucar: "",
    presion: "",
    alergias: "",
    piel: "",
    convulsiones: "",
    cremas: "",
    lentes: "",
    cirugias: "",
    impDent: "",
    autoTrat: "",
    obs: "",
    obsGen: "",
    obsEnfCar: "",
    obsEnfCirc: "",
    obsAlergias: "",
    obsEnfRen: "",
    obsAzucar: "",
    obsConvulsiones: "",
    obsEnfDige: "",
    obsPresion: "",
    obsCremas: "",
    obsLentes: "",
    obsPiel: "",
    obsCirugias: "",
    obsImpDent: "",
    obsFractura: "",
    obsMeds: "",
    obsTratDermo: "",
    obsAutoTrat: "",
    cutis: "",
    diagnostico: "",
    procedimiento: "",
    presupuesto: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormFacial({ ...formFacial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formFacial);
  };
  return (
    <>
      <div>
        <h2 className="text-4xl my-12 text-center text-ferra font-thin">
          FICHA FACIAL
        </h2>
        <form
          onSubmit={handleSubmit}
          className="border-2 flex flex-col md:block border-ferra rounded-md p-5 backdrop-blur-2xl"
        >
          <div className="flex flex-row flex-wrap justify-center w-14/15 mx-auto my-4 items-center border-b-2 border-ferra">
            <span className="flex justify-center text-lg font-thin w-full">
              Datos generales
            </span>
            <label>Nombre:</label>
            <input
              onChange={handleChange}
              name="nombre"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Direccion:</label>
            <input
              onChange={handleChange}
              name="direccion"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Ciudad:</label>
            <input
              onChange={handleChange}
              name="ciudad"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>CC:</label>
            <input
              onChange={handleChange}
              name="documento"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Edad:</label>
            <input
              onChange={handleChange}
              name="edad"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Estado Civil:</label>
            <input
              onChange={handleChange}
              name="estCivil"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Correo:</label>
            <input
              onChange={handleChange}
              name="correo"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Teléfono:</label>
            <input
              onChange={handleChange}
              name="telefono"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Peso:</label>
            <input
              onChange={handleChange}
              name="peso"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Estatura:</label>
            <input
              onChange={handleChange}
              name="estatura"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="text"
            />
            <label>Fecha:</label>
            <input
              onChange={handleChange}
              name="fecha"
              className="border-b-2 border-ferra border-x-2 m-4"
              type="date"
            />
          </div>
          <div className="w-full flex items-center justify-around flex-wrap">
            <div className="w-full md:w-2/7">
              <label>Enfermedades cardiacas:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="enfCar" value="Si" />
                <span>No</span>
                <input type="radio" name="enfCar" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsEnfCar"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Enfermedades circulatorias:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="enfCirc" value="Si" />
                <span>No</span>
                <input type="radio" name="enfCirc" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsEnfCirc"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Presenta alergias:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="alergias" value="Si" />
                <span>No</span>
                <input type="radio" name="alergias" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsAlergias"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Enfermedades renales:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="enfRen" value="Si" />
                <span>No</span>
                <input type="radio" name="enfRen" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsEnfRen"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Problemas de azúcar:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="azucar" value="Si" />
                <span>No</span>
                <input type="radio" name="azucar" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsAzucar"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Sufre convulsiones:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="convulsiones" value="Si" />
                <span>No</span>
                <input type="radio" name="convulsiones" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsConvulsiones"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Enfermedades digestivas:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="enfDige" value="Si" />
                <span>No</span>
                <input type="radio" name="enfDige" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsEnfDige"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Problemas de presión:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="presion" value="Si" />
                <span>No</span>
                <input type="radio" name="presion" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsPresion"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Cremas de uso actual:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="cremas" value="Si" />
                <span>No</span>
                <input type="radio" name="cremas" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsCremas"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Utiliza lentes de contacto:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="lentes" value="Si" />
                <span>No</span>
                <input type="radio" name="lentes" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsLentes"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Preseta problemas en la piel:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="piel" value="Si" />
                <span>No</span>
                <input type="radio" name="piel" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsPiel"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Se ha realizado alguna cirugia:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="cirugias" value="Si" />
                <span>No</span>
                <input type="radio" name="cirugias" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsCirugias"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Posee implantes dentales:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="impDent" value="Si" />
                <span>No</span>
                <input type="radio" name="impDent" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsImpDent"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Tiene alguna fractura facial:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="fractura" value="Si" />
                <span>No</span>
                <input type="radio" name="fractura" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsFractura"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Consume algún medicamento:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="meds" value="Si" />
                <span>No</span>
                <input type="radio" name="meds" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsMeds"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Tratamiento dermatológico:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="tratDermo" value="Si" />
                <span>No</span>
                <input type="radio" name="tratDermo" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsTratDermo"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Autotratamiento facial:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="autoTrat" value="Si" />
                <span>No</span>
                <input type="radio" name="autoTrat" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsAutoTrat"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
            <div className="w-full md:w-2/7">
              <label>Observaciones:</label>
              <div className="w-full flex items-center justify-around rounded-md p-2 shadow-md shadow-black">
                <span>Sí</span>
                <input type="radio" name="obs" value="Si" />
                <span>No</span>
                <input type="radio" name="obs" value="No" />
                <span>Especifique:</span>
                <input
                  type="text"
                  name="obsGen"
                  className="w-28 border-2 rounded-md border-ferra"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-5">
            <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
              <span className="font-thin">Clase de cutis</span>
              <div className="flex w-full items-center justify-around">
                <Image
                  src={seca}
                  alt="piel seca"
                  title="piel seca"
                  className="w-20"
                />
                <div className="w-4/5 flex flex-col items-center justify-center">
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel Seca</label>
                    <input type="radio" name="cutis" value="Piel seca" />
                  </div>
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel levemente seca</label>
                    <input type="radio" name="cutis" value="Piel seca" />
                  </div>
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel medianamente seca</label>
                    <input type="radio" name="cutis" value="Piel seca" />
                  </div>
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel muy seca</label>
                    <input type="radio" name="cutis" value="Piel seca" />
                  </div>
                </div>
              </div>
              <hr className="border w-full border-ferra my-3" />
              <div className="flex w-full items-center justify-around">
                <Image
                  src={grasa}
                  alt="piel grasa"
                  title="piel grasa"
                  className="w-20"
                />
                <div className="w-4/5 flex flex-col items-center justify-center">
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel grasa</label>
                    <input type="radio" name="cutis" value="Piel grasa" />
                  </div>
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel levemente grasa</label>
                    <input
                      type="radio"
                      name="cutis"
                      value="Piel levemente grasa"
                    />
                  </div>
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel medianamente grasa</label>
                    <input
                      type="radio"
                      name="cutis"
                      value="Piel medianamente grasa"
                    />
                  </div>
                  <div className="w-3/4 flex items-center justify-around">
                    <label className="text-sm">Piel muy grasa</label>
                    <input type="radio" name="cutis" value="Piel muy grasa" />
                  </div>
                </div>
              </div>
              <hr className="w-full  border-ferra my-3 border" />
              <div className=" w-full flex items-center justify-around">
                <label>Desvitalizada</label>
                <input type="radio" name="cutis" value="Desvitalizada" />
                <label>Asfictica</label>
                <input type="radio" name="cutis" value="Asfictica" />
                <label>Hidratada</label>
                <input type="radio" name="cutis" value="Hidratada" />
                <label>Standard</label>
                <input type="radio" name="cutis" value="Standard" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mx-3">
              <span className="font-thin">Anatomía facial</span>
              <Image src={rostro} alt="rostro" title="Anatomía facial" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full flex-wrap items-center justify-around my-5">
            <div className="w-full md:w-2/7 flex items-center justify-around">
              <span>Diagnóstico general</span>
              <input
                className="w-1/2 border-x-2 border-b-2 border-ferra"
                type="text"
                name="diagnostico"
              />
            </div>
            <div className="w-full md:w-2/7 flex items-center justify-around">
              <span>Tratamiento a realizar</span>
              <input
                className="w-1/2 border-x-2 border-b-2 border-ferra"
                type="text"
                name="procedimiento"
              />
            </div>
            <div className="w-full md:w-2/7 flex items-center justify-around">
              <span>Presupuesto</span>
              <input
                className="w-1/2 border-x-2 border-b-2 border-ferra"
                type="text"
                name="presupuesto"
              />
            </div>
          </div>
          <button className="border w-full my-8 rounded-md bg-ferra text-white border-ferra">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormFacial;
