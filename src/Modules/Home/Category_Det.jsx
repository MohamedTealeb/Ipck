import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Shared/Navbar";
import { Link } from "react-router-dom";
import imge from "../../assets/Mattresses-Banner-Collection-_11.Dec.2023_2048x2048.webp";
import { useDispatch, useSelector } from "react-redux";
import { getallproducts } from "../../Apis/ProductsApi/Products";
import Footer from "../../Components/Shared/Footer";

export default function Category_Det() {
  const [modalImg, setModalImg] = useState(null);
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(getallproducts({}));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className=" overflow-x-hidden px-4 sm:px-6 md:px-8 xl:px-0 py-10">
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
          <p className="text-center py-8 text-lg">Loading category...</p>
        ) : error ? (
          <p className="text-center text-red-500 py-8">
            Error loading category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-12">
            {allProducts.length === 0 && <p className="text-white">No Products Found</p>}
            {allProducts.map((item) => (
              <div
                key={item._id}
                className=" bg-secondary  rounded-2xl shadow hover:shadow-lg transition p-6 relative group h-[520px] flex flex-col"
              >
                {/* category Image */}
                <Link
                  to={`/product_Det/${item._id}`}
                  className="h-[240px] mb-4"
                >
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
                      {item.category?.name || "Uncategorized"}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {item.model}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200 text-sm line-clamp-3">
                      {item.description || "No description available."}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-bold text-primary dark:text-green-400">
                    {item.price}  جنيه مصري 
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {item.stock > 0
                        ? `${item.stock} متوفر`
                        : "Out of stock"}
                    </p>
                  </div>
                </div>

                {/* Zoom Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() =>
                      setModalImg(
                        `${import.meta.env.VITE_IMAGEURL}/${item.imageCover}`
                      )
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
      <Footer/>
    </>
  );
}
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getallproducts } from "../../Apis/ProductsApi/Products";

// export default function CategoryDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { allProducts, loading } = useSelector((state) => state.product);

//   useEffect(() => {
//     dispatch(getallproducts({ category: id }));
//   }, [dispatch, id]);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">منتجات الفئة</h2>
//       {loading ? (
//         <p className="text-center">جاري التحميل...</p>
//       ) : allProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {allProducts.map(product => (
//             <div key={product._id} className="border rounded-lg p-4 shadow hover:shadow-md">
//               <img src={`${import.meta.env.VITE_IMAGEURL}/${product.image}`} alt={product.name} className="w-full h-40 object-cover rounded" />
//               <h3 className="text-xl mt-2 font-semibold">{product.name}</h3>
//               <p className="text-gray-500">{product.description}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">لا توجد منتجات في هذه الفئة.</p>
//       )}
//     </div>
//   );
// }
