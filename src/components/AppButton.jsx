import React from "react";

const AppButton = ({ title, href }) => {
  if (href) {
    return (
      <a
        href={href}
        className='font-semibold text-base sm:text-[1.5vw] w-[118px] center text-app_blue h-[50px] sm:h-[60px] sm:w-[12vw]  rounded-[8px] sm:rounded-[12px] bg-app_yellow hover:translate-x-[1vw] active:scale-95  duration-150'
      >
        {title}
      </a>
    );
  } else {
    return (
      <button className='font-semibold text-base sm:text-[1.5vw] w-[118px] center text-app_blue h-[50px] sm:h-[60px] sm:w-[12vw]  rounded-[8px] sm:rounded-[12px] bg-app_yellow hover:translate-x-[1vw] active:scale-95  duration-150'>
        {title}
      </button>
    );
  }
};

export default AppButton;
