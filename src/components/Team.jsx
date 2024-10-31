import React from "react";
import { styles } from "../constants/styles";
import Header from "./Header";
import SubHeader from "./SubHeader";

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
  return (
    <section className='px-10 flex w-full h-full flex-col relative bg-gradient-to-b from-stone-900 via-[10%] to-95% via-app_milk to-stone-900 gap-10 sm:gap-20 py-10 sm:h-screen items-center'>
      <div className='w-[90vw] border-opacity-50 mx-5 sm:mx-10 h-[70%] my-auto absolute border-x  border-stone-950'></div>
      <Header dark={true} title='Our Team' />
      <div className='flex flex-col sm:flex-row flex-1 gap-12'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col  ${
              member.reverse ? "" : ""
            } items-center gap-12`}
          >
            <div className='flex sm:w-[65%] flex-col items-center text-center'>
              <SubHeader
                dark={true}
                side={member.reverse && "left"}
                title={member.name}
              />
              <p className='mt-4 text-stone-950'>{member.description}</p>
            </div>
            <img
              className='object-cover object-top rounded-full w-[250px] h-[250px]'
              src={member.imgSrc}
              alt={member.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
