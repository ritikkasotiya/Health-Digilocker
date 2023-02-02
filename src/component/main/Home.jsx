import { Button } from "@mui/material";
import React from "react";
import Main_Slider from "../slider/Main_Slider";
import TypeWriterEffect from "react-typewriter-effect";
import Popup from "reactjs-popup";
import NewCard from "../parts/NewCard";
import home1 from "../../assets/images/home1.png";
import frame from "../../assets/images/frame.png";
import logo2 from "../../assets/images/logo2.png";
import home3 from "../../assets/images/home3.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import home4 from "../../assets/images/home4.png";
import gp from "../../assets/images/gp.png";
import asa from "../../assets/images/as.png";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/imgg3.png";
import card3 from "../../assets/images/imgg2.jpg";
import home5 from "../../assets/images/home5.png";
import group from "../../assets/images/group.png";
import new1 from "../../assets/images/new1.jpeg";
import new2 from "../../assets/images/new2.jpeg";
import new3 from "../../assets/images/new3.jpeg";
import Footer from "../footer/Footer";

export const Home = () => {
  return (
    <>
      <div>
        {/* <Main_Slider /> */}
        {/* part 1 */}
        <div className="w-full h-3 m-3 font-semibold">
          <p className="text-sm">HOME</p>
        </div>
        {/* part 1 end */}
        {/* part 2 */}
        <div className="w-4/5 m-auto flex flex-col sm:flex-row">
          <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
            <h1 className="text-[#384d65] text-4xl py-3">
              Become ABDM-ready. Get 100% control of your health records
            </h1>
            <p className="py-4 text-[#6f889c]">
              Start by creating your ABHA on WhatsApp
            </p>
            <p className="py-4 text-[#1874b5]">
              Send Hi to 9090394943 and get your ABHA now
            </p>
          </div>
          <div className="w-full sm:w-full md:w-1/2 justify-center flex">
            <Popup trigger={<img src={new1} alt="" />} position=" center">
              <div className=" w-[400px] h-[150px] flex flex-col items-center justify-center text-center rounded-lg bg-[#dbebfd]">
                <form action="">
                  <input type="file" />
                  <button className="drop-shadow-2xl px-6 py-3 rounded-lg bg-gradient-to-r from-[#37af4b] to-[#1c74bb] new text-white m-4">
                    submit
                  </button>
                </form>
              </div>
            </Popup>
          </div>
        </div>
        {/* part 2 end */}
        {/* part 3  */}
        <div className="w-full new bg-gradient-to-r from-[#37af4b] to-[#1c74bb] font-bold flex justify-center items-center text-white text-lg h-28">
          <h1>Welcome to the smart way of digitally managing health records</h1>
        </div>
        {/* part 3 end */}
        {/* part 4 */}
        <div className="w-full">
          <div
            className="w-full  flex flex-row bg-no-repeat bg-cover h-80 absolute opacity-5"
            style={{ backgroundImage: `url(${frame})` }}></div>
          <div className="w-4/5 m-auto h-80 flex justify-center items-center flex-col">
            {/* <div className="w-full flex justify-center items-center">
              <img src={logo2} alt="" className="w-40 h-40 " />
            </div> */}
            <div className="w-full flex justify-center items-center font-bold text-2xl text-[#384d65]">
              <h1>
                Fully Integrated with Ayushman Bharat Digital Mission (ABDM)
              </h1>
            </div>
          </div>
        </div>
        {/* part 4 end */}
        {/* part 5 start */}
        <div className="w-full bg-gradient-to-r from-green-100 to-blue-100">
          <div className="w-4/5 m-auto flex flex-col sm:flex-row">
            <div className=" w-full sm:w-full md:w-1/2 font-semibold  ">
              <h1 className="text-[#384d65] text-4xl py-3 ">
                Get started in a jiffy
              </h1>

              <p className="py-4 text-[#1874b5]">
                Create your unique ABHA Address
              </p>
              <p className="py-4 ">
                With ABHA (previously called Health ID), you get a timeline view
                of your personal health records. ABHA Address tagged medical
                records enable easy access and sharing with Doctors,
                Hospitals/Clinics, Diagnostic Labs, TPAs, and Insurers.
              </p>
              <button className=" drop-shadow-2xl px-6 py-3 rounded-lg bg-gradient-to-r from-[#37af4b] to-[#1c74bb] new text-white">
                Create ABHA Registration
              </button>
              <p className="py-4 ">
                You only need your mobile number or Aadhaar.
              </p>
              <button className=" drop-shadow-2xl px-6 py-3 rounded-lg text-blue-800 bg-white ">
                Learn more about ABHA
              </button>
            </div>
            <div className="w-full sm:w-full md:w-1/2 flex justify-center">
              <img src={new2} alt="" />
            </div>
          </div>
        </div>
        {/* part 5 end */}
        {/* part 6 start  */}
        <div className="w-full bg-[#f3f8fb] p-10">
          <div className="w-4/5 m-auto flex flex-col sm:flex-row justify-center items-center text-center">
            <div className="w-1/3 flex items-center flex-col">
              <div className="rounded-[50%] p-4 bg-white">
                <img src={img1} alt="" className="w-10" />
              </div>
              <h1>Link your ABHA Address with DRIEFCASE Health Locker</h1>
            </div>
            <div className="w-1/3 flex items-center flex-col ">
              <div className="rounded-[50%] p-4 bg-white">
                <img src={img2} alt="" className="w-10" />
              </div>

              <h1>Choose with whom you want to share your medical records</h1>
            </div>
            <div className="w-1/3 flex items-center flex-col">
              <div className="rounded-[50%] p-4 bg-white">
                <img src={img3} alt="" className="w-10" />
              </div>

              <h1>Update existing medical records with ABHA Address</h1>
            </div>
          </div>
        </div>
        {/* part 6 end  */}
        {/* part 7 start */}
        <div className="w-full  flex flex-col sm:flex-row">
          <div className="w-full sm:w-full md:w-1/2">
            <img src={new3} alt="" />
          </div>
          <div className=" w-full sm:w-full md:w-1/2 font-semibold  ">
            <h1 className="text-[#384d65] text-4xl py-3 ">
              Our digital health locker is free for lifetime
            </h1>

            <p className="py-4 text-[#6f889c]">
              Store & organize all your medical records at a single place. Share
              your records with health care providers effortlessly.
            </p>
            <p className="py-4 text-xl">
              Supports records of all formats <br />
              <small className="text-[#6f889c]">
                Radiology, pathology and laboratory reports
              </small>
            </p>
            <p className="py-2 text-xl">
              Auto-tagging & Indexing <br />
              <small className="text-[#6f889c]">
                Locate & retrieve any record in under ten seconds
              </small>
            </p>
            <p className="py-2 text-xl">
              Upload records via Health Digilocker Email
              <br />
              <small className="text-[#6f889c]">
                Records emailed are automatically uploaded in to your account
              </small>
            </p>

            <div className="w-4/5 m-auto flex p-10">
              <div className="">
                <img src={gp} alt="" />
              </div>
              <div className="">
                <img src={asa} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* part 7 end */}
        {/* part 8 start  */}
        <div className="w-full bg-[#f3f8fb] p-10">
          <div className="w-4/5 m-auto flex flex-col sm:flex-row justify-center items-center text-center">
            <h1 className="text-2xl font-semibold text-[#384d65]">
              <small className="text-[#1874b5]">One Health Digilocker</small>{" "}
              account for your entire{" "}
              <small className="text-[#1874b5]">family’s health</small> records
            </h1>
          </div>
        </div>
        {/* part 8 end  */}
        {/* part 9 start */}
        <div className="w-full new bg-gradient-to-r from-[#37af4b] to-[#1c74bb] font-bold flex justify-center items-center text-white text-lg p-10">
          <div className=" w-1/3 bg-white rounded-lg justify-center items-center flex flex-col m-2">
            <div className="bg-white m-5">
              <img src={card1} alt="" />
              <h1 className="text-[#384d65]">Scan at Your Doorstap</h1>
              <h1 className="text-[#6f889c]">Scan at Your Doorstap</h1>
            </div>
          </div>
          <div className=" w-1/3 bg-white rounded-lg justify-center items-center flex flex-col m-2">
            <div className="bg-white m-5">
              <img src={card3} alt="" />
              <h1 className="text-[#384d65]">Scan at Your Doorstap</h1>
              <h1 className="text-[#6f889c]">Scan at Your Doorstap</h1>
            </div>
          </div>
          <div className=" w-1/3 bg-white rounded-lg justify-center items-center flex flex-col m-2">
            <div className="bg-white m-5">
              <img src={card3} alt="" />
              <h1 className="text-[#384d65]">Scan at Your Doorstap</h1>
              <h1 className="text-[#6f889c]">Scan at Your Doorstap</h1>
            </div>
          </div>
        </div>
        {/* part 9 end */}
        {/* part 10 start */}
        <div className="w-full">
          <div className="w-4/5 m-auto  flex flex-col sm:flex-row">
            <div className=" w-full sm:w-full md:w-1/2 font-semibold  ">
              <p className="py-4 text-[#1874b5]">DRIEFCASE VISION</p>
              <h1 className="text-[#384d65] text-4xl py-3 ">
                Building Integrated Digital HealthTech Infrastructure for India
              </h1>

              <p className="py-4 text-xl text-[#6f889c]">
                With our unrivaled health-tech expertise in Public Health Record
                domain, we are building a suite of plug & play ABDM-linked
                applications for both Health Information Providers & Users.
              </p>

              <div className="w-4/5 m-auto flex p-2">
                <div className="">
                  <img src={gp} alt="" />
                </div>
                <div className="">
                  <img src={asa} alt="" />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2">
              <img src={home5} alt="" />
            </div>
          </div>
        </div>
        {/* part 10 end */}
        {/* part 11 start */}
        <div className="w-4/5 m-auto">
          <h1 className="text-[#384d65] text-4xl text-center font-semibold p-6">
            <b>Empowering</b> Digital India to manage <b>consent</b>-based{" "}
            <b>health records</b>
            easily
          </h1>
          <div className="">
            <img src={group} alt="" />
          </div>
        </div>
        {/* part 11 end */}
        {/* <Footer /> */}
      </div>
    </>
  );
};
