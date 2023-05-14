import React from "react";
import HeroImage from "../assets/mySelf.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-coklat'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-itam'>
            I'm a
            <Typewriter
              options={{
                strings: ["Front-end", "Back-end", "Full Stack"],
                autoStart: true,
                loop: true,
              }}
            />
            Developer
          </h2>
          <p className='text-gray-500 font-mono py-4 max-w-md'>
            I am a dedicated and detail-oriented Frontend Developer with experience in HTML, CSS, JavaScript, and React. Passionate in designing visually appealing and user-friendly web applications
            in order to make a valuable website. But still exploring other technologies and frameworks that catch my interest!
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-itam cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt='my profile' className='rounded-2xl hidden sm:block mx-auto md:pl-10 w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;
