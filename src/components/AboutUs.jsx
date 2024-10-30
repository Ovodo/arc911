import React from "react";
import Header from "./Header";

const AboutUs = () => {
  return (
    <section
      className={`flex flex-col justify-center mt-0 bg-app_white/90  items-center border-y-2 border- border-opacity-20 border-x-app_yellow border-app_brown bg-opacity- px-5 sm:px-10 h-[40vh] sm:h-[92vh]`}
      id='About us'
    >
      {/* <div className='self-center'>
        <Header title={"About us"} />
      </div> */}
      {/* <h1
        className={` font-bold ${
          false ? "opacity-0 " : "bg-transparent"
        }  text-[4vw] sm:text-[4vw] z-50 rale mb-10  text-app_blue`}
      >
        Arc 911
      </h1> */}
      <p className=' text-[4vw] text-center text-app_blue  sm:text-[3vw] leading-normal'>
        We are a design and innovation studio. We believe that creativity should
        be ubiquitous, and so, we provide cheap and quick design services for
        individuals, architecture, construction, interior design, and real
        estate firms:
      </p>
      {/* <img
            className='h-[78vh] sm:h-[400px] w-[600px] object-cover'
            src='/images/build1.jpg'
          /> */}
    </section>
  );
};

export default AboutUs;
