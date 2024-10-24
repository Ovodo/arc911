import { styles } from "../constants/styles";
import Header from "./Header";
import SubHeader from "./SubHeader";

import React from "react";

const Team = () => {
  return (
    <section
      className={`${styles.section} flex flex-col mb-[15vh] items-center `}
    >
      <Header title={"Our Team"} />
      <div className='flex flex-col gap-12 sm:gap-0 mt-[5vh] sm:mt-[15vh] sm:flex-row items-center '>
        <div className=' flex sm:w-[65%] flex-col items-center'>
          <div className='w-full flex justify-center my-4'>
            <SubHeader title={"Victor Ndukwe"} />
          </div>
          <p className='sm:w-[60%]'>
            Victor is a versatile architect with a background in software
            programming. He has worked with architects all over the world
            creating developments such as Landmark Village and Itana by Talent
            City
          </p>
        </div>
        <img
          className='object-contain w-[500px] h-[600px]'
          src='/images/victor.jpg'
        />
      </div>
      <div className='flex flex-col gap-12 sm:gap-0 mt-[5vh] sm:mt-[20vh] sm:flex-row-reverse items-center '>
        <div className=' flex sm:w-[65%] flex-col items-center'>
          <div className='w-full flex justify-center my-4'>
            <SubHeader side={"left"} title={"Jide Ebeogu"} />
          </div>
          <p className='sm:w-[60%]'>
            Jide has over 20 years experience in the design and construction of
            buildings. He has worked with top Architecture firms locally and
            served on the management of various AEC teams.
          </p>
        </div>
        <img
          className='object-contain w-[500px] h-[600px]'
          src='/images/jide.jpg'
        />
      </div>
    </section>
  );
};

export default Team;
