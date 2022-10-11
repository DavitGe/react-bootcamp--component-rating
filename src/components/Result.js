import React from "react";
import thanks from "../images/illustration-thank-you.svg";

const Result = ({ rate }) => {
  return (
    <div className="bg-white rounded-3xl h-[416px] overflow-hidden w-[412px] mobile:w-[327px] mobile:h-[360px] gradient-popup pl-8 pr-[39px] flex flex-col items-center mobile:px-6">
      <img
        src={thanks}
        alt="thanks"
        className="mt-[45px] mobile:mt-[34px] mb-8 mobile:mb-6 mobile:w-[144px] mobile:h-[96px]"
      />
      <span className="text-orange bg-darkBlue px-5 mobile:[px-3] py-2 text-[15px] mobile:text-[14px] font-normal rounded-[22.5px]">
        You selected {rate} out of 5
      </span>
      <h2 className="text-white font-bold text-3xl mobile:text-2xl mt-8 mobile:mt-[29px]">
        Thank you!
      </h2>
      <p className="text-basicText mt-[7px] mb-6 text-[15px] mobile:text-[14px] text-center mt-[10px] mobile:mt-[7px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Result;
