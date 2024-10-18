import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppButton from "./AppButton";

const Hero = () => {
  // Define animation variants for staggered fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        staggerChildren: 1, // Stagger each child by 0.3s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id='Home'
      className='justify-between sm:justify-start py-[5vh] sm:py-0 flex flex-col h-[70vh]  sm:h-screen  items-center relative'
    >
      <motion.div
        className='heading mt-[10%] sm:py-[2%]  sm:mt-[0%] h-[343px] sm:h-[50%]  pb-4 flex flex-col justify-center sm:justify-end items-center gap-4  z-10'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <motion.h1
          className=' font-bold text-[8vw] leading-normal  text-app_white'
          variants={itemVariants}
          transition={{ duration: 1 }}
        >
          Arc 911
        </motion.h1>
        <motion.h6
          className='text-app_white font-medium capitalize text-xl sm:text-[2.5vw]'
          variants={itemVariants}
          transition={{ duration: 1 }}
        >
          A creativity and Innovation Studio
        </motion.h6>
      </motion.div>
      <motion.h6
        className='hidden sm:flex text-app_white absolute bottom-[10%] right-[10%] font-light mt-8 sm:mt-8 text-sm sm:text-[1vw]'
        variants={itemVariants}
        transition={{ duration: 2 }}
      >
        Team | Talent | Task outsourcing for the AEC industry
      </motion.h6>
      <motion.h6
        className='text-app_white flex sm:hidden absolute bottom-[10%] right-[10%] font-light  text-xs'
        variants={itemVariants}
        transition={{ duration: 2 }}
      >
        Team | Talent | Outsourcing
      </motion.h6>
      <div className='absolute top-[75%] sm:top-[60%] left-[10%]'>
        <AppButton title={"Get Quote"} />
      </div>

      <div className='hidden  sm:flex w-full sm:h-[50%]'>
        <svg
          width='100%'
          height='100%'
          viewBox={`0 0 1440 331`}
          preserveAspectRatio='none'
          fill='none'
        >
          <motion.path
            d='M0.5 97.3875C213.5 385.477 475.219 388.792 686.5 203.404C875.5 37.5666 1249.5 -129.96 1505 152.971'
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
    </section>
  );
};

export default Hero;
