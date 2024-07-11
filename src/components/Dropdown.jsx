'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import menu from '../../public/menu-outline.png'
import Link from 'next/link';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden inline-block bg-transparent text-right w-full h-14">
      <div className='pt-3 pr-2'>
        {/* Botón ahora en la parte izquierda */}
        <button
          type="button"
          className="inline-flex text-ferra justify-center items-center p-2 hover:text-gray-500 focus:outline-none focus:ring focus:border-blue-300"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {/* Cambia el icono aquí */}
          {/* Icono de flecha hacia abajo */}
          <Image src={menu} alt='menu' title='menu' className='w-5'/>
        </button>
      </div>

      {/* Contenido del menú desplegable */}
      {isOpen && (
        <div className="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-red-50 text-center">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Opciones del menú */}
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-cancan hover:bg-gray-100"
              role="menuitem"
            >
              Inicio
            </Link>
            <Link
              href="/treatments"
              className="block px-4 py-2 text-sm text-cancan hover:bg-gray-100"
              role="menuitem"
            >
              Tratamientos
            </Link>
            <Link
              href="/team"
              className="block px-4 py-2 text-sm text-cancan hover:bg-gray-100"
              role="menuitem"
            >
              Equipo
            </Link>
            <Link
              href="/consultar"
              className="block px-4 py-2 text-sm text-cancan hover:bg-gray-100"
              role="menuitem"
            >
              Consulta cita
            </Link>
            <Link
              href="/typeAppoinment"
              className="block px-4 py-2 text-sm text-cancan hover:bg-gray-100"
              role="menuitem"
            >
              Agenda
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;