"use client";
import {navData}  from "@/data/navData";
import { useState } from "react";
import zetLogo from '../../public/zet_new_logo.7adcc993.svg'
import Image from "next/image";
import NavLink from "./Navlink";
const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);

    return (        

<><nav className="navbar bg-white top-0 z-10  lg:px-24">
      <div className="flex-1">
          <Image src={zetLogo} className="w-24" alt="ZET Logo"></Image>
        
      </div>
      <div
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4.5rem] flex w-full flex-col  pb-3 pt-2 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 `}
      >
        <ul className="menu menu-horizontal flex-col px-1 lg:flex-row">
          {navData.map(({ path, title }) => (
            <li key={path} className="mx-auto">
              <NavLink 
                onClick={() => setNavToggle(false)}
                href={path}
                activeClassName="text-blue-500"
                exact={path === "/"}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <a href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank"><button className="bg-primary rounded-md px-3 py-2 text-white">  Download ZET</button></a>
        
       </div>
      <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </nav>
    <hr />
    </>
    );
};

export default Navbar;