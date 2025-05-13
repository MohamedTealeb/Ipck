import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/304305481_470478301760187_6739104333513463181_n.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)


  const isAuthenticated = !!localStorage.getItem("token"); // or `auth.user` based on your implementation

  return (
    <>
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

            {!isAuthenticated && (
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
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
