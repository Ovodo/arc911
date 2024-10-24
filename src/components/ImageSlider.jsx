import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconCircleArrowLeft } from "@tabler/icons-react";

const ImageSlider = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const next = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const imageVariants = {
    enter: { opacity: 0, x: 100, scale: 0.95, filter: "blur(8px)" }, // Initial state for new image
    center: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }, // Image in center view
    exit: { opacity: 0, x: -100, scale: 0.95, filter: "blur(8px)" }, // Image exiting
  };

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className='flex relative  items-center w-full justify-between '>
      <button
        onClick={previous}
        className='z-10 hidden hover:scale-125 duration-200 sm:flex'
      >
        <IconCircleArrowLeft stroke={1.5} />
      </button>
      <div className='relative image-slider pl-[2vw]  overflow-x-scroll  hidden  h-max  justify-start items-center'>
        {images.map((item) => {
          return (
            <img
              key={item}
              src={`/images/${item}.jpg`}
              alt={images[activeImage]}
              className='object-cover mr-20  text-center leading-[354px]  h-[400px] rounded-lg shadow-lg'
            />
          );
        })}
      </div>
      <div className='relative flex w-full h-[354px] justify-center items-center'>
        <AnimatePresence mode='wait'>
          <motion.img
            key={activeImage}
            src={`/images/${images[activeImage]}.jpg`}
            alt={images[activeImage]}
            width={520}
            height={354}
            className='sm:object-cover object-contain sm:w-[520px] w-[350px] text-center leading-[354px] h-[354px] rounded-lg shadow-lg'
            variants={imageVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.5 }}
            // transition={{
            //   x: { type: "spring", stiffness: 300, damping: 30 },
            //   opacity: { duration: 0.5 },
            //   scale: { duration: 0.7 },
            //   filter: { duration: 0.5 },
            // }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1.5}
            onDragEnd={(event, info) => {
              const swipeConfidenceThreshold = 10000;
              const swipe = swipePower(info.offset.x, info.velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                next();
              } else if (swipe > swipeConfidenceThreshold) {
                previous();
              }
            }}
          />
        </AnimatePresence>
      </div>
      <button
        className='rotate-180 z-10 hidden hover:scale-125 duration-200 sm:flex'
        onClick={next}
      >
        <IconCircleArrowLeft stroke={1.5} />
      </button>
      {/* Navigation Dots */}
      <div className='items-center hidden sm:flex justify-center absolute left-1/2 -translate-x-1/2 -bottom-[7%] z-10'>
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`mx-[6px] rounded-full ${
              activeImage === index
                ? "bg-app_white w-[10px] h-[10px]"
                : "bg-app_white/50 w-2 h-2"
            }`}
            initial={{ scale: 1 }}
            animate={{
              scale: activeImage === index ? 1.2 : 1,
              opacity: activeImage === index ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
