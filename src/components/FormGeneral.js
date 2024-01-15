import { useState } from "react";
import Image from "next/image";
import caminar from "/public/caminar.png";
import yoga from "/public/yoga.png";
import correr from "/public/correr.png";
import abs from "/public/abdominales.png";
import pesas from "/public/ejercicio.png";
import disciplina from "/public/capacitacion.png";
import nonexc from "/public/nogimnasio.png";
import cigarrillo from "/public/fumar.png";
import drogas from "/public/drogas.png";
import med from "/public/medicamentos.png";
import alcohol from "/public/alcohol.png";
import hobbies from "/public/hobbies.png";
import wake from "/public/despertador.png";
import desayuno from "/public/desayuno.png";
import almuerzo from "/public/almuerzo.png";
import cena from "/public/cena.png";
import dormir from "/public/dormir.png";

const FormGeneral = ({ onSubmit }) => {
  const [formGeneral, setFormGeneral] = useState({
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
    enfPulm: "",
    enfDige: "",
    enfHema: "",
    enfEndo: "",
    enfNeu: "",
    presion: "",
    alergia: "",
    piel: "",
    convulsiones: "",
    tabaco: "",
    alcohol: "",
    drogas: "",
    marcapasos: "",
    peso: "",
    estatura: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormGeneral({ ...formGeneral, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formGeneral);
  };

  return (
    <>
      <div>
        <h2 className="font-bold text-ferra text-3xl text-center mb-4">
          FICHA CLÍNICA GENERAL
        </h2>
        <form
          onSubmit={handleSubmit}
          className="border-2 flex flex-col md:block border-ferra rounded-md p-5 backdrop-blur-2xl"
        >
          <div className="flex flex-row flex-wrap justify-center w-14/15 mx-auto my-4 items-center border-b-2 border-ferra">
            <span className="flex justify-center text-xl font-thin w-full">
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
          <span className="flex justify-center text-xl font-thin w-full">
            Datos Clínicos
          </span>
          <span className="font-thin md:w-1/2 flex justify-center">
            ¿Padece alguna enfermedad?
          </span>
          <div className="w-full flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:w-1/2 my-4 items-center border-r-2 border-ferra px-2">
              <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap">
                <div className="w-full flex justify-between">
                  <label className="w-36">Cardiovasculares</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfHema"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfHema"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Pulmonares</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="convulsiones"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="convulsiones"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Renales</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfNeu"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfNeu"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Gastrointestinales</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfCirc"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfCirc"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Hematológicas</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfPulm"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfPulm"
                    value="No"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Endocrinas</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="presion"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="presion"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Neurológicas</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfEndo"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfEndo"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Mentales</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfDige"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfDige"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Dermatológicas</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="piel"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="piel"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Metabólicas</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfCar"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfCar"
                    value="No"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-around">
              <div className="bg-white flex flex-col items-center rounded-lg mb-3 shadow-2xl shadow-black">
                <label className="w-36 text-center">Marcapasos</label>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center rounded-lg mb-3 shadow-2xl shadow-black">
                <label className="w-36 text-center">Cardiopatías</label>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="marcapasos"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="marcapasos"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center rounded-lg mb-3 shadow-2xl shadow-black">
                <label className="w-36 text-center">Cáncer</label>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="alergia"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="alergia"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center rounded-lg shadow-2xl shadow-black mb-3">
                <label className="w-36 text-center">Implantes de metal</label>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="alcohol"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="alcohol"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center rounded-lg shadow-2xl shadow-black mb-3">
                <label className="w-36 text-center">Tiroides</label>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="drogas"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="drogas"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center rounded-lg shadow-2xl shadow-black mb-3">
                <label className="w-36 text-center">Otros</label>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="tabaco"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="tabaco"
                    value="No"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row my-6">
            <div className="md:w-2/5 flex flex-col mb-3 md:mr-3 md:border-r-2 border-ferra">
              <span className="text-center font-thin">Estado de gravidez</span>
              <div className="w-full flex flex-row justify-around items-center">
                <label className="w-48">Embarazo actual</label>
                <span className="px-2">Sí</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="No"
                />
              </div>
              <div className="w-full flex flex-row justify-around items-center">
                <label className="w-48">Anticonceptivos orales</label>
                <span className="px-2">Sí</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="No"
                />
              </div>
              <div className="w-full flex flex-row justify-around items-center">
                <label className="w-48">Climaterio</label>
                <span className="px-2">Sí</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="No"
                />
              </div>
              <div className="w-full flex flex-row justify-around items-center">
                <label className="w-48">Reemplazo hormonal</label>
                <span className="px-2">Sí</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="tabaco"
                  value="No"
                />
              </div>
            </div>
            <div className="md:w-3/5 flex flex-col md:flex-row mb-3">
              <div className="flex flex-col w-full">
                <span className="text-center font-thin">Lesiones</span>
                <div className="w-full flex flex-col md:flex-row">
                  <div className="flex flex-row md:w-1/2 flex-wrap md:border-r-2 border-ferra md:mr-3 md:pr-3">
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Dolor de columna</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Fracturas</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Luxaciones</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Esguinces</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:w-1/2 flex-wrap">
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Contracturas</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Espamos musculares</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Tirón</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Desgarres</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tabaco"
                        value="No"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="text-center block font-thin w-full">
            Actividad Física
          </span>
          <div className="flex flex-row flex-wrap w-full justify-around">
            <div className="flex flex-col items-center md:px-5">
              <input type="radio" name="actividadF" value="X" />
              <Image src={caminar} width={80} height={80} alt="caminar" />
              <label>Muy ligera</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input type="radio" name="actividadF" value="X" />
              <Image src={yoga} width={80} height={80} alt="caminar" />
              <label>Ligera</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input type="radio" name="actividadF" value="X" />
              <Image src={correr} width={80} height={80} alt="caminar" />
              <label>Moderada</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input type="radio" name="actividadF" value="X" />
              <Image src={abs} width={80} height={80} alt="caminar" />
              <label>Pesada</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input type="radio" name="actividadF" value="X" />
              <Image src={pesas} width={80} height={80} alt="caminar" />
              <label>Excepcional</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input type="radio" name="actividadF" value="X" />
              <Image src={disciplina} width={80} height={80} alt="caminar" />
              <label>Disciplinada</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input type="radio" name="actividadF" value="X" />
              <Image src={nonexc} width={80} height={80} alt="caminar" />
              <label>Ninguna</label>
            </div>
          </div>
          <div className="w-full mt-6 flex flex-col items-center justify-center">
            <span className="text-center font-thin">Hábitos de Salud</span>
            <div className="flex flex-row w-full items-center flex-wrap justify-around mt-5">
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black w-60 p-2">
                <div>
                  <Image
                    src={cigarrillo}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Tabaquismo</label>
                </div>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black w-60 p-2">
                <div>
                  <Image
                    src={drogas}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Consume Drogas</label>
                </div>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black w-60 p-2">
                <div>
                  <Image
                    src={med}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Se Automedica</label>
                </div>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black w-60 p-2">
                <div>
                  <Image
                    src={alcohol}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Alcoholismo</label>
                </div>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black w-60 p-2">
                <div>
                  <Image
                    src={hobbies}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Pasatiempos</label>
                </div>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfRen"
                    value="No"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 flex flex-col items-center justify-center">
            <span className="text-center font-thin">Diario de Actividades</span>
            <div className="flex flex-row w-full items-center flex-wrap justify-around mt-5">
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={wake}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Su día comienza</label>
                </div>
                <input type="text" className="w-28 mx-auto border-b-2" />
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={desayuno}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Desayuna a las:</label>
                </div>
                <input type="text" className="w-28 mx-auto border-b-2" />
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={almuerzo}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Almuerza a las:</label>
                </div>
                <input type="text" className="w-28 mx-auto border-b-2" />
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={cena}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Cena a las:</label>
                </div>
                <input type="text" className="w-28 mx-auto border-b-2" />
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={dormir}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Duerme a las:</label>
                </div>
                <input type="text" className="w-28 mx-auto border-b-2" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormGeneral;
