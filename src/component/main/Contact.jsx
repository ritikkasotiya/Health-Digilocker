import React from "react";
import Main_Slider from "../slider/Main_Slider";
import doc_1 from "../../assets/images/doc_1.png";
import doc_2 from "../../assets/images/doc_2.png";
import doc_3 from "../../assets/images/doc_3.png";
import doc_4 from "../../assets/images/doc_4.png";
import doc_5 from "../../assets/images/doc_5.png";
import doc_6 from "../../assets/images/doc_6.png";
import doc_7 from "../../assets/images/doc_7.png";

export const Contact = () => {
  return (
    <>
      {/* part 1 */}
      <div className="w-full h-3 m-3 font-semibold">
        <p className="text-sm">HOME / DOCTOR</p>
      </div>
      {/* part 1 end */}
      <div className="w-full">
        <Main_Slider />
      </div>

      {/* part 2 */}
      <div className="w-4/5 m-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-full md:w-1/2 justify-center flex">
          <img src={doc_1} alt="" />
        </div>
        <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
          <p className="py-4 text-[#6f889c] text-2xl">
            “ HEALTH DIGILOCKER understands the importance of documentation for
            your practice. But we also understand that the process cannot
            disrupt your practice.
          </p>
          <p className="py-4 text-[#6f889c] text-2xl">
            Hence, we have built{" "}
            <span className="text-[#1874b5]">"HEALTH DIGILOCKER Connect" </span>
            to work for you the way you currently do.”
          </p>
        </div>
      </div>
      {/* part 2 end */}
      {/* part 3 */}
      <div className="w-full">
        <h1 className="text-[#1874b5] text-4xl py-3 text-center">
          Easy to Create Records
        </h1>
        <div className="w-4/5 m-auto flex flex-col sm:flex-row">
          <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
            <p className="py-4 text-black text-4xl">Patient Health Card</p>
            <p className="py-4 text-[#6f889c] text-xl">
              Our comprehensive patient card conveniently features all of the
              patient"s relevant information in one place for increased
              efficiency and minimal distraction. And documenting your practice
              could never be easier.
            </p>
          </div>
          <div className="w-full sm:w-full md:w-1/2 justify-center flex">
            <img src={doc_2} alt="" />
          </div>
        </div>
      </div>

      {/* part 3 end */}
      <div className="w-4/5 m-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-full md:w-1/2 justify-center flex">
          <img src={doc_3} alt="" />
        </div>
        <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
          <p className="py-4 text-black text-4xl">Upload Using Camera</p>
          <p className="py-4 text-[#6f889c] text-xl">
            Upload documents using the in-app camera (and you don"t have to do
            it, we will train your assistant!)
          </p>
        </div>
      </div>
      <div className="w-4/5 m-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
          <p className="py-4 text-black text-4xl">
            Unique Patient Check-In Feature
          </p>
          <p className="py-4 text-[#6f889c] text-xl">
            Our unique system of e-forms allows patients to check-in with a lot
            of their medical history and current ailments so can save time in
            their documentation
          </p>
        </div>
        <div className="w-full sm:w-full md:w-1/2 justify-center flex">
          <img src={doc_4} alt="" />
        </div>
      </div>
      <div className="w-4/5 m-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-full md:w-1/2 justify-center flex">
          <img src={doc_5} alt="" />
        </div>
        <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
          <p className="py-4 text-black text-4xl">Upload By Email</p>
          <p className="py-4 text-[#6f889c] text-xl">
            Get your patients to e-mail you their records for your reference.
          </p>
        </div>
      </div>
      <div className="w-4/5 m-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
          <p className="py-4 text-black text-4xl">
            Intelligent Clinical Notes And E-Prescriptions Module
          </p>
          <p className="py-4 text-[#6f889c] text-xl">
            Generate clinical notes & e-prescriptions in a jiffy (typed or
            scanned - that"s your choice!)
          </p>
        </div>
        <div className="w-full sm:w-full md:w-1/2 justify-center flex">
          <img src={doc_6} alt="" />
        </div>
      </div>
      <div className="w-4/5 m-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-full md:w-1/2 justify-center flex">
          <img src={doc_7} alt="" />
        </div>
        <div className="w-full sm:w-full md:w-1/2 font-semibold justify-center  flex flex-col">
          <p className="py-4 text-black text-4xl">Custom Data Entry Services</p>
          <p className="py-4 text-[#6f889c] text-xl">
            You didn"t go into medicine to do data entry. So let us handle your
            record-keeping by indexing documents basis multiple parameters such
            as name of the patient, doctor, type, etc for you.
          </p>
        </div>
      </div>
    </>
  );
};
