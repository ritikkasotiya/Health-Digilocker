import React from "react";
import HeaderStatsTwo from "./HeaderStarsTwo";
import HeaderStats from "./HeaderStats";

const Physo = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [openTabs, setOpenTabs] = React.useState(11);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center m-5 text-4xl font-semibold text-[#346f75]">
          <h1>Psychometric Assessment</h1>
        </div>
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row m-auto w-1/2"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "bg-indigo-500 text-white active:bg-indigo-600 text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "text-white bg-indigo-500")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                Psychometric Career
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-indigo-500 text-white active:bg-indigo-600 text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  (openTab === 2
                    ? "text-white bg-red-600"
                    : "text-white bg-indigo-500")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> 21st Century
                Skills $ Learning Test
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="w-[60%] m-auto">
                    CareerGuide brings to you scientific and meticulously
                    designed Psychometric Assessments
                    <br />
                    <br />
                    to discover your true potential and interest ,learning
                    styles and skills to excel in 21st Century
                  </p>
                  <div>
                    <HeaderStats />
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p className=" m-auto w-[60%]">
                    CareerGuide brings to you scientific and meticulously
                    designed Psychometric Assessments
                    <br />
                    <br />
                    to discover your true potential and interest ,learning
                    styles and skills to excel in 21st Century
                  </p>
                  <div>
                    <HeaderStatsTwo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Physo;
