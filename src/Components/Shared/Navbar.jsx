import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from 'lucide-react' // أيقونة المستخدم
import logo from '../../assets/304305481_470478301760187_6739104333513463181_n.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const isAuthenticated = !!localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="flex flex-wrap items-center justify-between py-2 px-6 shadow w-full">
      <div className="relative flex items-center">
        <a href="/" className="">
          <img src={logo} className="w-16 h-16" alt="Logo" />
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} w-full sm:flex sm:items-center sm:w-auto`}>
        <div className="flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-0 sm:ml-auto">
          <Link
            to="/products"
            className="block font-bold sm:inline-block text-base no-underline text-secondary hover:text-gray-800 ml-0 sm:ml-2 px-1 py-2 sm:py-0"
          >
            المنتجات
          </Link>

          <Link
            to="/verify"
            className="bg-secondary text-white font-bold py-2 px-4 ml-0 sm:ml-4 rounded mt-2 sm:mt-0 text-center"
          >
            تفعيل الضمان
          </Link>

          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="text-secondary font-bold py-2 px-4 ml-0 sm:ml-4 rounded mt-2 sm:mt-0 border border-secondary hover:bg-secondary hover:text-white text-center"
              >
                تسجيل الدخول
              </Link>

              <Link
                to="/signup"
                className="text-secondary font-bold py-2 px-4 ml-0 sm:ml-2 rounded mt-2 sm:mt-0 border border-secondary hover:bg-secondary hover:text-white text-center"
              >
                انشاء حساب
              </Link>
            </>
          ) : (
       <div className="relative ml-4 mt-2 sm:mt-0">
  <button 
    onClick={toggleMenu}
    className="w-10 h-10 rounded-full cursor-pointer bg-gray-200 flex items-center justify-center border-2 border-secondary"
  >
    <User className="text-secondary" size={20} />
  </button>

  {menuOpen && (
    <div 
      className="absolute left-0 top-full mt-2 w-48 max-w-[200px] bg-white border rounded-md shadow-lg z-50 flex flex-col gap-1 p-2"
      style={{ right: 'auto' }} // نتأكد مفيش right value
    >
      <Link
        to="/verify"
        className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md text-center"
      >
        عرض كل الضمانات
      </Link>
      <button
        onClick={handleLogout}
        className="px-4 py-2 cursor-pointer text-sm text-white bg-red-500 hover:bg-red-600 rounded-md text-center"
      >
        تسجيل الخروج
      </button>
    </div>
  )}
</div>


          )}
        </div>
      </div>
    </nav>
  )
}
