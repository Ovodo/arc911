import React from "react";
import { styles } from "../constants/styles";
import { motion } from "framer-motion";

const SubHeader = ({ title }) => {
  return (
    <div className='w-max h-max'>
      <h2 className={styles.subHeader}>{title}</h2>
      <div className='flex  w-full justify-center items-center'>
        <div className='w-1 sm:w-2 h-1 sm:h-2  rounded-full bg-app_yellow' />
        <motion.div
          animate={{ width: ["0%", "100%"], opacity: [0, 100] }}
          transition={{ duration: 1.5 }}
          className='h-[0.5px] sm:h-[2px] bg-app_yellow'
        />
        <div className='w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-app_yellow' />
      </div>
    </div>
  );
};

export default SubHeader;
