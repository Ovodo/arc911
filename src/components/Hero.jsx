import { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import AppButton from "./AppButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 800 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const heroTextStyle =
  "hover:text-app_white duration-500 text-app_brown hover:bg-transparent bg-app_white rounded-lg sm:text-app_white sm:hover:text-app_brown sm:bg-transparent sm:hover:bg-app_white px-8 ml-2 py-5 font-semibold cursor-pointer text-[3vw] sm:text-[2vw]";
const baseStyle =
  "bg-transparent text-app_white rounded-lg px-3 sm:px-6 ml-1 sm:ml-4 py-3 font-semibold cursor-pointer text-[28px] leading-normal  sm:text-[2vw]";
const hoverEffect = "hover:text-app_brown  hover:bg-app_white duration-500";
const transitionStyle = "duration-500";
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hover, setHover] = useState("");

  return (
    <div className='w-full'>
      <div
        id='Home'
        className='justify-center w-full sm:justify-start py-[5vh] sm:py-0 flex mt-[8vh] sm:mt-[12vh] flex-col h-[78vh] sm:h-[76vh]   items-center relative'
      >
        <motion.div
          className='absolute left-0  z-20 w-max sm:w-[35%] h-full sm:gap-8 flex flex-col justify-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.a
            href='#team'
            className={`${baseStyle} ${hover}`}
            variants={itemVariants}
            style={{ width: "max-content" }}
          >
            Team
          </motion.a>
          <motion.a
            href='#Contact us'
            className={`${baseStyle} ${hover}`}
            variants={itemVariants}
            style={{ width: "max-content" }}
          >
            Talents
          </motion.a>
          <motion.a
            href='#Contact us'
            className={`${baseStyle} hidden sm:flex ${hover}`}
            variants={itemVariants}
          >
            Task outsourcing for the AEC industry
          </motion.a>
          <motion.a
            href='#Contact us'
            className={`${baseStyle} ${hover} whitespace-nowrap sm:hidden`}
            variants={itemVariants}
          >
            Task outsourcing
          </motion.a>
          <motion.div
            variants={itemVariants}
            onAnimationComplete={() => {
              setHover(hoverEffect);
            }}
            className='absolute bottom-4 left-2 sm:left-5'
          >
            <AppButton href={"#Contact us"} title={"Get Quote"} />
          </motion.div>
        </motion.div>

        <img
          className='w-full h-[78vh] sm:h-[76vh] object-cover my-auto absolute'
          src='/images/fx2.jpg'
        />
      </div>

      <Marquee className=''>
        <h6 className='text-app_white font-medium flex items-center h-[8vh] sm:h-[12vh] capitalize text-[4vw] sm:text-[1.5vw]'>
          A creative and Innovtive Studio
        </h6>
      </Marquee>
    </div>
  );
};

export default Hero;
