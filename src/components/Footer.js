import React from "react";
import Image from "next/image";
import wapp from "/public/wapp.png";
import map from "/public/map.png";
import ig from "/public/ig.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-12 flex justify-evenly">
        <a href="https://www.google.com/maps/dir/10.9227326,-74.7922199/myfootprintsas/@10.9265089,-74.8051589,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8ef42cde9e537397:0xba82a1ed032d642f!2m2!1d-74.7751452!2d10.9287481?entry=ttu" target="_blank">
          <Image
            className="w-6 h-6"
            src={map}
            alt="ubicacion"
            title="¿Dónde estamos?"
          />
        </a>
        <a href="tel:3156041021">
          <Image
            className="w-6 h-6"
            src={wapp}
            alt="whatsapp"
            title="Whatsapp"
          />
        </a>
        <a href="https://www.instagram.com/myfootprintsas/?hl=es-la" target="_blank">
          <Image
            className="w-6 h-6"
            src={ig}
            alt="Instagram"
            title="Instagram"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
