import { useState } from "react";
import { merriweather } from "@/ui/fonts";

export default function FormCorporal({ onSubmit }) {
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
          Ficha Clínica Corporal
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
            <label>Enf. Cardiacas:</label>
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
            <label>Enf. Circulatorias:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfCircu"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfCircu"
                onChange={handleChange}
              />
            </div>
            <label>Enf. Digestivas:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="enfDige"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="enfDige"
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
            <label>Prob Presión:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="presion"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="presion"
                onChange={handleChange}
              />
            </div>
            <label>Alergias:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="alergias"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="alergias"
                onChange={handleChange}
              />
            </div>
            <label>Prob Piel:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="probPiel"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="probPiel"
                onChange={handleChange}
              />
            </div>
            <label>Convulsiones:</label>
            <div className="w-full flex">
              <span className="w-[50%] text-center">Sí</span>
              <input
                type="radio"
                value="Sí"
                name="convulsiones"
                onChange={handleChange}
              />
              <span className="w-[50%] text-center">No</span>
              <input
                type="radio"
                value="No"
                name="convulsiones"
                onChange={handleChange}
              />
            </div>
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
          </div>
          <h4 className="text-lg my-7 text-center">Anatomía Corporal</h4>
          <div className="border-y-2 border-maintxt py-3 flex items-center justify-between">
            <div className="w-[30%] flex items-center justify-around">
              <label>Edad:</label>
              <input
                name="edad"
                onChange={handleChange}
                value={formData.edad}
                type="number"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <div className="w-[30%] flex items-center justify-around">
              <label>Peso:</label>
              <input
                name="peso"
                onChange={handleChange}
                type="number"
                value={formData.peso}
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <div className="w-[30%] flex items-center justify-around">
              <label>Estatura:</label>
              <input
                name="estatura"
                onChange={handleChange}
                type="number"
                value={formData.estatura}
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
          </div>
          <h4 className="text-lg my-7 text-center">Medidas Corporales</h4>
          <div className="border-y-2 border-maintxt py-3 flex flex-col justify-between">
            <label>Cintura:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniCintura"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medCintura"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finCintura"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Pecho:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniPecho"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medPecho"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finPecho"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Cadera:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniCadera"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medCadera"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finCadera"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Abdomen:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniAbdomen"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medAbdomen"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finAbdomen"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Brazo Izquierdo:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniBIzquierdo"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medBIzquierdo"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finBIzquierdo"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Brazo Derecho:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniBDerecho"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medBDerecho"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finBDerecho"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Muslo Izquierdo:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniMIzquierdo"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medMIzquierdo"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finMIzquierdo"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Muslo Derecho:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniMDerecho"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medMDerecho"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finMDerecho"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Pantorrilla Izquierda:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniPIzquierda"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medPIzquierda"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finPIzquierda"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
            </div>
            <label>Pantorrilla Derecha:</label>
            <div className="flex items-center justify-around">
              <input
                name="iniPDerecha"
                onChange={handleChange}
                type="number"
                placeholder="Inicio Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="medPDerecha"
                onChange={handleChange}
                type="number"
                placeholder="Mitad Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
              <input
                name="finPDerecha"
                onChange={handleChange}
                type="number"
                placeholder="Fin Tratamiento"
                className="border-b-2 border-maintxt border-x-2 rounded-lg"
              />
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
