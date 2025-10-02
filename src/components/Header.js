import React from "react";
import Image from "next/image";
// import Dropdown from "./Dropdown";
import Link from "next/link";
import { playfairDisplay } from "@/ui/fonts";

const Header = () => {
  const toggleMenu = (e) => {
    const navLinks = document.querySelector(".nav-links");
    const rotation = document.querySelector(".rotation");
    if (e.nativeEvent.srcElement.attributes.src.value === "/menu.svg") {
      e.nativeEvent.srcElement.attributes.src.value = "/close.svg";
      rotation.classList.remove(
        "transform",
        "hover:-rotate-180",
        "transition",
        "duration-700"
      );
      rotation.classList.add(
        "transform",
        "hover:rotate-180",
        "transition",
        "duration-700"
      );
    } else {
      e.nativeEvent.srcElement.attributes.src.value = "/menu.svg";
      rotation.classList.remove(
        "transform",
        "hover:rotate-180",
        "transition",
        "duration-700"
      );
      rotation.classList.add(
        "transform",
        "hover:-rotate-180",
        "transition",
        "duration-700"
      );
    }
    //   e.nativeEvent.srcElement.attributes.src.value =
    // e.nativeEvent.srcElement.attributes.src.value === "/menu.svg"
    //   ? "/close.svg"
    //   : "/menu.svg"

    navLinks.classList.toggle("top-[3%]");
  };
  return (
    <>
      <header className="bg-mainbg z-30">
        <div className="flex items-center justify-around px-3 bg-buttons min-h-9 text-mainbg">
          <h4 className={`${playfairDisplay.className} antialiased text-sm`}>
            Cumplimos tu sueño
          </h4>
          <h4 className={`${playfairDisplay.className} antialiased text-sm`}>
            Dejando nuestra huella
          </h4>
        </div>
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Link href="/">
              <Image
                className="w-16 py-2"
                src="/logo.svg"
                alt="main-logo"
                width={1033}
                height={795}
                priority
              />
            </Link>
          </div>
          <div className="nav-links md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 bg-mainbg md:bg-transparent transition-all duration-700">
            <ul className="flex flex-col md:flex-row md:items-center gap-14 md:gap-[4vw]">
              <li>
                <Link
                  className="text-maintxt hover:text-gray-500"
                  href="/treatments"
                >
                  Tratamientos
                </Link>
              </li>
              <li>
                <Link className="text-maintxt hover:text-gray-500" href="/team">
                  Equipo
                </Link>
              </li>
              <li>
                <Link
                  className="text-maintxt hover:text-gray-500"
                  href="/personalResult"
                >
                  Próxima cita
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-buttons text-white px-5 py-2 rounded-full">
              <Link href="/sede">¡Agéndate!</Link>
            </button>
            <Image
              onClick={toggleMenu}
              className="rotation w-8 md:hidden "
              src="/menu.svg"
              alt="menu"
              width={50}
              height={50}
            />
          </div>
        </nav>
      </header>
      {/* <header className="bg-transparent w-full h-11">
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
      </header> */}
    </>
  );
};

export default Header;
