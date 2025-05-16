import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/304305481_470478301760187_6739104333513463181_n.jpg'
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Apis/CategoryApi/CategoryApi";

export default function Footer() {
  const dispatch = useDispatch();
      const { allCategories, loading, error }= useSelector((state) => state.category);
      
      useEffect(() => {
        dispatch(getAllCategories());
      }, [dispatch]);

  return (
    <>
     
      <section dir="ltr">
  <footer className="relative bg-secondary text-white pt-8 mt-12 pb-6">
    <div className="container mx-auto px-4">
      {/* Start grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {/* Logo and Social Media */}
        <div className="px-4">
       <a href="/">
        
           <img className="w-25" src={logo} alt="ipck" />
        </a>
          <div className="mt-6 lg:mb-0 flex mb-6">
            <a href="https://wa.me/01097700082" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-white text-green-500 hover:bg-black shadow-lg font-normal cursor-pointer h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </button>
            </a>
            <a href="https://www.facebook.com/ipekmattress" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-white text-blue-600 hover:bg-black shadow-lg font-normal cursor-pointer h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </a>
            <a href="https://www.instagram.com/ipek.mattress" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-white text-pink-400 hover:bg-black shadow-lg font-normal cursor-pointer h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </a>
          </div>
        </div>

        {/* منتجاتنا */}
        <div className="px-4">
          <h4 className="text-lg font-semibold mb-4">منتجاتنا</h4>
          <ul className="space-y-2">
            <li><a href="category_det/681bc18e10ab487c97a47f06" className="hover:underline">مراتب</a></li>
            <li><a href="category_det/6823719e1732145999d7758b" className="hover:underline">مخدات</a></li>
          
          </ul>
        </div>

        {/* يمكنك إضافة عمود ثالث هنا مثلاً للتواصل أو روابط إضافية */}
        <div className="px-4">
          <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
          <p className="text-sm">ipekmattress@gmail.com</p>
        </div>
      </div>

      {/* خط فاصل */}
      <hr className="my-6 border-blueGray-600" />

      {/* الحقوق */}
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-400 font-semibold py-1">
            Copyright © <span id="get-current-year">2025</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>

    </>
  );
}
