import React from 'react'
//  import {IoMdSearch} from 'react-icons/Io'

import { CiSearch } from "react-icons/ci";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";




const MenuLinks=[
    
    {
        id:1,
        name: "Home",
        link: "/#",
    },
    {
        id:2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id:3,
        name:"About",
        link:"/#about",
    },
    {
        id:4,
        name:"Blogs",
        link:"/#blog",
    },
]
// const DropdownLinks=[
//     {
//         id:1,
//         name:  "Trending Products",
//         link: "/#",
//     },
//     {
//         id:2,
//         name:  "Best Selling",
//         link: "/#",
//     },
//     {
//         id:3,
//         name:  "Top Rated",
//         link: "/#",
//     },
// ]
function Navbar() {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className="  container flex justify-between items-center">
     {/* logo section */}
                    <div className=' flex items-center gap-20'>
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
                        
 {/* menu items section */}
                        <div  className='hidden lg:block'>
                            <ul className='flex items-center gap-9 '>
                                {
                                 MenuLinks.map((data,index)=>(
                                    <li key={index}>
                                    <a href={data.link}
                                    className='inline-block px-8
                                     font-semibold 
                                    text-gray-500 
                                    hover:text-black 
                                    dark:hover:text-white 
                                    duration-200'
                                    >{data.name}
                                </a>
                                </li>
                                    ))}
                                </ul>
                        </div>
                    </div>



{/* searchbarsection */}

                     <div className='flex justify-between items-center gap-4 '>
                        <div className='relative group hidden sm:block'>
                            <input 
                            type="text"
                            placeholder='Serach' 
                            className='search-bar'
                          />
                          <CiSearch className='text-xl text-gray-600 
                          group-hover:text-primary  
                          dark:text-gray-400 
                           absolute top-1/2 -translate-y-1/2
                            right-2
                           duration-200  ' />
                        </div>

                        {/* button section  */}
                        <button className='relative p-3'>
                        <FaShoppingCart  className='text-xl
                         text-gray-600  dark:text-gray-400 gap-6' />


                         <div className='w-4 h-4 
                         bg-red-500 
                         text-white rounded-full 
                         absolute top-0 right-0
                         flex items-center justify-center 
                         text-xs'>
                            4
                         </div>



                         




                          </button>
                     </div>

<div>
                    {/* <DarkMode/> */}
               </div>                
                       

                </div>
            </div>
        </div>
    )
}

export default Navbar
