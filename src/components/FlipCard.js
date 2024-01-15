import React, { useState } from "react";
import Image from "next/image";

const FlipCard = ({ imageUrl, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="group w-64 h-96 py-3 [perspective:1000px ]">
        <div className="relative h-full w-full rounded-lg shadow-lg [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500">
            <div className="absolute inset-0 w-full">
                <Image className="h-full w-full object-cover rounded-lg shadow-lg shadow-black/40 " src={imageUrl} alt={title} title={title} />
            </div>
            <div className="absolute inset-0 w-full h-full rounded-md bg-black/80 px-12 text-ferra text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full w-full items-center justify-center">
                    <h3 className="text-xl font-bold text-ferra">{title}</h3>
                    <p className="text-ferra">{description}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
