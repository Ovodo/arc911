import React, { useEffect } from "react";
import { styles } from "../constants/styles";
import { motion, useInView } from "framer-motion";

const Header = ({ title }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when it enters the view

  return (
    <div ref={ref} className='w-max h-max'>
      <h2 className={styles.header}>{title}</h2>
      <div className='flex w-full justify-center items-center'>
        <div className='w-1 sm:w-1 h-1 sm:h-1 rounded-full bg-app_white' />
        <motion.div
          animate={isInView ? { width: ["0%", "100%"], opacity: [0, 100] } : {}}
          transition={{ duration: 1.5 }}
          className='h-[0.5px] sm:h-[1px] bg-app_white'
        />
        <div className='w-1 sm:w-1 h-1 sm:h-1 rounded-full bg-app_white' />
      </div>
    </div>
  );
};

export default Header;
