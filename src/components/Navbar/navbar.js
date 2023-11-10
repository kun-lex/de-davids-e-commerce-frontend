import React from 'react'
import { useState } from 'react';
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom"


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className="justify-between max-w-5xl mx-4 lg:mx-auto" >
        <div className='flex justify-center items-center space-x-12 text-white pt-5 ' >
            <h1>LOGO</h1>
            <div className='relative' >
                <div className=' absolute inset-y-0 flex pl-2 items-center pointer-events-none ' >
                  <SearchIcon className='h-5 w-5 text-gray-300' />
                </div>
                <input
                  type='text'
                  placeholder='Search'
                  name='search'
                  className='h-[30px] w-[200px] rounded-full border pl-7 p-2 bg-transparent '
                />
            </div>
                <div className="md:hidden">
              <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
            <div className='hidden space-x-5 items-center md:flex' >
                <a href='/' className='flex items-center justify-center '>Categories <ChevronDownIcon className='h-3 w-3' /> </a>
                <a href='/'>Styles</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
            </div>
            <div className='hidden space-x-2 items-center md:flex' >
                <Link to='/login' >
                  <button>Login</button>
                </Link>
                <a href="/sign-up">
                    <button className='text-black w-[70px] h-[25px] bg-white rounded-full ' >Sign up</button>
                </a>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden mt-4 space-y-1">
              <a href="/" className="block text-white">Category</a>
              <hr />
              <a href="/" className="block text-white">Styles</a>
              <hr />
              <a href="/" className="block text-white">About</a>
              <hr />
              <a href="/" className="block text-white">Contact</a>
              <hr />
              <div className='space-x-2' >
                <a href="/login">
                <button className='text-white' >Login</button>
                </a>
                <a href="/sign-up">
                <button className='text-black w-[70px] h-[25px] bg-white rounded-full ' >Sign up</button>
                </a>
              </div>
              {/* <div class="menu">
              <div></div>
              <div style="transition-delay: 0.1s"></div>
              <div style="transition-delay: 0.2s"></div>
              <div style="transition-delay: 0.3s"></div>
              <div style="transition-delay: 0.4s"></div>
              <ul>
                <li style="animation-delay: 0.4s">
                  <a href="#home">About</a>
                </li>
                <li style="animation-delay: 0.5s">
                  <a href="#home">Services</a>
                </li>
                <li style="animation-delay: 0.6s">
                  <a href="#home">Products</a>
                </li>
                <li style="animation-delay: 0.7s">
                  <a href="#home">Contact</a>
                </li>
              </ul>
              </div> */}
            </div>
          )}
    </nav>
  )
}

export default Navbar

