import * as React from "react";
import card1 from "../../assets/images/card1.png";

export default function OverflowCard() {
  return (
    <div>
      <div className="w-1/3">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <img alt="..." src={card1} />
                <h5 className=" font-semibold text-xl text-blueGray-700">
                  rdtfyguhijopkl;tytguyhijk
                </h5>
                <span className="text-blueGray-400 uppercase font-semibold text-xs">
                  {/* {statTitle} */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <img alt="..." src={card1} />
                <h5 className=" font-semibold text-xl text-blueGray-700">
                  rdtfyguhijopkl;tytguyhijk
                </h5>
                <span className="text-blueGray-400 uppercase font-semibold text-xs">
                  {/* {statTitle} */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <img alt="..." src={card1} />
                <h5 className=" font-semibold text-xl text-blueGray-700">
                  rdtfyguhijopkl;tytguyhijk
                </h5>
                <span className="text-blueGray-400 uppercase font-semibold text-xs">
                  {/* {statTitle} */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
