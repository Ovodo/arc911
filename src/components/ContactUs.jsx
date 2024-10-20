import React from "react";
import { styles } from "../constants/styles";
import Header from "./Header";
import {
  IconCalendar,
  IconDeviceLaptop,
  IconMailFilled,
} from "@tabler/icons-react";

const ContactUs = () => {
  return (
    <section
      className={`${styles.section}  w-full  flex flex-col items-center`}
      id='Contact us'
    >
      <Header title={"Contact Us"} />
      <div className='w-full  flex flex-wrap sm:flex-row gap-[5%] mt-[3%] items-center justify-center'>
        <button className='flex w-max contact-element sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
          <p className='font-semibold  text-nowrap my-2 sm:my-0 text-sm sm:text-xl'>
            Send us a mail
          </p>
          <div className='text-2xl text-app_yellow'>
            <IconMailFilled />
          </div>
        </button>
        <button className='flex w-max contact-element sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
          <p className='font-semibold  text-nowrap my-2 sm:my-0 text-sm sm:text-xl'>
            Book a meeting
          </p>
          <div className='text-2xl text-app_yellow'>
            <IconCalendar />
          </div>
        </button>
        <button className='flex w-max contact-element sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
          <p className='font-semibold  text-nowrap my-2 sm:my-0 text-sm sm:text-xl'>
            Join our studio
          </p>
          <div className='text-2xl text-app_yellow'>
            <IconDeviceLaptop />
          </div>
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
