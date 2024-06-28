
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Catagory from './components/catagory/catagory';
import Catagory2 from './components/catagory/catagory2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from './assets/headphone.png'
import Partners from './components/Partners/partners';
import Footer from './components/Footer/Footer';

const BannerData={
  discount:'30% OFF',
  title:"Fine Sale",
  date:'10 Jan to 28 Jan',
  image : headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"lorem ipsum,dolor sit amet consectur adspoimg olits ",
  bgColor:"#f42c37",
};


function App() {
  return (
   
   <div className='bg-white duration-200 overflow-hidden'>
<Navbar/>

<Hero/>
<Catagory/>
<Catagory2/> 
<Services/>

<Banner data ={BannerData}/>
<Partners/>
<Footer/>





   </div>
   
   
   
  );
};

export default App


