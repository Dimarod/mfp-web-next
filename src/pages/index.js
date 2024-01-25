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

  const handleChange = ({target: {name, value}}) => {
    console.log(name, value);
    setSearch({...search, [name]: value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({ pathname: `/personalResult`, query: search});
  };

  return (
    <Layout>
      <div className="">
        <h1 className="text-center text-ferra font-bold text-3xl md:text-5xl">
          Consulta tu próxima cita
        </h1>
        {/* Agregar a rutas el action del form */}
        <form
          className="p-10 flex flex-col"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
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
          <div className="flex w-full justify-around items-center text-ferra">
            <label className="text-sm">Sede en la que agendó su cita</label>
            <input
              type="radio"
              value="citasBaq"
              onChange={handleChange}
              name="sede"
            />
            <span>Barranquilla</span>
            <input
              type="radio"
              value="citas"
              onChange={handleChange}
              name="sede"
            />
            <span>Soledad</span>
          </div>
          <button
            type="submit"
            className="rounded-lg m-auto text-white mt-2 block bg-ferra p-3 "
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
