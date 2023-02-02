import React from "react";
import whats from "../../assets/images/whats.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full new bg-gradient-to-r from-[#37af4b] to-[#1c74bb]  flex">
      <a
        href="https://wa.me/8287668958"
        className="w-20 fixed top-[600px] right-0"
      >
        <img src={whats} alt="" />
      </a>
      <div className="w-full sm:w-1/4 flex">
        <div className="w-auto h-fit text-lg p-3 text-white cursor-pointer rounded-lg ">
          <h1 className="font-semibold text-white">Who we are</h1>

          <ul>
            <li>About us</li>
            <li>Partner Program</li>
            <li>Partner OFFERS</li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-1/4  flex">
        <div className="w-auto h-fit text-lg p-3 text-white cursor-pointer rounded-lg ">
          <h1 className="font-semibold text-white">Usefull links</h1>
          <ul>
            <li>For You</li>
            <li>For Doctors</li>
          </ul>
          {/* <ul className="capitalize ">
            <NavLink to="/" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase ">
                Home
              </li>
            </NavLink>
            <NavLink to="/about" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                about_us
              </li>
            </NavLink>
            <NavLink to="/gallery" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                gallery
              </li>
            </NavLink>
            <NavLink to="/contact" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                contact_us
              </li>
            </NavLink>
          </ul> */}
        </div>
      </div>
      <div className="w-full sm:w-1/4  flex">
        <div className="w-auto h-fit text-lg p-3 text-white cursor-pointer rounded-lg ">
          <h1 className="font-semibold text-white">What's ABDM</h1>
          <ul>
            <li>ABDMI/ABHA</li>
            <li>Create Health ID</li>
          </ul>
        </div>
      </div>
      {/* <div className="w-1/4 flex">
        <h1 className="font-semibold text-white">Usefull links</h1>

        <div className="w-auto h-fit text-lg p-3 text-white cursor-pointer rounded-lg ">
          <ul>
            <li>ABDMI/ABHA</li>
            <li>Create Health ID</li>
          </ul>
        </div>
      </div> */}
      <div className="w-full sm:w-1/4  flex">
        <div className="w-auto h-fit text-lg p-3 text-white cursor-pointer rounded-lg ">
          <h1 className="font-semibold text-white">Other</h1>

          {/* <h1 className="font-semibold text-white">Usefull links</h1> */}
          <ul>
            <li>Tearms & Conditions</li>
            <li>Privacy Policy</li>

            <li>
              Add = DRiefcase Health-Tech Private Limited Kapoor Building,
              42/44,4th Marine Street, Near Metro Cinema, Dhobi Talao, Mumbai
              400002{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
