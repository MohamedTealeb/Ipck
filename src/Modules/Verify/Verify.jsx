// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../../Components/Shared/Navbar';

// export default function Verify() {
//   const [productId, setProductId] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!productId || !image) {
//       alert("Please provide both Product ID and Image.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('productId',_id); // تأكد أن هذا الاسم مطابق لما يتطلبه الباكند
//     formData.append('image', imageCover);         // تأكد أن هذا الاسم مطابق لما يتطلبه الباكند

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASEURL}/verification`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//             // ملاحظة: لا تضف Content-Type عند استخدام FormData
//           },
//         }
//       );
//       console.log("Verification submitted successfully:", response.data);
//       alert("Verification submitted successfully!");
//     } catch (err) {
//       console.error("Error submitting verification:", err.response?.data || err.message);
   
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-secondary h-screen overflow-hidden">
//         <div className="bg-form lg:px-24 px-8 flex justify-center items-center h-full overflow-hidden">
//           <form
//             onSubmit={handleSubmit}
//             className="lg:w-1/2 w-full mt-16 bg-secondary mb-8 p-6 rounded-lg shadow-lg"
//           >
//             <div className="mb-4">
//               <label className="text-white block mb-2">Product ID</label>
//               <input
//                 type="text"
//                 value={productId}
//                 onChange={(e) => setProductId(e.target.value)}
//                 className="w-full py-2 px-3 rounded-lg bg-white outline-none border border-black"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="text-white block mb-2">Verification Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 className="w-full py-2 px-3 rounded-lg bg-white outline-none border border-black"
//                 required
//               />
//             </div>

//             <div className="flex justify-center items-center">
//               <button
//                 type="submit"
//                 className="w-1/2 bg-white hover:bg-black hover:text-white cursor-pointer text-black font-bold py-2 rounded-lg mt-6 transition"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Shared/Navbar';

export default function Verify() {
  const [productId, setProductId] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productId || !image) {
      alert("Please provide both Product ID and Image.");
      return;
    }

    const formData = new FormData();
    formData.append('productId', productId);  // Fixed: using the state variable directly
    formData.append('image',verificationImage );          // Fixed: using the state variable directly

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/verification`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
     
          },
        }
      );
      console.log("Verification submitted successfully:", response.data);
      alert("Verification submitted successfully!");
    } catch (err) {
      console.error("Error submitting verification:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-secondary h-screen overflow-hidden">
        <div className="bg-form lg:px-24 px-8 flex justify-center items-center h-full overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 w-full mt-16 bg-secondary mb-8 p-6 rounded-lg shadow-lg"
            encType="multipart/form-data"  // Added for good practice when uploading files
          >
            <div className="mb-4">
              <label className="text-white block mb-2">Product ID</label>
              <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full py-2 px-3 rounded-lg bg-white outline-none border border-black"
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-2">Verification Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full py-2 px-3 cursor-pointer rounded-lg bg-white outline-none border border-black"
                required
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-1/2 bg-white hover:bg-black hover:text-white cursor-pointer text-black font-bold py-2 rounded-lg mt-6 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}