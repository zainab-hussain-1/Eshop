import React from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const FooterLinks=[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },
]
function Footer() {
    return (
        <div className='dark:bg-gray-950'> 
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* company detail */}
                    <div className='py-8 px-4'>
                    <a 
                        href="#"
                           className='text-primary 
                           font-semibold 
                           tracking-widest 
                           text-2xl uppercase
                            sm:text-3xl'
                        >
                            Eshop
                        </a>   
                        <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum, dolor sit amet consectetur 
                            adipisicing elit. Iusto voluptas 
                            autem fuga atque!</p>
                            <p className='text-gray-500 mt-4'>
                                Made with love by the coding journey</p>
                                <a 
                                href="https://www.youtube.com/channel/UCIH-alMKEFXRiFlGNLcy7gO"
                                target="_blank"
                                className='inline-block bg-primary/90 text-white py-2 px-4 mt-4  rounded-full
                                text-sm '>Visit our channel
                                </a>
                    </div>
                    {/* footer link */}
                    <div className='col-span-2 grid grid-cols-2
                    sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left
                            md-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map(
                                        (data,index)=>(
                                            <li key={index}>
                                                <a href={data.link}
                                                className='text-gray-400 hover:text-black
                                                duration-388'>
                                                    {data.title}
                                                </a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        {/* second coln links */}
                        
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left
                            md-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map(
                                        (data,index)=>(
                                            <li key={index}>
                                                <a href={data.link}
                                                className='text-gray-400 hover:text-black
                                                duration-388'>
                                                    {data.title}
                                                </a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    
                        {/* company addresses */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-bold sm:text-left
                            mb-3'>Address</h1>
                            <div>

                          <div className='flex items-center gap-3'>
                          <FaLocationDot />
                               <p>Karachi,Islamabad</p>
                               </div>

                               <div className='flex items-center gap-3 mt-6'>
                               <FaMobileAlt />
                                <p>+92 123456789</p>
                                </div>
                               {/* social links */}
                               <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                <FaInstagram  className='text-3xl
                                hover:text-primary duration-300'/>
                                </a>

                                <a href="#">
                                <FaFacebook   className='text-3xl
                                hover:text-primary duration-300'/>
                                </a>

                                <a href="#">
                                <FaLinkedin   className='text-3xl
                                hover:text-primary duration-300'/>
                                </a>
                               </div>
                               
                    
                          </div>
                        </div>

                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
