import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
// import AwsSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import first from "../../assets/images/slid1.png";
import second from "../../assets/images/slid2.png";
import third from "../../assets/images/slid3.png";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Main_Slider = () => {
  return (
    <>
      <AutoplaySlider
        cancelOnInteraction={false}
        interval={3000}
        play={true}
        className=" h-[80vh] max-w-full">
        <div data-src={first} />
        <div data-src={second} />
        <div data-src={third} />
      </AutoplaySlider>
    </>
  );
};

export default Main_Slider;
