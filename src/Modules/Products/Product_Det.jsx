import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Shared/Navbar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from '../../Apis/ProductsApi/Products';

export default function Product_Det() {
  const [image, setImage] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getallproducts({}));
  }, [dispatch]);

  const product = allProducts.find(p => p._id === id);
  const images = [product?.imageCover, ...(product?.images || [])];

  if (loading) return <div className="text-center py-10 text-lg font-medium">Loading...</div>;
  if (error || !product) return <div className="text-center py-10 text-red-500">Product not found or failed to load.</div>;

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image Gallery */}
            <div className="md:w-1/2">
              <div className="w-full h-80 rounded-xl shadow bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={`${import.meta.env.VITE_IMAGEURL}/${images[image]}`}
                  alt="Product"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="flex mt-4 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImage(idx)}
                    className={`h-20 w-20 rounded-lg overflow-hidden border-2 ${image === idx ? 'border-indigo-500' : 'border-gray-300'} hover:border-indigo-300 transition`}
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGEURL}/${img}`}
                      alt={`Thumbnail ${idx}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 bg-white rounded-xl shadow p-6 space-y-5">
              <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>

              <div className="text-sm text-gray-500 space-y-1">
                <p>الفئات: <span className="font-medium text-gray-700">{product.category?.name || 'غير مصنف'}</span></p>
                <p>الموديل: <span className="font-medium text-gray-700">{product.model || 'N/A'}</span></p>
                <p>تم الإنشاء في          : <span className="font-medium text-gray-700">{new Date(product.createdAt).toLocaleDateString()}</span></p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-4xl font-bold text-indigo-600">ج.م {product.price.toLocaleString()}</div>
                <div className={`text-lg font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {product.stock > 0 ? `${product.stock} متوفر` : 'غير متوفر'}
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {product.description || 'لا يوجد وصف للمنتج.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
