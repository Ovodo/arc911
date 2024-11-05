import { useRef } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

function App() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" }); // Trigger only once when it enters the view

  return (
    <>
      <Navbar />
      <div
        className='relative w-full flex flex-col items-center text-app_white bg-gradient-to-b  min-h-screen   from-stone-900  via-stone900 to-stone-900 '
        id='app'
      >
        <Hero />
        <AboutUs />
        <Services />
        <Team />
        <ContactUs />
        <div
          className={`px-10 h-[92vh] bg-gradient-to- from-stone-900 via-app_milk to-stone-900 sm:h-screen relative  justify-center w-full py-10  flex flex-col items-center`}
          id='Clients'
          ref={ref}
          style={{
            scrollSnapAlign: "center",
          }}
        >
          <Header dark={!true} title={"COMPANIES THAT TRUST US"} />
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            className='mt-[10%] sm:mt-[7%] w-full flex justify-center items-center gap-[4%] sm:gap-[10%]'
          >
            {["invictus", "landmark", "nedcom", "offshore"].map(
              (item, index) => {
                return (
                  <motion.img
                    variants={itemVariants}
                    key={item}
                    src={`/clients/${item}.png`}
                    alt={item}
                    className={` max-h-[50.73px] ${
                      index && ""
                    }  max-w-[80px] bg-app_milk p-[2px] rotate-0 rounded-sm sm:max-h-[104px] sm:max-w-[275px] object-cover`}
                  />
                );
              }
            )}
          </motion.div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
