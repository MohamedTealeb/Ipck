import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return <>
  
  <section>
  <footer className="relative bg-secondary text-white pt-8 mt-12 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-300">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 flex mb-6">
          <button className="bg-white text-sky-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faDribbble} />
          </button>
          <button className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
      
    </div>
    <hr className="my-6 border-blueGray-600"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-400 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-400 hover:text-white" target="_blank"/> Notus JS by
          <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-400 hover:text-white">Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  </section>
  
  </>
}
