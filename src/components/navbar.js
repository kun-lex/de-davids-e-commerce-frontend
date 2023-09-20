import React from 'react'
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <nav className='flex  justify-center items-center gap-[86px] text-white pt-5 ' >
        <h1>LOGO</h1>
        <div className='relative' >
            <div className=' absolute inset-y-0 flex pl-2 items-center pointer-events-none ' >
                <SearchIcon className='h-5 w-5 text-gray-300' />
            </div>
            <input
                type='text'
                placeholder='Search'
                name='search'
                className='h-[30px] w-[200px] rounded-full border pl-7 bg-transparent '
            />
        </div>
        <div className='flex gap-[30px]' >
            <a href='/' className='flex items-center justify-center '>Categories <ChevronDownIcon className='h-3 w-3' /> </a>
            <a href='/'>Styles</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
        </div>
        <div className=' flex gap-2 ' >
            <button>Login</button>
            <button className='text-black w-[70px] h-[30px] bg-white rounded-full ' >Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar