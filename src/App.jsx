import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceBox from "./components/ServiceBox";
import SubHeader from "./components/SubHeader";
import { styles } from "./constants/styles";
import {
  IconMenuDeep,
  IconX,
  IconCalendar,
  IconMailFilled,
  IconDeviceLaptop,
} from "@tabler/icons-react";

function App() {
  return (
    <>
      <Navbar />
      <div
        className='relative  flex flex-col items-center text-app_white bg-gradient-to-b  min-h-screen from-stone-950 to-gray-800 via-app_blue'
        id='app'
      >
        <Hero />
        <section className={`${styles.section}  h-screen`} id='About us'>
          <div className='self-start'>
            <Header title={"About us"} />
          </div>
          <p className=' text-sm text-app_white mt-[2%] sm:mt-[1%] sm:text-2xl'>
            We are a design and innovation studio. We believe that creativity
            should be ubiquitous, and so we set out to train. mentor and engage
            talents to service the Architecture, Engineering and Construction
            industry whether they are engaged to carry out task, hired as
            individial talents, or as a team. By doing these, companies can
            increase their efficiency, save 30-50% of hiring costs and focus on
            their core competencies
          </p>
        </section>
        <div
          style={{
            scrollSnapAlign: "start",
          }}
          className={`${styles.section}  flex flex-col items-center`}
          id='Services'
        >
          <Header title={"Services"} />
          <div className='mt-[3%] sm:mt-[3%]'>
            <ServiceBox
              side='right'
              heading={"Revit and BIM Services"}
              paragraph={
                "We offer Revit and BIM service for your project, enabling you to have intelligent designs, easier construction processes, faster and more accurate material take-off"
              }
            />
            <ServiceBox
              side='left'
              heading={"Rendering and Visualization"}
              paragraph={
                "Bring your architectural visions to life with high-quality 2D and 3D renderings, animations, AR/VR. Whether for real estate or construction, we create photorealistic visuals with immersive experiences that help you showcase your projects to clients or investors."
              }
            />
            <ServiceBox
              side={"right"}
              heading={"CAD and Drafting services"}
              paragraph={
                "You have done the heavy lifting of concept designs. Now you like to create engineering drawings. This is where we come in. We take away the boring task from off your desk while you focus on providing critical details that make your buildings work."
              }
            />
            <ServiceBox
              side='left'
              heading={"AR / VR"}
              paragraph={
                "Immerse your clients in their future spaces with cutting-edge augmented and virtual reality experiences. Our AR/VR solutions provide interactive simulations that offer a realistic preview of your designs in a virtual environment."
              }
            />
          </div>
        </div>
        <section
          className={`${styles.section} mt-[15vh] sm:mt-[5vh] w-full  flex flex-col items-center`}
          id='Contact us'
        >
          <Header title={"Contact Us"} />
          <div className='w-full  flex flex-wrap sm:flex-row gap-[5%] mt-[3%] items-center justify-center'>
            <button className='flex w-max sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
              <p className='font-semibold text-nowrap my-2 sm:my-0 text-sm sm:text-xl'>
                Send us a mail
              </p>
              <div className='text-2xl text-app_yellow'>
                <IconMailFilled />
              </div>
            </button>
            <button className='flex w-max sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
              <p className='font-semibold text-nowrap my-2 sm:my-0 text-sm sm:text-xl'>
                Book a meeting
              </p>
              <div className='text-2xl text-app_yellow'>
                <IconCalendar />
              </div>
            </button>
            <button className='flex w-max sm:w-[15%] items-center hover:scale-105 hover:blur-[0.5px] duration-150 active:scale-95 ease-in gap-[6%]'>
              <p className='font-semibold text-nowrap my-2 sm:my-0 text-sm sm:text-xl'>
                Join our studio
              </p>
              <div className='text-2xl text-app_yellow'>
                <IconDeviceLaptop />
              </div>
            </button>
          </div>
        </section>
        <section
          className={`${styles.section}    relative   flex flex-col items-center`}
          id='Clients'
        >
          <Header title={"COMPANIES THAT TRUST US"} />
          <div className='mt-[4%] sm:mt-[7%] w-full flex justify-center items-center gap-[4%] sm:gap-[10%]'>
            {["invictus", "landmark", "nedcom", "offshore"].map((item) => {
              return (
                <img
                  key={item}
                  src={`/clients/${item}.png`}
                  alt={item}
                  className=' max-h-[50.73px] max-w-[80px] sm:max-h-[104px] sm:max-w-[275px] object-cover'
                />
              );
            })}
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
