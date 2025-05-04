// import React, { useEffect, useState } from 'react'
// import Navbar from '../../Components/Shared/Navbar'
// import { Link } from 'react-router-dom'
// import imge from'../../assets/Mattresses-Banner-Collection-_11.Dec.2023_2048x2048.webp'
// import { useDispatch, useSelector } from 'react-redux';
// import { getallproducts } from './../../Apis/ProductsApi/Products';
// export default function Products() {
//   const [modalImg, setModalImg] = useState(null);
//   const { allProducts, loading, error } = useSelector((state) => state.product);
//   const dispatch=useDispatch()

//   useEffect(() => {
//     dispatch(getallproducts({}));
//     ;
//   }, [dispatch]);

//   return <>
//   <div className=''>
//   <Navbar/>
//   <div class="bg-secondary overflow-x-hidden container px-4 sm:px-6 md:px-8 xl:px-0">
  

//   <div class="flex flex-col overflow-hidden">
//     <div class="flex flex-col justify-center">
//       <div class="relative">
//         <img class="hidden sm:block w-full" src={imge} alt="sofa" />
//         <img class="sm:hidden w-full" src={imge} alt="sofa" />
//         <div class="absolute sm:bottom-8 bottom-4 pr-4 sm:pr-6 md:pr-8 left-4 sm:left-6 md:left-8 flex justify-start items-start">
//           <p class="text-2xl sm:text-3xl md:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
//         </div>
//       </div>
//     </div>
//     <div class="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
//       <div class="group group-hover:bg-opacity-60 transition duration-500 cursor-pointer relative bg-white dark:hover:bg-secondary p-4 sm:p-6 md:p-8 lg:p-28 flex justify-center items-center">
//         <Link to={`/product/${1}`}>
//           {
//             allProducts.map((item) => {
//               return (
//                 <img class="w-full h-full object-cover" src={`${import.meta.env.VITE_IMAGEURL}/${allProducts.imageCover}`} alt="sofa" />
//               )
//             })
//           }
//         </Link>
//         <div class="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 flex justify-start items-start flex-col space-y-2">
//           <div>
//             <p class="group-hover:opacity-60 transition duration-500 text-lg sm:text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
//           </div>
//           <div>
//             <p class="group-hover:opacity-60 transition duration-500 text-lg sm:text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
//           </div>
//         </div>
        
//         <div class="flex flex-col bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 space-y-2 sm:space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
//           <button onClick={() => setModalImg("https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png")}>
//             <svg class="dark:text-white w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
//               <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
//             </svg>
//           </button>
//         </div>
//       </div>

     

      

     
//     </div>
    
//   </div>

// </div>

// {modalImg && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//     onClick={() => setModalImg(null)}
//   >
//     <img
//       src={modalImg}
//       alt="Enlarged"
//       className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
//       onClick={e => e.stopPropagation()}
//     />
//     <button
//       className="absolute top-4 right-4 text-white text-3xl"
//       onClick={() => setModalImg(null)}
//     >
//       &times;
//     </button>
//   </div>
// )}
// </div>

// </>
// }
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Shared/Navbar';
import { Link } from 'react-router-dom';
import imge from '../../assets/Mattresses-Banner-Collection-_11.Dec.2023_2048x2048.webp';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from '../../Apis/ProductsApi/Products';

export default function Products() {
  const [modalImg, setModalImg] = useState(null);
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getallproducts({}));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="bg-secondary overflow-x-hidden px-4 sm:px-6 md:px-8 xl:px-0 py-10">
        {/* Banner */}
        <div className="relative mb-10">
          <img className="hidden sm:block w-full" src={imge} alt="Banner" />
          <img className="sm:hidden w-full" src={imge} alt="Banner Mobile" />
          <div className="absolute sm:bottom-8 bottom-4 left-4 sm:left-6 md:left-8 pr-4 sm:pr-6 md:pr-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Range Comfort Sofas
            </p>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center py-8 text-lg">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500 py-8">Error loading products.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition p-6 relative group h-[520px] flex flex-col"
              >
                {/* Product Image */}
                <Link to={`/product_Det/${item._id}`} className="h-[240px] mb-4">
                  <img
                    src={`${import.meta.env.VITE_IMAGEURL}/${item.imageCover}`}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </Link>

                {/* Product Info */}
                <div className="flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300 uppercase tracking-wide">
                      {item.category?.name || 'Uncategorized'}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {item.model}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200 text-sm line-clamp-3">
                      {item.description || 'No description available.'}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
    <p className="text-lg font-bold text-primary dark:text-green-400">
      ${item.price}
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-300">
      {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
    </p>
  </div>
                </div>

                {/* Zoom Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() =>
                      setModalImg(`${import.meta.env.VITE_IMAGEURL}/${item.imageCover}`)
                    }
                    className="text-gray-700 cursor-pointer dark:text-white bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:scale-110"
                  >
                    🔍
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Image Viewer */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Zoomed"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setModalImg(null)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
