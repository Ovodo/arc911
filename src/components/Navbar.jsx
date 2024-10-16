import React, { useState } from "react";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

const nav = ["Home", "About us", "Services", "Contact us"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  // Framer Motion animation variants
  const menuVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100vw", // full viewport width
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { width: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className='w-full h-[50px]  top-0 items-center flex justify-center relative'>
      {/* Desktop menu */}
      <ul className='hidden sm:flex max-w-[620px] w-full justify-between'>
        {nav.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`text-lg ${
              active === item ? "text-app_yellow" : "text-app_white"
            } cursor-pointer duration-150 hover:opacity-60 hover:text-app_yellow sm:text-2xl font-medium`}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu toggle button */}
      <button
        onClick={() => setToggle(!toggle)}
        className='flex fixed duration-1000 right-4 top-4 sm:hidden z-50'
      >
        {!toggle ? (
          <IconMenuDeep color='#DFF3E4' size={24} />
        ) : (
          <IconX color='#DFF3E4' size={24} />
        )}
      </button>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className='fixed top-0 right-0 h-[80vh] bg-app_blue flex flex-col justify-center items-center sm:hidden z-40'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <ul className='flex flex-col items-center'>
              {nav.map((item) => (
                <li
                  key={item}
                  className={`text-lg ${
                    active === item ? "text-app_yellow" : "text-app_white"
                  } cursor-pointer hover:text-app_yellow sm:text-2xl font-medium mb-8`}
                  onClick={() => {
                    setActive(item);
                    setToggle(false);
                  }} // Close menu on item click
                >
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
