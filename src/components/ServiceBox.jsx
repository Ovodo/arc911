import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SubHeader from "./SubHeader";
import ImageSlider from "./ImageSlider";

const images = [
  "build1",
  "build2",
  "build3",
  "house",
  // Additional images can be added here
];

const ServiceBox = ({ heading, paragraph, side }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !true, threshold: 0.2 }); // Trigger when 20% of the component is visible

  return (
    <motion.div
      ref={ref}
      className={`${
        side == "left" && "sm:flex-row-reverse"
      } flex px-[2vw] justify-end gap-[10%] overflow-hidden pt-[20%] sm:pt-0 flex-col-reverse mb-[5vh] sm:mb-0 items-center h-[75vh] sm:h-screen sm:flex-row`}
      initial={{ opacity: 0, y: 50 }} // Initial state: off-screen and faded
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing effect
    >
      <motion.div
        className='sm:flex-1 '
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Delay to sync with overall animation
      >
        <ImageSlider images={images} />
      </motion.div>
      <motion.div
        className={`sm:flex-1 items-center sm:mb-0 ${
          side == "left" ? "sm:items-start" : "sm:items-end"
        } h-max flex flex-col`}
        initial={{ opacity: 0, x: side === "left" ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // Delay for staggered animation
      >
        <SubHeader side={side} title={heading} />
        <p
          className={`text-sm ${
            side == "left"
              ? "sm:text-left self-start"
              : "sm:text-right self-end"
          } mt-[2%] text-center sm:text-xl sm:w-[75%]`}
        >
          {paragraph}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ServiceBox;
