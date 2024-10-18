import React from "react";
import { styles } from "../constants/styles";
import { motion } from "framer-motion";

const SubHeader = ({ title, side }) => {
  return (
    <div className='w-max bor h-max'>
      <h2 className={styles.subHeader}>{title}</h2>
      <div className='flex  w-full flex-col justify-center items-center'>
        {/* <div className='w-1 sm:w-2 h-1 sm:h-2   bg-app_yellow' /> */}
        <motion.div
          animate={{ width: ["0%", "60%"], opacity: [0, 100] }}
          transition={{ duration: 1.5 }}
          className={`h-[0.5px] sm:h-[1px] mt-[0.5%] ${
            side == "left" ? "self-start" : "self-end"
          } bg-app_yellow `}
        />
        {/* <div className='w-1 sm:w-2 h-1 sm:h-2  bg-app_yellow' /> */}
      </div>
    </div>
  );
};

export default SubHeader;
