import React from 'react'
import brand1 from './br-1.png'
import brand2 from './br-2.png'
import brand3 from './br-3.png'
import brand4 from './br-4.png'
function Partners() {
    return (
        <div>
            <p className=' min-h-[30px] flex justify-center items-center lg:text-3xl font-bold '> OUR PARTNERS </p>
        <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10 '>
            <div className="container ">
                <div className="grid grid-cols-7 gap-7 place-items-center opacity-58">
                    <img src={brand1} alt=" " className='w-[80px] dark:invert'/><img/>
                    <img src={brand2} alt=" "className='w-[80px] dark:invert' /><img/>
                    <img src={brand3} alt=" "className='w-[80px] dark:invert' /><img/>
                    <img src={brand4} alt=" "className='w-[80px] dark:invert' /><img/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Partners
