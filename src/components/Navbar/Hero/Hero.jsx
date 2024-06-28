import React from 'react';
import Slider from "react-slick";

import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';


const HeroData = [
  {
    id: 1,
    img: img1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing."
  },
  {
    id: 3,
    img: img3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing."
  },
  {
    id: 2,
    img: img2,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing."
  }
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='container'>
      <div className='overflow-hidden rounded-3xl
      min-h[550px] sm:min-h-[658px] hero-bg-color
      flex justify-center items-center'>
       
<div className='container pb-8 sm:pb-0'>

        <Slider {...settings}>
          {HeroData.map(data => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col 
                justify-center gap-4 sm:pl-3 pt-12
                sm:pt-0 text-center sm:text-left
                order-2 sm:order-1  relative z-10'>
                  <h1 className='text-2xl sm:text-6xl 
                  lg:text-2xl font-bold'>
                    {data.subtitle}
                    </h1>
                  <h1 className='text-5xl sm:text-6xl
                  lg:text-6xl font-bold '>
                    {data.title}
                    </h1>
                  <h1 className='text-5xl uppercase text-white
                  dark:text-white/5 sm:text-[88px] md:text-[100px]
                  xl:text-[150px] font-bold'>
                    {data.title2}</h1>
                  <div className='bg-white py-2 px-4 rounded-full w-[140px] ' > 
                  <button>Shop Now</button>

                  </div>
                </div>
                <div className='order-1 sm:order-2 '>
                  <div>
                    <img src={data.img} alt=""
                    className='w-[300px] h-[300px] sm:[450px]
                    sm:scale:105 lg:scale-110
                    object-contain mx-auto drop-shadow-
                    [-8px_4px_6px_rgba(0,0,0,4) relative z-40' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
