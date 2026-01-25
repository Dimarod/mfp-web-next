/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { images } from "@/lib/images"; // Asegúrate que esta ruta sea correcta
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 4000); // Subí un poco el tiempo a 4s para apreciar mejor las fotos
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    // ELIMINADO: w-32, max-w-3xl, bg-green-200, h-[20vh]
    // AÑADIDO: w-full h-full relative (para que llene el contenedor padre)
    <div className="relative w-full h-full overflow-hidden rounded-2xl group">
      
      {/* Mapeamos las imágenes */}
      <AnimatePresence mode="wait">
        {images.map((pic, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              idx === activeImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Solo renderizamos la imagen si es la activa o la anterior para rendimiento, 
                pero con CSS opacity manejamos la transición visual */}
            <Image
              src={pic.src}
              alt={pic.alt || "Tratamiento estético"}
              fill // 'fill' sustituye a width/height y hace que llene el contenedor
              priority={idx === 0} // Prioridad solo a la primera para cargar rápido
              className="object-cover object-center" // object-cover es CLAVE para que no se deforme
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Opcional: Un gradiente suave abajo para que se vea más pro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </AnimatePresence>

      {/* Indicadores (Puntitos) Opcionales - Ayudan a saber que es un slider */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeImage ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;