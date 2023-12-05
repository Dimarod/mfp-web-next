import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="">
        <h1 className="text-center text-ferra font-bold text-3xl md:text-5xl">Consulta tu pŕoxima cita</h1>
        {/* Agregar a rutas el action del form */}
        <form className="p-10" method="POST" action="/srchpersonal">
          <label className="text-ferra font-bold" id="name">Nombre del paciente:</label>
          <input
            className="border-2 md:ml-2 border-ferra text-ferra rounded-lg"
            type="text"
            id="name"
            name="name"
          />
          <button type="submit" className="rounded-lg m-auto text-white mt-2 block bg-ferra p-3 ">
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
