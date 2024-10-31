import React from "react";
import { IconCopyright } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className='absolute bottom-[1%] sm:right-[2vw] w-full justify-between flex self-center sm:self-end items-center px-[2vw]  sm:w-[60%]'>
      <div className='text-app_white gap-1 sm:gap-2 flex items-center'>
        <IconCopyright size={18} />
        <p className='text-xs sm:text-xl'>Mykhaban 2024</p>
      </div>
      <div className='text-app_white gap-1 sm:gap-2 flex items-center'>
        <p className='text-[10px] sm:text-xs'>Powered By</p>
        <div className='bg-stone-900 rounded-full'>
          <img src='/icons/tricode.svg' className='w-[24px] h-[24px]' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
