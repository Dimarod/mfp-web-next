// components/Timeline.js
import React from "react";
import TimelineEvents from "./TimelineEvents";

const Timeline = ({ events }) => {
  return (
    <>
      <hr className="w-full border-ferra mt-2" />
      <div className="flex flex-col md:flex-row absolute justify-around w-full h-fit">
        {events.map((event, index) => (
          <TimelineEvents key={index} {...event}/>
        ))}
      </div>
    </>
  );
};

export default Timeline;
