import { useState } from "react";
import { merriweather } from "@/ui/fonts";

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ nombre: "", documento: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  console.log(formData.name);
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center py-6 px-3">
        <h1 className={`${merriweather.className} antialiased text-2xl mb-4`}>
          Ficha Clínica General
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full flex flex-col flex-wrap gap-3 justify-between border-y-2 border-maintxt py-3">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Ciudad:</label>
            <input
              type="text"
              name="ciudad"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Documento:</label>
            <input
              type="number"
              name="documento"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Estado Civil:</label>
            <input
              type="text"
              name="estCivil"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Correo:</label>
            <input
              type="text"
              name="correo"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Télefono:</label>
            <input
              type="number"
              name="telefono"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Peso:</label>
            <input
              type="number"
              name="peso"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Estatura:</label>
            <input
              type="number"
              name="estatura"
              className="border-maintxt border-b-2 border-x-2 rounded-lg"
              onChange={handleChange}
            />
            <label>Nacimiento:</label>
            <input
              type="date"
              name="birth"
              className="border-maintxt border-b-2 border-x-2 rounded-lg w-full"
              onChange={handleChange}
            />
          </div>
          <h4 className="text-lg my-7 text-center">Datos Clínicos</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Enf. Cardiovasculares:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfCard"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfCard"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Pulmonares:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfPulm"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfPulm"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Renales:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfRena"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfRena"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Gastrointestinales:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfGastro"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfGastro"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Hematológicas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfHema"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfHema"
                onChange={handleChange}
              />
            </div>
            <label>Enf Endocrinas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfEndo"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfEndo"
                onChange={handleChange}
              />
            </div>
            <label>Enf Neurológicas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfNeuro"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfNeuro"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Mentales:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfMent"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfMent"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Dermatológicas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfDerma"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfDerma"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Metabólicas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfMeta"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfMeta"
                onChange={handleChange}
              />
            </div>
            <label>Marcapasos:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="marcapasos"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="marcapasos"
                onChange={handleChange}
              />
            </div>
            <label>Cardiopatías:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="cardiopatias"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="cardiopatias"
                onChange={handleChange}
              />
            </div>
            <label>Cáncer:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="cancer"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="cancer"
                onChange={handleChange}
              />
            </div>
            <label>Implantes Metálicos:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="impMetal"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="impMetal"
                onChange={handleChange}
              />
            </div>
            <label>Tiroides:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="tiroides"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="tiroides"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <h4 className="text-lg my-7 text-center">Medidas Corporales</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Cintura:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniCint"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medCint"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finCint"
                onChange={handleChange}
              />
            </div>
            <label>Pecho:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniPecho"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medPecho"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finPecho"
                onChange={handleChange}
              />
            </div>
            <label>Cadera:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniCadera"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medCadera"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finCadera"
                onChange={handleChange}
              />
            </div>
            <label>Abdomen:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniAbdomen"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medAbdomen"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finAbdomen"
                onChange={handleChange}
              />
            </div>
            <label>B. Izquierdo:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniBIzquierdo"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medBIzquierdo"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finBIzquierdo"
                onChange={handleChange}
              />
            </div>
            <label>B. Derecho:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniBDerecho"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medBDerecho"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finBDerecho"
                onChange={handleChange}
              />
            </div>
            <label>M. Izquierdo:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniMIzquierdo"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medMIzquierdo"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finMIzquierdo"
                onChange={handleChange}
              />
            </div>
            <label>M. Derecho:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniMDerecho"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medMDerecho"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finMDerecho"
                onChange={handleChange}
              />
            </div>
            <label>P. Izquierda:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniPIzq"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medPIzquierda"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finPIzquierda"
                onChange={handleChange}
              />
            </div>
            <label>P. Derecha:</label>
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Inicio"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="iniPDerecha"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mitad"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="medPDerecha"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Final"
                className="w-[33%] border-y border-maintxt gap-2 text-center"
                name="finPDerecha"
                onChange={handleChange}
              />
            </div>
          </div> */}
          <h4 className="text-lg my-7 text-center">Estado de Gravidez</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Embarazo actual:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="embarazo"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="embarazo"
                onChange={handleChange}
              />
            </div>
            <label>Anticonceptivos Orales:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="anticonceptivosO"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="anticonceptivosO"
                onChange={handleChange}
              />
            </div>
            <label>Climaterio:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="climaterio"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="climaterio"
                onChange={handleChange}
              />
            </div>
            <label>Reemplazo Hormonal:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="reempHormonal"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="reempHormonal"
                onChange={handleChange}
              />
            </div>
          </div>
          <h4 className="text-lg my-7 text-center">Lesiones</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Dolor en Columna:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="columna"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="columna"
                onChange={handleChange}
              />
            </div>
            <label>Fracturas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="fracturas"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="fracturas"
                onChange={handleChange}
              />
            </div>
            <label>Luxaciones:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="luxaciones"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="luxaciones"
                onChange={handleChange}
              />
            </div>
            <label>Esguinces:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="esguinces"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="esguinces"
                onChange={handleChange}
              />
            </div>
            <label>Contracturas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="contracturas"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="contracturas"
                onChange={handleChange}
              />
            </div>
            <label>Espasmo Muscular:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="espasmos"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="espasmos"
                onChange={handleChange}
              />
            </div>
            <label>Tirón:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="tiron"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="tiron"
                onChange={handleChange}
              />
            </div>
            <label>Desgarres:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="desgarres"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="desgarres"
                onChange={handleChange}
              />
            </div>
          </div>
          <h4 className="text-lg my-7 text-center">Actividad Física</h4>
          <div className="border-y-2 border-maintxt py-3 flex gap-5 flex-wrap items-center justify-center">
            <div className="flex flex-col w-[14%]">
              <span className="text-center text-xs">Muy Ligera</span>
              <input
                type="radio"
                value="Muy Ligera"
                name="actFisica"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[14%]">
              <span className="text-center text-xs">Ligera</span>
              <input
                type="radio"
                value="Ligera"
                name="actFisica"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[14%]">
              <span className="text-center text-xs">Moderada</span>
              <input
                type="radio"
                value="Moderada"
                name="actFisica"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[14%]">
              <span className="text-center text-xs">Pesada</span>
              <input
                type="radio"
                value="Pesada"
                name="actFisica"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[14%]">
              <span className="text-center text-xs">Excepcional</span>
              <input
                type="radio"
                value="Excepcional"
                name="actFisica"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[14%]">
              <span className="text-center text-xs">Disciplinada</span>
              <input
                type="radio"
                value="Disciplinada"
                name="actFisica"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[14%]">
              <span className="text-center text-xs">Ninguna</span>
              <input
                type="radio"
                value="Ninguna"
                name="actFisica"
                onChange={handleChange}
              />
            </div>
          </div>
          <h4 className="text-lg my-7 text-center">Hábitos de Salud</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Tabaquismo:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="tabaquismo"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="tabaquismo"
                onChange={handleChange}
              />
            </div>
            <label>Drogas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="drogas"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="drogas"
                onChange={handleChange}
              />
            </div>
            <label>Automedicación:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="automedicacion"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="automedicacion"
                onChange={handleChange}
              />
            </div>
            <label>Alcohol:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="alcohol"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="alcohol"
                onChange={handleChange}
              />
            </div>
            <label>Pasatiempos:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="pasatiempos"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="pasatiempos"
                onChange={handleChange}
              />
            </div>
          </div>
          <h4 className="text-lg my-7 text-center">Diario de actividades</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Su día comienza:</label>
            <input
              type="text"
              placeholder="Ingrese la hora solicitada"
              className="w-full text-center border-x border-b border-maintxt"
              name="despierta"
              onChange={handleChange}
            />
            <label>Su hora de desayuno:</label>
            <input
              type="text"
              placeholder="Ingrese la hora solicitada"
              className="w-full text-center border-x border-b border-maintxt"
              name="desayuna"
              onChange={handleChange}
            />
            <label>Su hora de almuerzo:</label>
            <input
              type="text"
              placeholder="Ingrese la hora solicitada"
              className="w-full text-center border-x border-b border-maintxt"
              name="almuerza"
              onChange={handleChange}
            />
            <label>Su hora de la cena:</label>
            <input
              type="text"
              placeholder="Ingrese la hora solicitada"
              className="w-full text-center border-x border-b border-maintxt"
              name="cena"
              onChange={handleChange}
            />
            <label>Su hora de dormir:</label>
            <input
              type="text"
              placeholder="Ingrese la hora solicitada"
              className="w-full text-center border-x border-b border-maintxt"
              name="duerme"
              onChange={handleChange}
            />
          </div>
          <h4 className="text-lg my-7 text-center">Exploración física</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Su peso actual:</label>
            <input
              type="text"
              placeholder=""
              value={formData.peso}
              className="w-full text-center border-x border-b border-maintxt"
              name="peso"
            />
            <label>Su talla actual:</label>
            <input
              type="text"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="talla"
              onChange={handleChange}
            />
            <label>Su estatura actual:</label>
            <input
              type="text"
              placeholder=""
              value={formData.estatura}
              className="w-full text-center border-x border-b border-maintxt"
              name="estatura"
            />
            <label>Su IMC actual:</label>
            <input
              type="text"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="imc"
              onChange={handleChange}
            />
          </div>
          <h4 className="text-lg my-7 text-center">Hábitos alimenticios</h4>
          <p className="text-xs text-center">
            En una escala de 1 a 10 ¿con qué frecuencia consume lo siguiente?
          </p>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Agua:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="agua"
              onChange={handleChange}
            />
            <label>Azúcares:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="azucares"
              onChange={handleChange}
            />
            <label>Lácteos:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="lacteos"
              onChange={handleChange}
            />
            <label>Frutas:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="frutas"
              onChange={handleChange}
            />
            <label>Verduras:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="verduras"
              onChange={handleChange}
            />
            <label>Carnes Rojas:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="CRojas"
              onChange={handleChange}
            />
            <label>Carnes Blancas:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="CBlancas"
              onChange={handleChange}
            />
            <label>Grasas:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="grasas"
              onChange={handleChange}
            />
            <label>Harinas:</label>
            <input
              type="number"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="harinas"
              onChange={handleChange}
            />
            <label>¿Cómo consiera su dieta?:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Equilibrada</span>
              <input
                type="radio"
                value="Equilibrada"
                name="dieta"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">Desequilibrada</span>
              <input
                type="radio"
                value="Desequilibrada"
                name="dieta"
                onChange={handleChange}
              />
            </div>
          </div>
          <h4 className="text-lg my-7 text-center">Cuidado de la Piel</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Cuidados en casa:</label>
            <input
              type="text"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="pielEnCasa"
              onChange={handleChange}
            />
            <label>Productos que utiliza:</label>
            <input
              type="text"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="pielProductos"
              onChange={handleChange}
            />
            <label>Protector solar:</label>
            <input
              type="text"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="protectorSolar"
              onChange={handleChange}
            />
            <label>Tratamientos en cabina:</label>
            <input
              type="text"
              placeholder=""
              className="w-full text-center border-x border-b border-maintxt"
              name="pielCabina"
              onChange={handleChange}
            />
          </div>
          <h4 className="text-lg my-7 text-center">
            Características de la piel:
          </h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <label>Manchas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="manchasPiel"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="manchasPiel"
                onChange={handleChange}
              />
            </div>
            <label>Verrugas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="verrugas"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="verrugas"
                onChange={handleChange}
              />
            </div>
            <label>Vitiligo:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="vitiligo"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="vitiligo"
                onChange={handleChange}
              />
            </div>
            <label>Cicatrices:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="cicatrices"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="cicatrices"
                onChange={handleChange}
              />
            </div>
            <label>Quistes:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="quistes"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="quistes"
                onChange={handleChange}
              />
            </div>
            <label>Psoriasis:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="psoriasis"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="psoriasis"
                onChange={handleChange}
              />
            </div>
            <label>Eccemas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="eccemas"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="eccemas"
                onChange={handleChange}
              />
            </div>
            <label>Forúnculos:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="forunculos"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="forunculos"
                onChange={handleChange}
              />
            </div>
            <label>Acné:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="acne"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="acne"
                onChange={handleChange}
              />
            </div>
          </div>
          <h4 className="text-lg my-7 text-center">Tipo de piel:</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col">
            <div className="flex- flex-col items-center justify-center">
              <h5 className="my-7 font-bold">Biotipo</h5>
              <label>Piel joven:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielJoven"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielJoven"
                  onChange={handleChange}
                />
              </div>
              <label>Piel madura:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielMadura"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielMadura"
                  onChange={handleChange}
                />
              </div>
              <label>Normal:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielNormal"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielNormal"
                  onChange={handleChange}
                />
              </div>
              <label>Seca:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielSeca"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielSeca"
                  onChange={handleChange}
                />
              </div>
              <label>Mixta:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielMixta"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielMixta"
                  onChange={handleChange}
                />
              </div>
              <label>Graso:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielGrasa"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielGrasa"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex- flex-col items-center justify-center">
              <h5 className="my-7 font-bold">Estado</h5>
              <label>Deshidratada:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielDeshidratada"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielDeshidratada"
                  onChange={handleChange}
                />
              </div>
              <label>Asfíctica:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielAsfictica"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielAsfictica"
                  onChange={handleChange}
                />
              </div>
              <label>Alíptica:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielAliptica"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielAliptica"
                  onChange={handleChange}
                />
              </div>
              <label>Fotoenvejecida:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="fotoenvejecida"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="fotoenvejecida"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex- flex-col items-center justify-center">
              <h5 className="my-7 font-bold">Características</h5>
              <label>Piel gruesa:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielGruesa"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielGruesa"
                  onChange={handleChange}
                />
              </div>
              <label>Piel delgada:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielDelgada"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielDelgada"
                  onChange={handleChange}
                />
              </div>
              <label>Poro abierto:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="poroAbierto"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="poroAbierto"
                  onChange={handleChange}
                />
              </div>
              <label>Poro Cerrado:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="poroCerrado"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="poroCerrado"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex- flex-col items-center justify-center">
              <h5 className="my-7 font-bold">Líneas de expresión</h5>
              <label>Suaves:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="expSuaves"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="expSuaves"
                  onChange={handleChange}
                />
              </div>
              <label>Profundas:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="expProfundas"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="expProfundas"
                  onChange={handleChange}
                />
              </div>
              <label>Arrugas:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="expArrugas"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="expArrugas"
                  onChange={handleChange}
                />
              </div>
              <label>Flacidez:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="expFlacidez"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="expFlacidez"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex- flex-col items-center justify-center">
              <h5 className="my-7 font-bold">Alteraciones</h5>
              <label>Hipercromías:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="hipercromias"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="hipercromias"
                  onChange={handleChange}
                />
              </div>
              <label>Rosácea:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="rosacea"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="rosacea"
                  onChange={handleChange}
                />
              </div>
              <label>Cuperósis:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="cuperosis"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="cuperosis"
                  onChange={handleChange}
                />
              </div>
              <label>Acné:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="acne"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="acne"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex- flex-col items-center justify-center">
              <h5 className="my-7 font-bold">Tacto</h5>
              <label>Suave:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="tactoSuave"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="tactoSuave"
                  onChange={handleChange}
                />
              </div>
              <label>Acartonada:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielAcartonada"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielAcartonada"
                  onChange={handleChange}
                />
              </div>
              <label>Oleosa:</label>
              <div className="w-full flex">
                <span className="w-[50%] text-center">Sí</span>
                <input
                  type="radio"
                  value="Sí"
                  name="pielOleosa"
                  onChange={handleChange}
                />
                <span className="w-[50%] text-center">No</span>
                <input
                  type="radio"
                  value="No"
                  name="pielOleosa"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-buttons text-white border-none rounded-md my-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
