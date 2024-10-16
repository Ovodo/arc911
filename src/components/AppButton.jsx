import React from "react";

const AppButton = ({ title }) => {
  return (
    <button className='font-semibold text-lg sm:text-2xl w-[118px] center  h-[50px] sm:w-[240px] sm:h-[80px] rounded-[8px] sm:rounded-[12px] bg-app_yellow hover:-translate-x-4 active:scale-90 duration-300'>
      {title}
    </button>
  );
};

export default AppButton;
