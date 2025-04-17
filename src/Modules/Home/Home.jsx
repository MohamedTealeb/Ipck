import React, { useState } from 'react'
import Navbar from '../../Components/Shared/Navbar'


import img1 from '../../assets/view-3d-mattress-with-clouds.jpg'
import img2 from '../../assets/beautiful-luxury-comfortable-white-pillow-blanket-decoration-interior-bedroom.jpg'
import img3 from '../../assets/pillow-sofa.jpg'
import img4 from '../../assets/how_to_store_a_mattress_properly.jpg'
import img5 from '../../assets/WhatsApp Image 2025-04-17 at 15.34.26_fe57cbd1.jpg'
import img6 from '../../assets/WhatsApp Image 2025-04-17 at 15.34.26_678dceb0.jpg'
import img7 from '../../assets/WhatsApp Image 2025-04-17 at 15.34.26_19541acb.jpg'
import Footer from '../../Components/Shared/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  
    const images = [
        img1,
        img2,
        img3,
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  return <>
  <div>
    <Navbar />
  
    <div className="relative max-h-screen flex items-center overflow-hidden justify-center  ">
      <div className=" w-full max-h-screen">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-full object-contain  rounded-lg transition-all duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 cursor-pointer left-4 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 cursor-pointer right-4 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
        >
          &#10095;
        </button>
      </div>
    </div>
    
  </div>
  <section>
    <div className='mt-8'>
      <span className='text-4xl text-secondary flex justify-center'>Products</span>
      <div className="grid grid-cols-1 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-4">
      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border border shadow-gray-500 hover:shadow-black text-gray-700 gap-4 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-secondary gap-4 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img className="w-full h-full object-cover"
      src={img4}
      alt="img-blur-shadow"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      UI/UX Review Check
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none cursor-pointer rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md hover:shadow-secondary transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
<div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border border shadow-gray-500 hover:shadow-black text-gray-700 gap-4 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-secondary gap-4 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <Link to={`/product_Det/${1}`}>
      <img className="w-full cursor-pointer h-full object-cover"
        src={img6}
        alt="img-blur-shadow"
      />
    </Link>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      UI/UX Review Check
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none cursor-pointer rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
     
<div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border border shadow-gray-500 hover:shadow-black text-gray-700 gap-4 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-secondary gap-4 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img className="w-full h-full object-cover"
      src={img5}
      alt="img-blur-shadow"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      UI/UX Review Check
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none cursor-pointer rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
     
<div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border border shadow-gray-500 hover:shadow-black text-gray-700 gap-4 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-secondary gap-4 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img className="w-full h-full object-cover"
      src={img7}
      alt="img-blur-shadow"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      UI/UX Review Check
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none cursor-pointer rounded-lg bg-secondary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
     
 
       
      </div>
    </div>
  </section>
  <Footer />
  
 
  
  
  
  </>
}
