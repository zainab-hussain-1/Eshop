import React from 'react'
import Watch from './watch.png'
import Earphone from './earphone.png'
import Laptop from './laptop.png'

function Catagory() {
    return (
       <div className='py-8'>
        <div className='container'>
           <div className="grid grid-cols-1
           sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* first col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black 60 to-black/50 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mn-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                        
                    </div>
                </div>
                <img src={Earphone} alt=""
                className='w-[320px] absolute button-0' />
            </div>





            {/* second col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/80 to-brandYellow/100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mn-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Gadget</p>
                        
                    </div>
                </div>
                <img src={Watch} alt=""
                className='w-[320px] absolute left-14 h-[240px] lg:top[160px]' />
            </div>






            {/* third col  */}

            <div className='py-10 pl-5 bg-gradient-to-br from-primary/80 to-primary/100  w-[600px] text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mn-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Laptop</p>
                        
                    </div>
                </div>
                <img src={Laptop} alt=""
                className='w-[320px]  absolute top-1/2 -translate-y-1/2 -right-0' />
            </div>





`
           </div>
        </div>
       </div> 
    )
}
export default Catagory

