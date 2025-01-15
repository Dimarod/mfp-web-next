/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import Image from "next/image";
import { motion } from "framer-motion";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clicPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <>
      <div className="grid place-items-center grid-cols-1 w-32 max-w-3xl rounded-lg overflow-y-hidden">
        <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-lg bg-green-200">
          {images.map((pic, idx) => (
            <div
              className={
                idx === activeImage
                  ? `block w-full h-[20vh] object-cover transition-all duration-500 ease-in-out`
                  : "hidden"
              }
              key={idx}
            >
              <motion.div
                initial={{
                  opacity: idx === activeImage ? 0 : 0.5,
                  scale: idx === activeImage ? 0.5 : 0.3,
                }}
                animate={{
                  opacity: idx === activeImage ? 1 : 0.5,
                  scale: idx === activeImage ? 1 : 0.3,
                }}
                transition={{
                  ease: "linear",
                  duration: 1.5,
                  x: { dureation: 1 },
                }}
                className="w-full"
              >
                <Image
                  src={pic.src}
                  alt={pic.alt}
                  width={1216}
                  height={1600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
