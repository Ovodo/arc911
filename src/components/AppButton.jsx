import React from "react";

const AppButton = ({ title }) => {
  return (
    <button className='w-[118px] center  h-[50px] sm:w-[240px] sm:h-[60px] rounded-[8px] sm:rounded-[12px] bg-app_yellow hover:translate-x-1 duration-300'>
      {title}
    </button>
  );
};

export default AppButton;
