import React from 'react'
import logo from '../../assets/304305481_470478301760187_6739104333513463181_n.jpg'

export default function Navbar() {
  return <>
  
<nav className="font-sans  flex flex-col text-center content-center  sm:flex-row sm:text-left sm:justify-between py-2 px-6  shadow sm:items-baseline w-full">
  
  <div className="mb-2 relative sm:mb-0 inner">
 
    <a href="/home" className=""><img src={logo}className='w-15 h-15'  alt="" /></a>
   

  </div>

  <div className="sm:mb-0  self-center">
    <div className="h-10 " style={{display: 'table-cell', verticalAlign: 'middle'}}> 
       
    <a href="#" className="text-md no-underline text-secondary hover:text-blue-dark ml-2 px-1 ">Home</a>

   <button className='bg-secondary  text-white text-center font-bold py-2 px-2 ml-4 rounded'>
   <a href="#" className="text-md no-underline text-white hover:text-blue-dark px-1">Verify</a>
    </button> 
   
     </div> 

  </div>
 
</nav>
  
  
  
  
  </>
}
