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
    <section className='flex flex-col  h-screen  items-center relative'>
      <motion.div
        className='heading h-[50%]  pb-4 flex flex-col justify-center sm:justify-end items-center gap-4  z-10'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <motion.h1
          className='text-4xl font-bold sm:text-[84px] leading-normal  text-app_white'
          variants={itemVariants}
          transition={{ duration: 1 }}
        >
          Arc 911
        </motion.h1>
        <motion.h6
          className='text-app_white font-medium capitalize text-xl sm:text-3xl'
          variants={itemVariants}
          transition={{ duration: 1 }}
        >
          A creativity and Innovation Studio
        </motion.h6>
        <motion.h6
          className='text-app_white font-light mt-8 sm:mt-8 text-sm sm:text-2xl'
          variants={itemVariants}
          transition={{ duration: 2 }}
        >
          Team | Talent | Task outsourcing for the AEC industry
        </motion.h6>
      </motion.div>
      <div className='absolute top-[60%] left-[15%] sm:left-[10%]'>
        <AppButton title={"Get Quote"} />
      </div>

      <div className='hidden  sm:flex w-full h-[50%]'>
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

      <div className='sm:hidden flex h-[500.83px]'>
        <svg width='100%' height='100%' viewBox='0 0 430 376' fill='none'>
          <motion.path
            d='M0 47.2642C113.539 163.489 66.3776 437.467 179 362.676C279.746 295.771 293.807 -92.7027 430 21.4409'
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
