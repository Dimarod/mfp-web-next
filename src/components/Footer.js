import React from "react";
import Image from "next/image";
import wapp from '/public/wapp.png'
import map from '/public/map.png';
import ig from '/public/ig.png'

const Footer = () => {
  return (
    <>
      <div className="w-full h-12 flex justify-evenly">
        <Image className="w-6 h-6" src={map} alt="ubicacion" title="¿Dónde estamos?" />
        <Image className="w-6 h-6" src={wapp} alt="whatsapp" title="Whatsapp" />
        <Image className="w-6 h-6" src={ig} alt="Instagram" title="Instagram" />
      </div>
    </>
  );
};

export default Footer;
