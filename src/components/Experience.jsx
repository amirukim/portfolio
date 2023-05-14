import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-black-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-black-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-black-500",
    },

    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-black-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-black-500",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-black-500",
    },
  ];

  return (
    <div name='experience' className='bg-coklat w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-itam'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='font-mono w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`  py-2 rounded-lg ${style} shadow duration-300 hover:bg-white hover:shadow-xl`}>
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
