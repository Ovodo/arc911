import { useEffect, useRef, useState } from "react";
import { inView, motion, useInView } from "framer-motion";
import AppButton from "./AppButton";
import Marquee from "react-fast-marquee";

const heroTextStyle =
  "hover:text-app_white duration-500 text-app_brown hover:bg-transparent bg-app_white rounded-lg sm:text-app_white duration-500 sm:hover:text-app_brown sm:bg-transparent sm:hover:bg-app_white px-8 ml-2 py-5 font-semibold cursor-pointer text-[3vw] sm:text-[2vw]";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when it enters the view
  // Define animation variants for staggered fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, x: 800 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        staggerChildren: 1, // Stagger each child by 0.3s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 800 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='w-full'>
      <div
        ref={ref}
        id='Home'
        className='justify-center w-full sm:justify-start py-[5vh] sm:py-0 flex flex-col h-[78vh] sm:h-[76vh] mt-[8vh] sm:mt-[12vh]  items-center relative'
      >
        <motion.div
          className='absolute  left-0 z-20 w-[50%] sm:w-[35%] h-full gap-8 flex flex-col justify-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.h6
            className={heroTextStyle}
            variants={itemVariants}
            transition={{ duration: 2 }}
            style={{ width: "max-content" }}
          >
            Team
          </motion.h6>
          <motion.h6
            className={heroTextStyle}
            variants={itemVariants}
            transition={{ duration: 2 }}
            style={{ width: "max-content" }}
          >
            Talents
          </motion.h6>
          <motion.h6
            className={heroTextStyle}
            variants={itemVariants}
            transition={{ duration: 2 }}
          >
            Task outsourcing for the AEC industry
          </motion.h6>
        </motion.div>

        <motion.h6
          className='text-app_blue flex sm:hidden absolute bottom-[10%] right-[10%] font-light  text-xs'
          animate={isInView ? { opacity: [0, 1] } : { opacity: 0 }}
          transition={{ duration: 2 }}
        >
          Team | Talent | Outsourcing
        </motion.h6>
        {/* <div className='absolute top-[75%] sm:top-[60%] left-[10%]'>
      <AppButton title={"Get Quote"} />
    </div> */}

        <div className='hidden z-10  w-full sm:h-[50%]'>
          <svg
            width='100%'
            height='100%'
            viewBox={`0 0 1440 331`}
            preserveAspectRatio='none'
            fill='none'
          >
            <motion.path
              d='M0.5 97.3875C213.5 385.477 475.219 388.792 686.5 203.404C875.5 37.5666 1249.5 -129.96 1505 152.971'
              stroke='#01253D'
              initial={{
                opacity: isInView ? 0 : 1,
                pathLength: isInView ? 0 : 1,
                strokeWidth: 0,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                pathLength: isInView ? 1 : 0,
                strokeWidth: 1,
              }}
              transition={{ delay: 1.5, duration: 3 }}
            />
          </svg>
        </div>

        <div className='sm:hidden  flex h-[138px] '>
          <svg width='100%' height='100%' viewBox='0 0 430 140' fill='none'>
            <motion.path
              d='M1 84.7228C37.7096 122.169 145.237 185.444 205.239 84.7228C269.5 -23.1498 367.929 -30.6032 429 84.7228'
              stroke='#DFF3E4'
              initial={{
                opacity: 0,
                pathLength: 0,
                strokeWidth: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
                strokeWidth: 0.5,
              }}
              transition={{ delay: 1.5, duration: 3 }}
            />
          </svg>
        </div>
        <img
          className='w-full h-[78vh] sm:h-[76vh] object-cover my-auto  absolute'
          src='/images/fx2.jpg'
        />
      </div>
      <Marquee className=''>
        <motion.h6
          className='text-app_white font-medium flex items-center h-[8vh]  sm:h-[12vh] capitalize text-[4vw] sm:text-[1.5vw]'
          variants={itemVariants}
          transition={{ duration: 1 }}
        >
          A creativity and Innovation Studio
        </motion.h6>
      </Marquee>
    </div>
  );
};

export default Hero;
