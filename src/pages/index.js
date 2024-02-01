/* eslint-disable @next/next/no-html-link-for-pages */
import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [search, setSearch] = useState({
    name: "",
    sede: "",
  });
  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setSearch({ ...search, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({ pathname: `/personalResult`, query: search });
  };

  return (
    <Layout>
      <div className="-mt-48 md:mt-0">
        <h1 className="text-center text-ferra font-bold text-3xl md:text-5xl">
          Consulta tu próxima cita
        </h1>
        {/* Agregar a rutas el action del form */}
        <form
          className="p-10 flex flex-col items-center"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-ferra font-bold" id="name">
              Nombre del paciente:
            </label>
            <input
              className="border-2 md:ml-2 border-ferra text-ferra rounded-lg"
              type="text"
              id="name"
              name="name"
              value={search.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full justify-around mb-3 items-center text-ferra">
            <label className="md:text-lg mt-3">Sede en la que agendó su cita</label>
            <div className="w-full flex justify-around">
              <span>Barranquilla</span>
              <input
                type="radio"
                value="citasBaq"
                onChange={handleChange}
                name="sede"
              />
              <span>Soledad</span>
              <input
                type="radio"
                value="citas"
                onChange={handleChange}
                name="sede"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mb-3 rounded-lg m-auto text-white mt-2 block bg-ferra p-3 "
          >
            Buscar
          </button>
          <a href="/sede" className="text-xs text-ferra underline">
            ¿No tienes una cita? Agendate
          </a>
        </form>
      </div>
    </Layout>
  );
}
