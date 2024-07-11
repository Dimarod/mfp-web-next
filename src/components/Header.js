import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import mfp from '../../public/logomfp.png';
import aomakeup from '../../public/logoangieospino.png'
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-transparent w-full h-11">
        <Dropdown />
        <div className="hidden md:flex justify-around items-center h-fit">
          <div className="w-1/3 flex justify-around items-center p-2">
            <Image src={mfp} alt="logo my footprint" title="logo my footprint" className="w-24" />
            <Image src={aomakeup} alt="logo maquillajes Angie Ospino" title="logo maquillajes Angie Ospino" className="w-24" />
          </div>
          <nav className="p-2 flex justify-around w-2/3 items-center mt-2">
            <Link
              href="/"
              className="mr-4 text-ferra hover:text-mulberry font-bold text-xl"
            >
              Inicio
            </Link>
            <a
              href="treatments"
              className="mr-4 text-ferra hover:text-mulberry font-bold text-xl"
            >
              Tratamientos
            </a>
            <a
              href="team"
              className="mr-4 text-ferra hover:text-mulberry font-bold text-xl"
            >
              Equipo
            </a>
            <a
              href="consultar"
              className="mr-4 text-ferra hover:text-mulberry font-bold text-xl"
            >
              Consulta tu cita
            </a>
            <a
              href="typeAppoinment"
              className="mr-4 text-ferra hover:text-mulberry font-bold text-xl"
            >
              ¡Agéndate!
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
