import React from 'react'
import Navbar from '../../Components/Shared/Navbar'

export default function Verify() {
  return <>
  <Navbar />
  <div className='bg-secondary  '>
  <div className="bg-form lg:px-24 px-8 flex justify-center overflow-hidden items-center">

 
<form className="lg:w-1/2 w-full mt-16 bg-secondary mb-8" >
      <label className='text-white'>Full Name</label>
      <input type="text" name="name" className="w-full py-2 px-3 rounded-lg  bg-white  outline-none border border-black focus:border-none focus:outline-black mt-2" required  />
      
      <label className="mt-4 text-white block">Phone Number</label>
      <input type="tel" name="phoneNumber" className="w-full py-2 px-3 bg-white rounded-lg outline-none border border-black focus:border-none focus:outline-black  mt-2" required  />
      
      <label className="mt-4 text-white block">Email</label>
      <input type="email" name="email" className="w-full py-2 px-3 rounded-lg text-black bg-white outline-none border border-black focus:border-none focus:outline-black mt-2" required  />
      
      <div className="relative text-white w-full">
        <label className="mt-4  block">Select</label>
        <select name="consultType" className="w-full py-3  bg-white px-4 rounded-lg text-black outline-none border border-black focus:border-none focus:outline-black mt-2 appearance-none" required >
          <option value="" disabled></option>
          <option value="general"></option>
     
        </select>
        
      </div>
      
      <label className="mt-4 text-white block">Message</label>
      <textarea name="message" className="w-full py-2 px-3 rounded-lg text-black bg-white outline-none border border-black focus:border-none focus:outline-secondary mt-2" rows="4"  required ></textarea>
      
      <div className="mt-4">
        <label className="flex items-center">
          <input type="checkbox" name="agreeToPolicy" className="mx-2" required />
         
        </label>
      </div>
      
      <div className="flex justify-center items-center">
        <button type="submit" className="w-1/2 bg-white hover:bg-black hover:text-white cursor-pointer text-black font-bold py-2 rounded-lg mt-6 hover:bg-primary-dark transition flex justify-center items-center">Submit</button>
      </div>
    </form>
</div>
  </div>
  
  
  </>
}
