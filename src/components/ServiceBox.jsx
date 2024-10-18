import React from "react";
import SubHeader from "./SubHeader";
import ImageSlider from "./ImageSlider";
const images = [
  "build1",
  "build2",
  "build3",
  "house",
  // "house1",
  // "house2",
  // "house3",
  // "house4",
  // "int1",
  // "int2",
  // "int3",
  // "int4",
];

const ServiceBox = ({ heading, paragraph, side }) => {
  return (
    <div
      style={{ scrollSnapAlign: "center" }}
      className={`${
        side == "left" && "sm:flex-row-reverse"
      } flex  justify-end gap-[10%] pt-[20%] sm:pt-0 flex-col-reverse items-center h-[75vh] sm:h-screen sm:flex-row`}
    >
      <div className=' sm:flex-1 '>
        <ImageSlider images={images} />
      </div>
      <div
        className={`sm:flex-1   items-center  sm:mb-0 ${
          side == "left" ? "sm:items-start" : "sm:items-end"
        }  h-max flex flex-col`}
      >
        <SubHeader side={side} title={heading} />
        <p
          className={`text-sm   ${
            side == "left"
              ? "sm:text-left self-start"
              : "sm:text-right self-end"
          } mt-[2%] text-center sm:text-xl sm:w-[75%]  `}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
