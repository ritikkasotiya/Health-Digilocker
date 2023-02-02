import React from "react";
// src images import
import book1 from "../../assets/images/boy.jpg";
import CardStatsTwo from "./CardStatsTwo";
// components

export default function HeaderStatsTwo() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-white-600 pb-4 pt-12 flex">
        <div className="px-4 md:px-10 mx-auto w-full mb-6">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStatsTwo
                  img={book1}
                  statSubtitle="IDEAL CAREER TEST™"
                  statTitle="ZOOM - STORYBOOK"
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Nursery"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  statButtonLink="/auth/register"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStatsTwo
                  img={book1}
                  statSubtitle="SKILL BASED TEST FOR 9TH"
                  statTitle="ZOOM - STORYBOOK"
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Nursery"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  statButtonLink="/auth/register"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStatsTwo
                  img={book1}
                  statSubtitle="STREAM SELECTOR™"
                  statTitle="ZOOM - STORYBOOK"
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Nursery"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  statButtonLink="/auth/register"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStatsTwo
                  img={book1}
                  statSubtitle="ENGINEERING BRANCH SELECTOR"
                  statTitle="ZOOM - STORYBOOK"
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Nursery"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  statButtonLink="/auth/register"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
