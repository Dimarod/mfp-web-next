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
import peso from "/public/peso.png";
import estatura from "/public/altura.png";
import imc from "/public/imc.png";
import talla from "/public/talla.png";

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
    enfHema: "",
    enfRen: "",
    enfEndo: "",
    enfGas: "",
    enfPulm: "",
    enfNeu: "",
    enfMent: "",
    piel: "",
    enfMeta: "",
    embarazo: "",
    climaterio: "",
    anticonceptivos: "",
    hormonas: "",
    actividadF: "",
    tabaq: "",
    drugs: "",
    med: "",
    alcohol: "",
    hobbies: "",
    desgarres: "",
    espasmos: "",
    tiron: "",
    contracturas: "",
    columna: "",
    fracturas: "",
    luxaciones: "",
    esguince: "",
    cancer: "",
    marcapasos: "",
    tiroides: "",
    implantes: "",
    cardiopatias: "",
    otros: "",
    wake: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    sleep: "",
    peso: "",
    talla: "",
    altura: "",
    imc: "",
    obsFisica: "",
    agua: "",
    azucar: "",
    lacteos: "",
    frutas: "",
    verduras: "",
    crojas: "",
    cblancas: "",
    grasas: "",
    harinas: "",
    dieta: "",
    obsAlimentos: ""
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
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Pulmonares</label>
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
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Renales</label>
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
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Gastrointestinales</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfGas"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfGas"
                    value="No"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Hematológicas</label>
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
              </div>
              <div className="md:w-1/2">
                <div className="w-full flex justify-between">
                  <label className="w-36 text-center">Endocrinas</label>
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
                  <label className="w-36 text-center">Neurológicas</label>
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
                  <label className="w-36 text-center">Mentales</label>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfMent"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfMent"
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
                    name="enfMeta"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="enfMeta"
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
                <label className="w-36 text-center">Cardiopatías</label>
                <div>
                  <span className="px-2">Sí</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="cardiopatias"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="cardiopatias"
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
                    name="cancer"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="cancer"
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
                    name="implantes"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="implantes"
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
                    name="tiroides"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="tiroides"
                    value="No"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center rounded-lg shadow-2xl shadow-black mb-3">
                <label className="w-36 text-center">Otros</label>
                <input onChange={handleChange} type="text" className="border-b-2 border-black" name="otros"/>
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
                  name="embarazo"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="embarazo"
                  value="No"
                />
              </div>
              <div className="w-full flex flex-row justify-around items-center">
                <label className="w-48">Anticonceptivos orales</label>
                <span className="px-2">Sí</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="anticonceptivos"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="anticonceptivos"
                  value="No"
                />
              </div>
              <div className="w-full flex flex-row justify-around items-center">
                <label className="w-48">Climaterio</label>
                <span className="px-2">Sí</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="climaterio"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="climaterio"
                  value="No"
                />
              </div>
              <div className="w-full flex flex-row justify-around items-center">
                <label className="w-48">Reemplazo hormonal</label>
                <span className="px-2">Sí</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="hormonas"
                  value="Si"
                />
                <span className="px-2">No</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="hormonas"
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
                        name="columna"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="columna"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Fracturas</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="fracturas"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="fracturas"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Luxaciones</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="luxaciones"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="luxaciones"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Esguinces</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="esguince"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="esguince"
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
                        name="contracturas"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="contracturas"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Espamos musculares</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="espasmos"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="espasmos"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Tirón</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tiron"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="tiron"
                        value="No"
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around items-center">
                      <label className="w-48">Desgarres</label>
                      <span className="px-2">Sí</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="desgarres"
                        value="Si"
                      />
                      <span className="px-2">No</span>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="desgarres"
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
              <input onChange={handleChange} type="radio" name="actividadF" value="Muy Ligera" />
              <Image src={caminar} width={80} height={80} alt="caminar" />
              <label>Muy ligera</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input onChange={handleChange} type="radio" name="actividadF" value="Ligera" />
              <Image src={yoga} width={80} height={80} alt="caminar" />
              <label>Ligera</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input onChange={handleChange} type="radio" name="actividadF" value="Moderada" />
              <Image src={correr} width={80} height={80} alt="caminar" />
              <label>Moderada</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input onChange={handleChange} type="radio" name="actividadF" value="Pesada" />
              <Image src={abs} width={80} height={80} alt="caminar" />
              <label>Pesada</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input onChange={handleChange} type="radio" name="actividadF" value="Excepcional" />
              <Image src={pesas} width={80} height={80} alt="caminar" />
              <label>Excepcional</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input onChange={handleChange} type="radio" name="actividadF" value="Disciplina" />
              <Image src={disciplina} width={80} height={80} alt="caminar" />
              <label>Disciplinada</label>
            </div>
            <div className="flex flex-col items-center md:px-5">
              <input onChange={handleChange} type="radio" name="actividadF" value="Ninguna" />
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
                    name="tabaq"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="tabaq"
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
                    name="drugs"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="drugs"
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
                    name="med"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="med"
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
                    name="hobbies"
                    value="Si"
                  />
                  <span className="px-2">No</span>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="hobbies"
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
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="wake"
                />
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
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="breakfast"
                />
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
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="lunch"
                />
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
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="dinner"
                />
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
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="sleep"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-6 flex flex-col items-center justify-center">
            <span className="text-center font-thin">Exploración Física</span>
            <div className="flex flex-row w-full items-center flex-wrap justify-around mt-5">
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={peso}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Su peso es de:</label>
                </div>
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="peso"
                />
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={talla}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Su talla es:</label>
                </div>
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="talla"
                />
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={estatura}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Su estatura es:</label>
                </div>
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="altura"
                />
              </div>
              <div className="bg-white flex flex-row items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <div>
                  <Image
                    src={imc}
                    alt="cigarrillo"
                    title="cigarrillo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <label className="w-36 text-center">Su IMC es:</label>
                </div>
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="imc"
                />
              </div>
              <div className="bg-white flex flex-col items-center rounded-lg mb-3 shadow-2xl shadow-black p-3 w-64">
                <label className="w-36 text-center">Observaciones:</label>
                <input onChange={handleChange}
                  type="text"
                  className="w-28 mx-auto border-b-2 border-black"
                  name="obsFisica"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-6 flex flex-col items-center justify-center">
            <span className="text-center font-thin">Hábitos Alimenticios</span>
            <span className="font-thin text-sm">Del 1 al 10 indique la frecuencia con la que consume los siguientes alimentos</span>
            <div className="flex flex-col flex-wrap md:flex-row w-full items-center justify-around py-2">
              <div className="flex flex-col w-1/4 bg-white shadow-xl shadow-black rounded-md py-4 items-center justify-around">
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">Agua</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className=" border-b-2 border-black"
                    name="agua"
                  />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">Azúcares</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className="border-b-2 border-black"
                    name="azucar"
                  />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">Lácteos</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className="border-b-2 border-black"
                    name="lacteos"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/4 bg-white shadow-xl shadow-black rounded-md py-4 items-center justify-around">
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">Fruta</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className=" border-b-2 border-black"
                    name="fruta"
                  />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">Verduras</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className="border-b-2 border-black"
                    name="verduras"
                  />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">C. Rojas</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className="border-b-2 border-black"
                    name="crojas"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/4 bg-white shadow-xl shadow-black rounded-md py-4 items-center justify-around">
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">C. Blancas</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className=" border-b-2 border-black"
                    name="cblancas"
                  />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">Grasas</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className="border-b-2 border-black"
                    name="grasas"
                  />
                </div>
                <div className="flex flex-row w-full items-center justify-around">
                  <label className="w-20">Harinas</label>
                  <input onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                    className="border-b-2 border-black"
                    name="harinas"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/3 bg-white shadow-xl shadow-black rounded-md py-4 items-center justify-around mt-4">
                <label>¿Como considera su dieta?</label>
                <div>
                  <input onChange={handleChange} type="radio" name="dieta" value="Equilibrada"/>
                  <span className="pl-2">Equilibrada</span>
                </div>
                <div>
                  <input onChange={handleChange} type="radio" name="dieta" value="Desequilibrada" />
                  <span className="pl-2">Desequilibrada</span>
                </div>
              </div>
              <div className="flex flex-col w-3/5 bg-white shadow-xl shadow-black rounded-md py-4 items-center justify-around">
                <label>Observaciones</label>
                <input onChange={handleChange} type="text" className="w-3/4 border-b-2 border-black" name="obsAlimentos" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white mt-5 py-1 bg-ferra rounded-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormGeneral;
