import React from 'react'
import Speaker from './speaker.png'
import Gaming from './gaming.png'
import Blog from './vr.png'
function Catagory2() {
    return (
<div className='py-8'>
        <div className='container'>
           <div className="grid grid-cols-1
           sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* first col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-white 80 to-black/50 text-white rounded-3xl relative  w-[400px] h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mn-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Console </p>
                        
                    </div>
                </div>
                <img src={Gaming} alt=""
                className='w-[200px]  h-[250px]' />
            </div>





            {/* second col */}
            





            {/* third col  */}

            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/80 to-brandBlue/100  w-[400px] text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mn-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Speaker</p>
                        
                    </div>
                </div>
                <img src={Speaker} alt=""
                className='w-[240px]  absolute top-1/2-translate-y-1/2 -right-0' />
            </div>
            {/* dgdhgfghj */}

            <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/80 to-brandGreen/100 text-white rounded-3xl relative h-[320px] w-[380px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mn-[2px]'>With</p>
                        <p className='text-4xl xl:text-6xl font-bold opacity-60 mb-2'>Ocolus</p>
                        
                    </div>
                </div>
                <img src={Blog} alt=""
                className='w-[200px]  h-[250px] absolute top-1/2 -translate-y-1/2 -right-0'  />
            </div>



`
           </div>
        </div>
       </div> 
    )
}

export default Catagory2
