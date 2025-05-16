import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from 'lucide-react'
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
        <a href="/" className="cursor-pointer">
          <img src={logo} className="w-16 h-16" alt="Logo" />
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary cursor-pointer"
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
            className="cursor-pointer block font-bold sm:inline-block text-base no-underline text-secondary hover:text-gray-800 ml-0 sm:ml-2 px-1 py-2 sm:py-0"
          >
            المنتجات
          </Link>

          <Link
            to="/verify"
            className="cursor-pointer bg-secondary text-white font-bold py-2 px-4 ml-0 sm:ml-4 rounded mt-2 sm:mt-0 text-center"
          >
            تفعيل الضمان
          </Link>

          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="cursor-pointer text-secondary font-bold py-2 px-4 ml-0 sm:ml-4 rounded mt-2 sm:mt-0 border border-secondary hover:bg-secondary hover:text-white text-center"
              >
                تسجيل الدخول
              </Link>

              <Link
                to="/signup"
                className="cursor-pointer text-secondary font-bold py-2 px-4 ml-0 sm:ml-2 rounded mt-2 sm:mt-0 border border-secondary hover:bg-secondary hover:text-white text-center"
              >
                انشاء حساب
              </Link>
            </>
          ) : (
            <div className="relative mt-2 sm:mt-0 sm:ml-4 mx-auto sm:mx-0">
              <button 
                onClick={toggleMenu}
                className="cursor-pointer w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-secondary"
              >
                <User className="text-secondary" size={20} />
              </button>

              {menuOpen && (
                <>
                  <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  />

                  <div className="fixed top-1/2 left-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 p-6 flex flex-col items-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border border-secondary shadow cursor-pointer">
                      <User className="text-secondary" size={40} />
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800">مرحبا بك</h2>

                    <Link
                      to="/verify"
                      className="cursor-pointer w-full text-center px-4 py-3 text-base text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                    >
                      عرض كل الضمانات
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="cursor-pointer w-full text-center px-4 py-3 text-base text-white bg-red-500 hover:bg-red-600 rounded-xl transition"
                    >
                      تسجيل الخروج
                    </button>

                    <button
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer text-sm text-gray-500 hover:underline mt-2"
                    >
                      إغلاق
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
