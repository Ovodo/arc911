import React from "react";
import Header from "./Header";
import {
  IconToolsKitchen,
  IconHammer,
  IconBrandDribbble,
  IconBrandGoogleDrive,
  IconBallpen,
  IconLayoutBoard,
  IconDeviceComputerCamera,
} from "@tabler/icons-react";

const AboutUs = () => {
  return (
    <section
      className={`flex flex-col justify-center gap-5 sm:gap-10 relative mt-0 bg-gradient-to- from-stone-900 via-app_milk/90 to-stone-900  items-center border-t-2 border-y-app_white border-app_brown border-opacity-40 mx-5 sm:px-10 h-[92vh] sm:h-[92vh]`}
      id='About us'
    >
      <div className='self-center relative '>
        <Header title={"About us"} />
      </div>
      {/* <h1
        className={` font-bold ${
          false ? "opacity-0 " : "bg-transparent"
        }  text-[4vw] sm:text-[4vw] z-50 rale mb-10  text-app_blue`}
      >
        Arc 911
      </h1> */}
      <p className=' text-[4.5vw]  text-center text-app_white   sm:text-[3vw] leading-normal'>
        We are a design and innovation studio. We believe that creativity should
        be ubiquitous, and so, we provide cheap and quick design services for
        individuals, architecture, construction, interior design, and real
        estate firms:
      </p>
      {/* <div className='absolute  flex opacity-20 flex-col justify-between  mx-auto  flex-wrap w-max items-center  h-[90%] my-auto'>
        <div className='flex  gap-20 '>
          <IconBrandDribbble />
          <IconBrandGoogleDrive />
          <IconHammer />
          <IconToolsKitchen />
          <IconBallpen />
          <IconLayoutBoard />
          <IconDeviceComputerCamera />
          <IconBrandDribbble />
          <IconBrandGoogleDrive />
          <IconHammer />
          <IconToolsKitchen />
          <IconBallpen />
          <IconLayoutBoard />
          <IconDeviceComputerCamera />
        </div>
        <div className='flex  gap-20 '>
          <IconBrandDribbble />
          <IconBrandGoogleDrive />
          <IconHammer />
          <IconToolsKitchen />
          <IconBallpen />
          <IconLayoutBoard />
          <IconDeviceComputerCamera />
          <IconBrandDribbble />
          <IconBrandGoogleDrive />
          <IconHammer />
          <IconToolsKitchen />
          <IconBallpen />
          <IconLayoutBoard />
          <IconDeviceComputerCamera />
        </div>
      </div> */}
      {/* <div className='absolute  flex opacity-20  justify-between  mx-auto  flex-wrap w-full items-center  h-[90%] my-auto'>
        <div className='flex flex-col  gap-20 '>
          <IconBrandDribbble />
          <IconBrandGoogleDrive />
          <IconHammer />
          <IconToolsKitchen />
          <IconBallpen />
          <IconLayoutBoard />
          <IconDeviceComputerCamera />
        </div>
        <div className='flex flex-col  gap-20 '>
          <IconBrandDribbble />
          <IconBrandGoogleDrive />
          <IconHammer />
          <IconToolsKitchen />
          <IconBallpen />
          <IconLayoutBoard />
          <IconDeviceComputerCamera />
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;
