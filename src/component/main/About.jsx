import React from "react";
import Main_Slider from "../slider/Main_Slider";
import lindin from "../../assets/images/linkedin_filled.png";
import ritik from "../../assets/images/ritik.jpg";

export const About = () => {
  return (
    <>
      {/* <div className="w-full">
    <Main_Slider />
    </div> */}
      <div className="w-full h-3 m-3 font-semibold">
        <p className="text-sm">HOME / ABOUT US</p>
      </div>
      {/* part 2 */}
      <div className="w-[90%] m-auto ">
        <h1 className="text-[#384d65] text-4xl py-3 text-center">Who We Are</h1>
        <p className="text-[]">
          HEALTH DIGILOCKER is India’s first ABDM (Ayushman Bharat Digital
          Mission) integrated PHR platform, enabling the user and their family
          to securely maintain and access their medical records anytime, from
          anywhere using HEALTH DIGILOCKER Health Locker app.
        </p>
        <p>
          HEALTH DIGILOCKER also has an inter-connected highly personalized
          clinic management system for Doctors and Providers – HEALTH DIGILOCKER
          Connect – to help bring operational efficiency and work towards the
          common goal of improved health outcomes for all. HEALTH DIGILOCKER
          Connect, is a comprehensive practice management platform for
          individual doctors, polyclinics and small hospitals that helps improve
          productivity for Doctors.
        </p>

        <p>
          HEALTH DIGILOCKER , our patient-centric platform, has an unmatched
          focus on personal health records management that provides ease of
          upload and ensures fast retrieval in a matter of seconds. This can be
          very critical during a crisis or when managing health remotely.
        </p>
        <p>
          At HEALTH DIGILOCKER we go above and beyond to help our users achieve
          better health outcomes. We are the only platform in India that
          provides Scan at Home services to help digitize your medical history.
          On request our teams can come to your home and scan all your records
          including radiology reports like X-rays and MRIs.
        </p>
      </div>
      {/* part 2 end */}
      {/* part 3 */}
      <div className="w-full m-auto bg-[#f3f8fb] p-5 ">
        <h1 className="text-[#384d65] text-4xl py-3 text-center">Our Vision</h1>
        <p className="text-center text-3xl">
          ‶Our vision is to bridge the information gap between patients and{" "}
          <br />
          caregivers and through them, other stakeholders in the ecosystem, such{" "}
          <br />
          as pharma companies, insurance companies and the government.″
        </p>
      </div>
      {/* part 3 end */}
      {/* part 3 */}
      <div className="w-full m-auto bg-white p-5 ">
        <h1 className="text-black text-4xl py-3 text-center">
          Meet the founder
        </h1>
        <div className="w-[60%] m-auto flex justify-center items-center">
          <div className="w-1/2  flex flex-col items-center justify-center text-center ">
            <img src={ritik} className="rounded-full p-5" alt="" />
            <h3>Ritik</h3>
            <small>Founder</small>
            <a href="https://www.linkedin.com/in/ritik-kasotiya-1636bb201/">
              <img src={lindin} className="w-[40px]" alt="" />
            </a>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center text-center">
            <img src={ritik} className="rounded-full p-5" alt="" />
            <h3>Ritik</h3>
            <small>Founder</small>
            <a href="https://www.linkedin.com/in/ritik-kasotiya-1636bb201/">
              <img src={lindin} className="w-[40px]" alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* part 3 end */}
    </>
  );
};
