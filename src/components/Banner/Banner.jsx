import React from 'react'

const Banner=({data}) =>{
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12' >
            <div className='container'>
                <div  style={{backgroundColor:data.bgColor}} 
                className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                {/* {first} */}
                <div className='p-6 sm:p-8'>
                    <p className='text-sm'>{data.discount}</p>
                    <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                    <p className='text-sm'>{data.date}</p>
                </div>
                {/* second  */}
                <div className='h-full flex items-center'>
                    <img src={data.image} alt="" 
                    className='scale-125 w-[340px] mx-auto drop-shadow-2xl 
                    oject-cover'/>
                </div>
                {/* third */}
                <div className='flexflex-col justify-center gap-4
                p-6 sm:p-8'>
                     <p className='font-bold text-xl'>{data.title2}</p>
                     <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                     <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
                     <div style={{color:data.bgColor}}className='bg-white  w-[130px] py-2 px-4 rounded-full'>
                        <button>Shop Now</button>
                     </div>
                     </div>
                {/* third */}
                </div>
            </div>
        </div>
    );
};

export default Banner
