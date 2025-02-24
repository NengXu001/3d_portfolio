import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedIn,  cv} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className = 'w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to ='/'
          className="flex item-center gap-2"
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src = {logo} alt = "logo" className="w-9 h-8 object-contain "/>
          <p className='text-white text-[18px] font-bold my-1 cursor-pointer flex'>Neng &nbsp;<span className='sm:block hidden'> | Porfolio</span>
          </p>
        </Link>

        {/* 修改navbar右边nav_link */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.id !== "downloadCV" && nav.id !== "linkedin" && (
                <a href={`#${nav.id}`} className='mt-2'>{nav.title}</a>
              )}

              {nav.id === "downloadCV" && 
                <button className="py-0 px-3 text-[18px] font-medium cursor-pointer bg-primary border 
                rounded-md transform transition-transform hover:translate-y-[-3px]">
                  <a href={cv} download="CV_NengXu.pdf">{nav.title}</a>
                </button>
              }

              {nav.id === "linkedin" &&
                <a href='https://www.linkedin.com/in/xinqi-yang/' target="_blank">
                  <img src={linkedIn} alt="LinkedIn" className='mt-0 w-7 h-7 object-contain'/>
                </a>
              }
            </li>
          ))}
        </ul>

        {/* 网页缩小后的显示 */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar