import React, { useState } from 'react';
import Logo from '../assets/Disneylogo.svg.png'
import { FaHome } from "react-icons/fa";
import { GiFilmSpool } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";



function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "Home", icon: FaHome },
    { name: "Movies", icon: GiFilmSpool },
    { name: "Series", icon: MdOutlineLiveTv },
    { name: "Originals", icon: IoStar },
    { name: "Watchlist", icon: IoMdAdd },
    { name: "Search", icon: CiSearch },
  ];

  return (
    <div className='w-full bg-gray-800 px-6 py-4'>
      <div className='flex items-center justify-between w-full'>
        <img src={Logo} alt="Disney+ Logo" className='w-24 sm:w-32 md:w-28 lg:w-32 object-contain cursor-pointer' />


        <div className='hidden lg:flex gap-4 xl:gap-6'>
          {menu.map((item) => (
            <div key={item.name} className='flex items-center gap-2 xl:gap-4 p-2 xl:p-4 cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-300'>
              <item.icon className='text-xl xl:text-3xl' />
              <span className='text-sm xl:text-2xl font-bold uppercase relative inline-block
                                after:content-[""] after:absolute after:left-0 after:-bottom-2 xl:after:-bottom-3
                                after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300
                                hover:after:w-full'>{item.name}</span>
            </div>
          ))}
        </div>


        <div className='hidden md:flex lg:hidden gap-2'>
          {menu.slice(0, 3).map((item) => (
            <div key={item.name} className='flex items-center gap-1 p-2 cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-300'>
              <item.icon className='text-lg' />
              <span className='text-xs font-bold uppercase'>{item.name}</span>
            </div>
          ))}
        </div>


        <div className='flex items-center gap-2 sm:gap-4'>

          <div className='md:hidden'>
            <IoMdMore className='text-2xl sm:text-3xl cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-300' onClick={() => setToggle(!toggle)} />
          </div>

          <img width="32" height="32" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full" src="https://img.icons8.com/fluency/48/person-male.png" alt="person-male" />
        </div>
      </div>

      {toggle && (
        <div className='md:hidden bg-gray-800 border-t border-gray-700 mt-4'>
          <div className='flex flex-col items-center gap-4 py-4'>
            {menu.map((item) => (
              <div key={item.name} className='flex items-center gap-4 p-3 cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-300 w-full justify-center'>
                <item.icon className='text-2xl' />
                <span className='text-xl font-bold uppercase'>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


export default Header

