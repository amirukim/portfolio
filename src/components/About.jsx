import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-coklat text-itam'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl font-mono mt-20'>
          Hello, I'm <a className='font-bold'>Hakim</a>.
        </p>

        <br />
        <p className='text-xl font-mono '>
          I am a college student pursuing a bachelor's degree in web technology and I also have a degree in information technology. My passion for technology and web led me to pursue these areas of
          study. I acquired knowledge and skills in various aspects of information technology, such as programming, web development, database management, etc. 
        </p>
        <br />
        <p className='text-xl font-mono'>
          As an undergraduate student, I am eager to learn and explore more about the latest advancements in web technology and apply my knowledge to create innovative web applications and solutions.
          I wish you all the best in your academic journey and future endeavors!
        </p>

        <br />
        <p className='hidden sm:block text-xl font-mono my-2'>
          One of my favourite quotes by{" "}
          <a href='https://www.paulrand.design/' className='font-bold p-2  hover:underline hover:underline-offset-8 '>
            Paul Rand
          </a>
          :
        </p>
        <br />

        <blockquote class='hidden sm:block text-xl  font-semibold text-gray-900 dark:text-white'>
          <svg aria-hidden='true' class='w-10 h-10 text-gray-400 dark:text-gray-600' viewBox='0 0 24 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
              fill='currentColor'
            />
          </svg>
          <p>
            "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old
            reassuring."
          </p>
        </blockquote>

        <br />

        <p className='hidden sm:block text-xl font-mono'>
          I always remind myself of that quote. I just want to create, design and build ideas and products that matter and have a valuable impact on the world. 
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
