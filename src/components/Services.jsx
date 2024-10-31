import React, { useRef, useState, useEffect } from "react";
import ServiceBox from "./ServiceBox";
import Header from "./Header";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Services = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  // Update current index based on scroll position
  const updateIndex = () => {
    if (scrollContainerRef.current) {
      const boxWidth = scrollContainerRef.current.clientWidth;
      const index =
        Math.round(scrollContainerRef.current.scrollLeft / boxWidth) + 1;
      setCurrentIndex(index);
    }
  };

  // Scroll left or right by one container width
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const boxWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction * boxWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", updateIndex);
      return () =>
        scrollContainerRef.current.removeEventListener("scroll", updateIndex);
    }
  }, []);

  return (
    <section
      style={{
        scrollSnapAlign: "center",
      }}
      className='flex w-full  sm:h-screen border-y border-app_white/10 py-5 sm:py-10 bg-app_yello bg-opacity-5 relative flex-col mt-0 items-center'
      id='Services'
    >
      <Header title={"Services"} />
      <div
        ref={scrollContainerRef}
        className='w-full  sm:overflow-x-auto mt-10 sm:mt-0 scrollbar-hide  overflow-y-visible sm:overflow-y-hidden h-full items-center flex  scroll-smooth'
      >
        <div className='flex sm:h-[75vh] h-full flex-col sm:flex-row'>
          {[
            {
              heading: "Revit and BIM Services",
              images: ["build1", "build2"],
              paragraph:
                "We offer Revit and BIM service for your project, enabling you to have intelligent designs, easier construction processes, faster and more accurate material take-off",
            },
            {
              heading: "Rendering and Visualization",
              images: ["lounge", "lounge2"],
              paragraph:
                "Bring your architectural visions to life with high-quality 2D and 3D renderings, animations, AR/VR. Whether for real estate or construction, we create photorealistic visuals with immersive experiences that help you showcase your projects to clients or investors.",
            },
            {
              heading: "CAD and Drafting services",
              images: ["build3", "build4", "center"],
              paragraph:
                "You have done the heavy lifting of concept designs. Now you like to create engineering drawings. This is where we come in. We take away the boring task from off your desk while you focus on providing critical details that make your buildings work.",
            },
            {
              heading: "AR / VR",
              images: ["fx1", "fx2", "view"],
              paragraph:
                "Immerse your clients in their future spaces with cutting-edge augmented and virtual reality experiences. Our AR/VR solutions provide interactive simulations that offer a realistic preview of your designs in a virtual environment.",
            },
          ].map((service, index) => (
            <ServiceBox key={index} side='right' {...service} />
          ))}
        </div>
      </div>
      <div className='sm:flex hidden justify-between items-center absolute bottom-10 right-1/2 translate-x-1/2 space-x-4'>
        <button
          onClick={() => scroll(-1)}
          className='cursor-pointer hover:scale-90'
        >
          <IconArrowLeft />
        </button>
        <span className='rounded-full bg-app_white w-7 sm:w-14 h-7 sm:h-14 flex center font-semibold text-app_brown text-[4vw] sm:text-[2vw] p-3'>
          {currentIndex}
        </span>
        <button
          onClick={() => scroll(1)}
          className='cursor-pointer hover:scale-90'
        >
          <IconArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Services;
