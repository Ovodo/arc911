import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ImageSlider = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const next = () => {
    if (activeImage == images.length - 1) {
      setActiveImage(0);
      return;
    }

    setActiveImage((prev) => prev + 1);
  };
  const previous = () => {
    if (activeImage == 0) {
      setActiveImage(images.length - 1);
      return;
    }

    setActiveImage((prev) => prev - 1);
  };

  return (
    <div className='flex relative items-center justify-around'>
      <button onClick={previous}>
        <img
          src='/icons/arrow.svg'
          alt='arrow'
          className='hover:scale-110 duration-100 cursor-pointer active:scale-90'
        />
      </button>
      <AnimatePresence mode='wait'>
        <motion.img
          key={activeImage}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: +100 }}
          onPanEnd={(event, info) => {
            if (info.offset.x < -50) {
              next(); // Swipe left
            } else if (info.offset.x > 50) {
              previous(); // Swipe right
            }
          }}
          transition={{ duration: 0.5 }} // Animation speed
          src={`/images/${images[activeImage]}.jpg`}
          alt={images[activeImage]}
          width={520}
          height={354}
          className='object-contain h-[354px]'
          // style={{ objectFit: "cover" }}
        />
      </AnimatePresence>
      <button onClick={next}>
        <img
          src='/icons/arrow.svg'
          alt='arrow'
          className='rotate-180 hover:scale-110 duration-100 cursor-pointer active:scale-90'
        />
      </button>
      <div className='flex items-center absolute self-center mx-auto -bottom-[7%]'>
        {Array(images.length)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index.toString()}
                className={` mx-1 ${
                  activeImage == index
                    ? "bg-app_white blur-[0px] w-[10px] h-[10px]"
                    : "bg-app_white/80 w-2 h-2"
                } rounded-full duration-200 `}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ImageSlider;
