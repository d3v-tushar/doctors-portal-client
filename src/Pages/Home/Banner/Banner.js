import React from "react";
import chair from '../../../assets/images/chair.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
//import bannerBg from '../../../assets/images/bg.png';

const Banner = () => {
  return (
    <div className="hero banner-bg p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="my-4 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
        <img
          src={chair}
          className="rounded-lg w-full shadow-2xl" alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
