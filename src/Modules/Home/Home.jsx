import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Shared/Navbar'


import img1 from '../../assets/view-3d-mattress-with-clouds.jpg'
import img2 from '../../assets/beautiful-luxury-comfortable-white-pillow-blanket-decoration-interior-bedroom.jpg'
import img3 from '../../assets/pillow-sofa.jpg'
import Footer from '../../Components/Shared/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from "../../Apis/CategoryApi/CategoryApi";
import Hero from './Home-Components/Hero'
export default function Home() {
  
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const dispatch = useDispatch();
      const { allCategories, loading, error }= useSelector((state) => state.category);
      
      useEffect(() => {
        dispatch(getAllCategories());
      }, [dispatch]);

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
  
    <Hero />
    
  </div>
  <section>
    <div className='mt-8'>
      <span className='text-4xl text-secondary font-bold flex justify-center'>المنتجات</span>
      <div className="grid grid-cols-1 gap-y-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mt-5 gap-x-6">
      {loading ? (
  <p className="text-center col-span-full text-gray-400">جارٍ التحميل...</p>
) : allCategories.length > 0 ? (
  allCategories.map((item, index) => (
    <div key={index} className="relative flex flex-col rounded-xl bg-white border shadow-md hover:shadow-lg text-gray-700">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-secondary text-white shadow-lg">
        <img
          className="w-full cursor-pointer h-full object-cover"
          src={`${import.meta.env.VITE_IMAGEURL}/${item.image}`}
          alt={item.name || 'category'}
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
          {item.name || "اسم غير متوفر"}
        </h5>
      </div>
      <div className="p-6  pt-0">
        <Link to={`/category_det/${item._id}`}>
          <button className="rounded-lg bg-secondary cursor-pointer py-3 px-6 text-xs font-bold uppercase text-white shadow-md hover:shadow-lg transition-all">
            اقرأ المزيد
          </button>
        </Link>
      </div>
    </div>
  ))
) : (
  <p className="text-center text-gray-500 col-span-full">لا توجد فئات متاحة حالياً.</p>
)}
    </div>
    </div>
  </section>
  <Footer />
  
 
  
  
  
  </>
}
