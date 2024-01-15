/* eslint-disable @next/next/no-img-element */
// components/TimelineEvent.js
import React, { useState } from "react";

const TimelineEvent = ({ date, title, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-12 relative ${isHovered ? "z-10" : "z-1"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-ferra w-4 h-4 rounded-full text-gray-700 cursor-pointer ${isHovered ? "font-bold" : ""} backdrop-blur-md`}/>
      <div
        className={`card w-44 h-fit flex flex-col items-center ${
          isHovered ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-300`}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <img width={32} height={32} src={imageUrl} alt={title} title={title} className="w-24 mx-auto rounded-md mb-2"/>
        <span className="text-xs text-right text-gray-200">{date}</span>
      </div>
    </div>
  );
};

export default TimelineEvent;
