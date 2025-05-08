import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Shared/Navbar';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from '../../Apis/ProductsApi/Products';
import { toast } from 'react-hot-toast'; // Corrected import

export default function Verify() {
  const [productId, setProductId] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const { allProducts, loading: productLoading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getallproducts({}));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productId || !image) {
      toast.error("قم باختيار المنتج ورفع الصورة"); // Fixed error toast
      return;
    }

    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('verificationImage', image);

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/verification`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("تم ارسال طلب التفعيل بنجاح"); // Fixed success toast
    } catch (err) {
      console.error("Error submitting verification:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden">
        <div className="bg-form lg:px-24 px-8 flex justify-center items-center h-full overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 w-full my-16 bg-secondary mb-8 p-6 rounded-lg shadow-lg"
            encType="multipart/form-data"
          >
            {/* Product ID Autocomplete */}
            <div className="mb-4">
              <label className="text-white block mb-2">اختر منتج للتفعيل</label>
              <Autocomplete
                value={selectedProduct}
                onChange={(event, newValue) => {
                  setSelectedProduct(newValue);
                  setProductId(newValue?._id);
                }}
                options={allProducts}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <li {...props} className="flex gap-4  my-2 items-center">
                    <img
                      src={`${import.meta.env.VITE_IMAGEURL}/${option.imageCover}`}
                      alt={option.name}
                      className="w-16 h-16  mr-4"
                    />
                    {option.name}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="ابحث عن المنتج" variant="outlined" fullWidth />
                )}
              />
            </div>

            {/* Product Image Preview */}
            {selectedProduct && (
              <div className="mb-4">
                <label className="text-white block mb-2">Product Image Preview</label>
                <img
                  src={`${import.meta.env.VITE_IMAGEURL}/${selectedProduct.imageCover}`}
                  alt="Product Preview"
                  className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Upload Image for Verification */}
            <div className="mb-4">
              <label className="text-white block mb-2">صورة المنتج</label>
              <input
                type="file"
                accept="image/*"

                onChange={(e) => setImage(e.target.files[0])}
                className="w-full py-2 px-3 cursor-pointer rounded-lg bg-white outline-none border border-black"
/>
            </div>

            {/* Image Preview for Uploaded Image */}
            {image && (
              <div className="mb-4 flex justify-center">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  className="max-w-full max-h-[300px] object-contain rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-1/2 bg-white hover:bg-black hover:text-white cursor-pointer text-black font-bold py-2 rounded-lg mt-6 transition"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "تفعيل المنتج"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
