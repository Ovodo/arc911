import React, { useEffect, useState, useCallback } from "react";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

const nav = ["Home", "About us", "Services", "Contact us"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Detect scroll position and toggle 'isScrolled' state
  useEffect(() => {
    console.log("hiss", window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className='w-full py-[2vh] z-20 px-[5vw]  top-0 items-center flex justify-center fixed'>
      {/* Desktop menu */}
      <motion.ul
        animate={{ right: isScrolled ? "5%" : "36%" }}
        transition={{ duration: 0.5 }}
        className={`hidden sm:flex fixed  top-5 max-w-[30%] duration-[4000] ease-out w-full justify-between ${
          isScrolled ? " bg-app_brown px-[1vw] rounded-md" : ""
        }`}
      >
        {nav.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`text-lg ${
              active === item ? "text-app_yellow" : "text-app_white"
            } cursor-pointer duration-150 hover:opacity-60 hover:text-app_yellow sm:text-[1vw] font-light`}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </motion.ul>

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
            className='fixed top-0 bottom-0 right-0  bg-app_blue flex flex-col justify-center items-center sm:hidden z-40'
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
                  } cursor-pointer hover:text-app_yellow text-[4vw] font-normal mb-8`}
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
