/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const FormCorporal = ({ onSubmit }) => {
  const [formCorporal, setFormCorporal] = useState({
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
    setFormCorporal({ ...formCorporal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formCorporal);
  };
  return (
    <>
      <div>
        <h2 className="text-4xl my-12 text-center text-ferra font-thin">
          FICHA CORPORAL
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
          <div className="w-full flex flex-col md:flex-row">
            <div className="flex flex-col flex-wrap justify-center md:w-1/4 my-4 items-center border-r-2 border-ferra px-2">
              <span className="flex justify-center text-lg font-thin w-full">
                Datos Clínicos
              </span>
              <div className="w-full flex justify-between">
                <label className="w-36">Enf. Hematológicas</label>
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
                <label className="w-36 text-center">Sufre Convulsiones</label>
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
                <label className="w-36 text-center">Enf. Neurológicas</label>
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
                <label className="w-36 text-center">Enf. Circulatorias</label>
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
                <label className="w-36 text-center">Enf. Pulmonares</label>
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
                <label className="w-36 text-center">Prob. de presión</label>
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
                <label className="w-36 text-center">Enf. Endocrinas</label>
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
                <label className="w-36 text-center">Enf. Digestivas</label>
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
                <label className="w-36 text-center">Prob.en la piel</label>
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
                <label className="w-36 text-center">Enf. Cardiacas</label>
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
                <label className="w-36 text-center">Enf. Renales</label>
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
                <label className="w-36 text-center">Marcapasos</label>
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
              <div className="w-full flex justify-between">
                <label className="w-36 text-center">Alergias</label>
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
              <div className="w-full flex justify-between">
                <label className="w-36 text-center">Alcohol</label>
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
              <div className="w-full flex justify-between">
                <label className="w-36 text-center">Drogas</label>
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
              <div className="w-full flex justify-between">
                <label className="w-36 text-center">Tabaco</label>
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
            <div className="flex flex-col flex-wrap md:w-3/4 justify-around items-center">
              <span className="flex justify-center text-lg font-thin w-full">Medidad corporales</span>
              <div className="flex flex-col md:flex-row md:justify-around w-full items-center">
                <label className="w-24 text-center">Cintura</label>
                <input
                  onChange={handleChange}
                  name="cinturaInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="cinturaMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="cinturaFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">Pecho</label>
                <input
                  onChange={handleChange}
                  name="pechoInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="pechoMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="pechoFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">Cadera</label>
                <input
                  onChange={handleChange}
                  name="caderaInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="caderaMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="caderaFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">Abdomen</label>
                <input
                  onChange={handleChange}
                  name="abdomenInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="abdomenMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="abdomenFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">B. Izquierdo</label>
                <input
                  onChange={handleChange}
                  name="biInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="biMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="biFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">B. Derecho</label>
                <input
                  onChange={handleChange}
                  name="bdInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="bdMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="bdFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">M. Izquierdo</label>
                <input
                  onChange={handleChange}
                  name="miInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="miMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="miFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">M. Derecho</label>
                <input
                  onChange={handleChange}
                  name="mdInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="mdMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="mdFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">P. Izquierda</label>
                <input
                  onChange={handleChange}
                  name="piInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="piMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="piFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center">
                <label className="w-24 text-center">P. Derecha</label>
                <input
                  onChange={handleChange}
                  name="pdInicio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Inicio tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="pdMedio"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Mitad tratamiento"
                />
                <input
                  onChange={handleChange}
                  name="pdFin"
                  className="border-b-2 border-ferra border-x-2 border-collapse w-44 text-ferra placeholder:text-ferra placeholder:text-center"
                  type="text" placeholder="Final tratamiento"
                />
              </div>
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

export default FormCorporal;
