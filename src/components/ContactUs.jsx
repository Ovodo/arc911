import React, { useRef } from "react";
import Header from "./Header";
import {
  IconCalendar,
  IconDeviceLaptop,
  IconMailFilled,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when it enters the view

  return (
    <section
      ref={ref}
      className={`mx-10 h-[50vh] sm:h-screen py-10 w-[90%] border-y-2 border-dotted border-opacity-40 border-app_white flex flex-col items-center`}
      id='Contact us'
    >
      <Header title={"Contact Us"} />
      <motion.div
        transition={{ duration: 2 }}
        animate={{ y: isInView ? 0 : 200, opacity: isInView ? 1 : 0 }}
        className='w-full  flex flex-wrap sm:flex-row gap-[5%] mt-[3%] items-center justify-center'
      >
        <button className='flex w-max contact-element sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
          <a
            href='mailto:info@arc911.com'
            className='font-semibold  text-nowrap my-2 sm:my-0 text-sm sm:text-xl'
          >
            Send us a mail
          </a>
          <div className='text-2xl text-app_yellow'>
            <IconMailFilled />
          </div>
        </button>
        <button className='flex w-max contact-element sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
          <a
            href='https://calendly.com/d/ckkh-xcr-8tb/30-minute-design-briefing'
            className='font-semibold  text-nowrap my-2 sm:my-0 text-sm sm:text-xl'
          >
            Book a meeting
          </a>
          <div className='text-2xl text-app_yellow'>
            <IconCalendar />
          </div>
        </button>
        <button className='flex w-max contact-element sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
          <a
            href='https://forms.gle/BtKC95xzMRbJ8pKC6'
            className='font-semibold  text-nowrap my-2 sm:my-0 text-sm sm:text-xl'
          >
            Join our studio
          </a>
          <div className='text-2xl text-app_yellow'>
            <IconDeviceLaptop />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default ContactUs;
