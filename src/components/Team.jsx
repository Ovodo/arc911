import React, { useEffect, useRef } from "react";
import { styles } from "../constants/styles";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { motion, useInView } from "framer-motion";

const teamMembers = [
  {
    name: "Victor Ndukwe",
    description:
      "Victor is a versatile architect with a background in software programming. He has worked with architects all over the world creating developments such as Landmark Village and Itana by Talent City.",
    imgSrc: "/images/victor.jpg",
    reverse: false,
  },
  {
    name: "Jide Ebeogu",
    description:
      "Jide has over 20 years experience in the design and construction of buildings. He has worked with top Architecture firms locally and served on the management of various AEC teams.",
    imgSrc: "/images/jide.jpg",
    reverse: true,
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" }); // Trigger only once when it enters the view

  return (
    <section
      ref={ref}
      id='team'
      className='px-10 flex overflow-x-hidden border-t justify-center border-app_milk/40 mx-5 w-full h-full flex-col relative bg-gradient-to- from-stone-900 via-[10%] to-100% via-app_milk to-stone-900 gap-10 sm:gap-20 py-24 sm:h-screen items-center'
    >
      <div className='w-[90vw] border-opacity-100 mx-5 sm:mx-10 h-[70%] my-auto absolute border-x  border-stone-800'></div>
      <Header dark={!true} title='Our Team' />
      <div className='flex flex-col sm:flex-row flex-1 gap-12'>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index.toString()}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            animate={{
              x: isInView ? 0 : member.reverse ? 800 : -800,
              opacity: isInView ? 1 : 0,
            }}
            className={`flex flex-col-reverse rotate-0 justify-end  ${
              member.reverse ? "" : ""
            } items-center gap-12`}
          >
            <div className='flex sm:w-[65%] flex-col items-center text-center'>
              <SubHeader
                dark={!true}
                side={member.reverse && "left"}
                title={member.name}
              />
              <p className='mt-4 text-app_white'>{member.description}</p>
            </div>
            <img
              className='object-cover object-top rounded-full w-[250px] h-[250px]'
              src={member.imgSrc}
              alt={member.name}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
