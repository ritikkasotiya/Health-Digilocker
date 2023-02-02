import React from "react";
import HeaderStatsTwo from "./HeaderStarsTwo";
import HeaderStats from "./HeaderStats";

const Services = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [openTabs, setOpenTabs] = React.useState(11);
  const [openTabsss, setOpenTabsss] = React.useState(31);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center m-5 text-4xl font-bold text-[#346f75]">
          <h1>Our Career Services</h1>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="land part">
              <ul className=" dis " role="tablist">
                <li className="px-2 align-middle text-xs p-2 padd bg-white ">
                  <a
                    className={
                      "text-xs font-bold uppercase py-3 round center-text lock border-2 border-current " +
                      (openTabsss === 31
                        ? "text-white bg-red-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTabsss(31);
                    }}
                    data-toggle="tab"
                    href="#link31"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                    Counsellors
                  </a>
                </li>
                <li className="px-2 align-middle text-xs p-2 padd bg-white ">
                  <a
                    className={
                      "text-xs font-bold uppercase py-3 round center-text lock border-2 border-current " +
                      (openTabsss === 32
                        ? "text-white bg-red-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTabsss(32);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> For
                    College
                  </a>
                </li>
                <li className="px-2 align-middle text-xs p-2 padd bg-white ">
                  <a
                    className={
                      "text-xs font-bold uppercase py-3 round center-text lock border-2 border-current " +
                      (openTabsss === 33
                        ? "text-white bg-red-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTabsss(33);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> For
                    College
                  </a>
                </li>
                <li className="px-2 align-middle text-xs p-2 padd bg-white ">
                  <a
                    className={
                      "text-xs font-bold uppercase py-3 round center-text lock border-2 border-current border-md " +
                      (openTabsss === 34
                        ? "text-white bg-red-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTabsss(34);
                    }}
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                    Class 11 & 12
                  </a>
                </li>
                <li className="px-2 align-middle text-xs p-2 padd bg-white ">
                  <a
                    className={
                      "text-xs font-bold uppercase py-3 round center-text lock border-2 border-current " +
                      (openTabsss === 35
                        ? "text-white bg-red-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTabsss(35);
                    }}
                    data-toggle="tab"
                    href="#link5"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                    Class 10
                  </a>
                </li>
                <li className="px-2 align-middle text-xs p-2 padd bg-white ">
                  <a
                    className={
                      "text-xs font-bold uppercase py-3 round center-text lock border-2 border-current " +
                      (openTabsss === 36
                        ? "text-white bg-red-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTabsss(36);
                    }}
                    data-toggle="tab"
                    href="#link6"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                    Class 8 & 9
                  </a>
                </li>
                <li className="px-2 align-middle text-xs p-2 padd bg-white ">
                  <a
                    className={
                      "text-xs font-bold uppercase py-3 round center-text lock border-2 border-current " +
                      (openTabsss === 37
                        ? "text-white bg-red-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTabsss(37);
                    }}
                    data-toggle="tab"
                    href="#link7"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                    Study Abroad
                  </a>
                </li>
              </ul>
            </div>
            <div className="land-book part">
              <div
                className={openTabsss === 31 ? "block" : "hidden"}
                id="link31"
              >
                <p className=" m-auto w-[60%]">
                  CareerGuide brings to you scientific and meticulously designed
                  Psychometric Assessments
                  <br />
                  to discover your true potential and interest ,learning styles
                  and skills to excel in 21st Century
                </p>
                <div className="w-full">
                  <HeaderStats />
                  <HeaderStatsTwo />
                </div>
              </div>
              <div
                className={openTabsss === 32 ? "block" : "hidden"}
                id="link32"
              >
                <p className=" m-auto w-[60%]">
                  CareerGuide brings to you scientific and meticulously designed
                  Psychometric Assessments
                  <br />
                  <br />
                  to discover your true potential and interest ,learning styles
                  and skills to excel in 21st Century Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Aliquam tempore ad amet sed
                  reiciendis totam beatae sapiente dignissimos quaerat, delectus
                  quasi veritatis atque fuga. Architecto atque quos molestiae
                  pariatur magnam.
                </p>
              </div>
            </div>
          </div>
          {/* <ul
            className=" dis flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row m-auto w-full"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "bg-white text-white text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-current " +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
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
                Counsellors
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white text-white text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-current " +
                  (openTab === 2
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>{" "}
                Working-Professionals
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white text-white text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-current " +
                  (openTab === 3
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> For College
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white text-white text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-current " +
                  (openTab === 4
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Class 11 & 12
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white text-white text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-current " +
                  (openTab === 5
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Class 10
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white text-white text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-current " +
                  (openTab === 6
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Class 8 & 9
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white text-white text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-current " +
                  (openTab === 7
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Study Abroad
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Services;
