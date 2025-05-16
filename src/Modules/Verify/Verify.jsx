
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Shared/Navbar';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from '../../Apis/ProductsApi/Products';
import { toast } from 'react-hot-toast';

export default function Verify() {
  const [productId, setProductId] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [verificationData, setVerificationData] = useState([]);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const dispatch = useDispatch();
  const { allProducts, loading: productLoading, error } = useSelector(
    (state) => state.product
  );

  // جلب جميع المنتجات
  useEffect(() => {
    dispatch(getallproducts({}));
  }, [dispatch]);

  // جلب بيانات التحقق من /api/verification/me
  useEffect(() => {
    const fetchVerificationData = async () => {
      setVerificationLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error('يجب تسجيل الدخول لعرض بيانات التحقق');
          setVerificationLoading(false);
          return;
        }

        console.log('Token being sent:', token); // للتحقق من الـ token

        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/verification/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('Verification data:', response.data); // للتحقق من البيانات

        // استخراج المصفوفة من حقل verifications إذا وجد
        const data = response.data.verifications || (Array.isArray(response.data) ? response.data : [response.data]);
        console.log('Processed data:', data); // للتحقق من البيانات بعد المعالجة
        setVerificationData(data);

      } catch (err) {
        console.error('Error fetching verification data:', err.response?.data || err.message);
        toast.error('حدث خطأ أثناء جلب بيانات التحقق');
        setVerificationData([]); // التأكد من أن الحالة فارغة في حالة الخطأ
      } finally {
        setVerificationLoading(false);
      }
    };

    fetchVerificationData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productId || !image) {
      toast.error('قم باختيار المنتج ورفع الصورة');
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
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      toast.success('تم ارسال طلب التفعيل بنجاح');
      // تحديث بيانات التحقق بعد الإرسال
      const newData = response.data.verifications || (Array.isArray(response.data) ? response.data : [response.data]);
      setVerificationData(newData);
    } catch (err) {
      console.error('Error submitting verification:', err.response?.data || err.message);
      toast.error('فشل ارسال طلب التفعيل');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden">
        <div className="bg-form lg:px-24 px-8 flex justify-center items-start h-full overflow-hidden flex-col md:flex-row gap-8">
          {/* الفورم */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 w-full my-16 bg-secondary mb-8 p-6 rounded-lg shadow-lg"
            encType="multipart/form-data"
          >
            {/* Autocomplete المنتج */}
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
                  <li {...props} className="flex gap-4 my-2 items-center">
                    <img
                      src={`${import.meta.env.VITE_IMAGEURL}/${option.imageCover}`}
                      alt={option.name}
                      className="w-16 h-16 mr-4"
                    />
                    {option.name}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="ابحث عن المنتج" variant="outlined" fullWidth />
                )}
              />
            </div>

            {/* صورة معاينة المنتج */}
            {selectedProduct && (
              <div className="mb-4">
                <label className="text-white block mb-2">معاينة صورة المنتج</label>
                <img
                  src={`${import.meta.env.VITE_IMAGEURL}/${selectedProduct.imageCover}`}
                  alt="Product Preview"
                  className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* رفع صورة التحقق */}
            <div className="mb-4">
              <label className="text-white block mb-2">صورة المنتج</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full py-2 px-3 cursor-pointer rounded-lg bg-white outline-none border border-black"
              />
            </div>

            {/* معاينة الصورة المرفوعة */}
            {image && (
              <div className="mb-4 flex justify-center">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  className="max-w-full max-h-[300px] object-contain rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* زر الإرسال */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-1/2 bg-white hover:bg-black hover:text-white cursor-pointer text-black font-bold py-2 rounded-lg mt-6 transition"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'تفعيل المنتج'}
              </button>
            </div>
          </form>

          {/* عرض بيانات التحقق بشكل منسق */}
          <div className="lg:w-1/2 w-full my-16 bg-secondary p-6 rounded-lg shadow-lg text-white overflow-auto max-h-[600px]">
            <h2 className="text-2xl font-bold mb-4">بيانات التحقق الخاصة بي</h2>

            {verificationLoading && <CircularProgress color="inherit" />}

            {!verificationLoading && (!verificationData || verificationData.length === 0) && (
              <p>لا توجد بيانات تحقق.</p>
            )}

            {!verificationLoading && verificationData && verificationData.length > 0 && (
              <div className="space-y-6 text-white text-base">
                {verificationData.map((item, index) => (
                  <div key={item._id || index} className="p-4 border border-gray-500 rounded-lg">
                    <div>
                      <strong>رقم التحقق:</strong> {item._id || 'غير متوفر'}
                    </div>
                    <div>
                      <strong>حالة التحقق:</strong> {item.verifiedAt ? 'تم التحقق' : 'قيد الانتظار'}
                    </div>
                    <div>
                      <strong>اسم المنتج:</strong> {item.productId?.name || 'غير متوفر'}
                    </div>
                    <div>
                      <strong>تاريخ تقديم الطلب:</strong>{' '}
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'غير متوفر'}
                    </div>
                    <div>
                      <strong>آخر تحديث:</strong>{' '}
                      {item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'غير متوفر'}
                    </div>

                    {item.verificationImage && (
                      <div>
                        <strong>صورة التحقق:</strong>
                        <img
                          src={`${import.meta.env.VITE_IMAGEURL}/${item.verificationImage}`}
                          alt="Verification"
                          className="mt-2 rounded-lg shadow-md max-w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}