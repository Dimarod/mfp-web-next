// components/Card.js
import React from 'react';
import Image from 'next/image';

const Card = ({ imageUrl, description }) => {
  return (
    <div className="relative w-60 overflow-hidden rounded-lg transition-transform transform scale-100 hover:scale-110 cursor-pointer">
      {/* Personaliza la URL de la imagen según tus necesidades */}
      <Image
        className="object-cover h-96 opacity-60 brightness-80" // Puedes ajustar la altura y los filtros de imagen según sea necesario
        src={imageUrl}
        alt={description}
        width={600}
        height={410}
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Personaliza el contenido del título y la descripción */}
        <div className="text-white text-center">
          <h3 className="text-2xl font-bold mb-2">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
