import React from "react";
import Gadzilla from "../assets/portfolio/Gadzilla.PNG";
import HashingLogin from "../assets/portfolio/LoginWithHash.PNG";
import webofthing from "../assets/portfolio/webofthing.PNG";
import UpModern from "../assets/portfolio/Upmodern.PNG";
import tradimo from "../assets/portfolio/tradimo.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Gadzilla,
      demo: "https://amirukim.github.io/gadzilla/",
      github: "https://github.com/amirukim/Gadzilla",
    },
    {
      id: 2,
      src: UpModern,
      demo: "https://amirukim.github.io/upmodern/",
      github: "https://github.com/amirukim/UpModern",
    },
    {
      id: 3,
      src: webofthing,
      demo: "https://webofthing.wordpress.com/",
      github: "https://github.com/amirukim",
    },
    {
      id: 4,
      src: tradimo,
      demo: "https://amirukim.github.io/tradimo/",
      github: "https://github.com/amirukim",
    },
    {
      id: 5,
      src: HashingLogin,
      demo: "http://anytrade.great-site.net/loginandsignup.php",
      github: "https://github.com/amirukim",
    },
  ];

  return (
    <div name='portfolio' className='bg-coklat w-full text-itam md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, demo, github }) => (
            <div key={id} className='shadow-md shadow-black-500 rounded-lg'>
              <img src={src} alt='' className='h-44 w-full rounded-md' />
              <div className='flex items-center justify-center'>
                <button className='font-mono  w-1/2 px-6 py-3 m-4 duration-200 hover:font-bold hover:scale-125'>
                  <a href={demo} target='_blank'>
                    Demo
                  </a>
                </button>
                <button className=' font-mono w-1/2 px-6 py-3 m-4 duration-200 hover:font-bold hover:scale-125'>
                  <a href={github} target='_blank'>
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
