import React from "react";
import { IconCopyright } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className='absolute bottom-[0.25%] right-[2vw] w-full justify-between flex self-end items-center px-[2vw]  sm:w-[60%]'>
      <div className='text-app_white gap-4 flex items-center'>
        <IconCopyright size={24} />
        <p className='text-sm sm:text-2xl'>Mykhaban 2024</p>
      </div>
      <div className='text-app_white gap-2 flex items-center'>
        <p className='text-xs sm:text-base'>Powered By</p>
        <img src='/icons/tricode.svg' className='w-[24px] h-[24px]' />
      </div>
    </div>
  );
};

export default Footer;
