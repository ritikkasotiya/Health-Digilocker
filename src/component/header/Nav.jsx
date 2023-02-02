import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../assets/images/logo___horizontal_1.png";
import whats from "../../assets/images/whats.png";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav className="w-full flex h-16 shadow-2xl fixed gap-2 z-50 bg-white">
        <div className="w-fit sm:w-1/5 text-base  flex font-semibold items-center text-emerald-500 cursor-pointer  justify-center ">
          <span className="text-2xl">HEALTH</span>
          <span className="text-2xl">DIGILOCKER</span>
        </div>

        <div className="w-4/5 md:flex justify-end hidden sm:block ">
          <ul className="flex flex-wrap p-2 text-base">
            <NavLink to="/" exact>
              <li className="p-2 font-semibold cursor-pointer ">
                Our Products
              </li>
            </NavLink>
            
            <li className="p-2 font-semibold cursor-pointer ">
              <a className="bg-green-200 p-2 rounded-md text-green-500 ">
                What's ABDM{" "}
                <small className="bg-green-400 rounded-md p-1 text-white">
                  New
                </small>
              </a>
            </li>
            
            
            <NavLink to="/about" exact>
              <li className="p-2 font-semibold cursor-pointer ">About</li>
            </NavLink>
            {/* <NavLink to="/gallery" exact>
              <li className="p-2 font-semibold cursor-pointer">Blog</li>
            </NavLink> */}
            <NavLink to="/contact" exact>
              <li className="p-2 font-semibold cursor-pointer text-sky-500">
                <a className="border border-blue-300 border-r rounded-lg p-2">
                  {" "}
                  For Doctors
                </a>
              </li>
            </NavLink>
            <NavLink to="/Login" exact>
              <li className="p-2 font-semibold cursor-pointer">
                <a className="p-2 new text-white rounded-lg bg-gradient-to-r from-[#37af4b] to-[#1c74bb]">
                  Access Your Health Locker
                </a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div
          className="w-1/5 justify-end fixed sm:hidden lg:hidden block top-0 right-0"
          onClick={() => setOpenNav(!openNav)}>
          <Hamburger toggled={openNav} toggle={setOpenNav} />
        </div>
        {openNav && (
          <div
            className={`w-full flex justify-end sm:hidden flex-col fixed top-16 md:z-auto z-[-1] bg-blue-200 ease-linear duration-100 transition-all shadow-2xl`}>
            <ul
              className={`capitalize flex flex-col justify-center items-center`}
              onClick={() => setOpenNav(false)}>
              <NavLink to="/" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase ">
                  Home
                </li>
              </NavLink>
              <NavLink to="/about" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase">
                  about_us
                </li>
              </NavLink>
              <NavLink to="/gallery" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase">
                  gallery
                </li>
              </NavLink>
              <NavLink to="/contact" exact>
                <li className="p-5 font-semibold cursor-pointer uppercase">
                  contact_us
                </li>
              </NavLink>
            </ul>
          </div>
        )}
        {/* <div className="w-1/5 sm:flex items-center hidden sm:justify-center justify-end">
          <span className="flex justify-center items-center md:gap-3">
            <a className="p-2 ">Access Your Health Locker</a>
            <IconButton color="primary">
              <FacebookOutlinedIcon />
            </IconButton>
            <IconButton color="primary" className="w-fit rounded-lg">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary" className="w-fit rounded-lg">
              <TwitterIcon />
            </IconButton>
          </span>
        </div> */}
      </nav>
    </>
  );
};

export default Nav;
