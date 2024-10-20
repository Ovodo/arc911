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
import ContactUs from "./components/ContactUs";
import Team from "./components/Team";

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
        <ContactUs />
        <Team />
        <section
          className={`${styles.section}    relative  justify-start pt-[20vh]  flex flex-col items-center`}
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
