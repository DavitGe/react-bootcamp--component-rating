import React from "react";
import star from "../images/icon-star.svg";

const Rate = ({ setRate, onSubmit }) => {
  const rateStyles =
    "text-grey text-base mobile:text-[14px] font-bold bg-darkBlue rounded-full h-[51px] w-[51px] mobile:h-[42px] mobile:w-[42px] hover:bg-grey hover:text-white border-none active:bg-orange active:text-white";

  const rateClickHandler = (e) => {
    setRate(Number(e.target.innerText));
    const active = document.getElementsByClassName("active")[0];
    if (active) {
      active.classList.toggle("active");
    }
    e.currentTarget.classList.toggle("active");
  };
  return (
    <div className="bg-white rounded-3xl h-[416px] w-[412px] gradient-popup pl-8 pr-[39px] mobile:w-[327px] mobile:h-[360px] mobile:px-6">
      <div className="bg-darkBlue flex rounded-full w-max mt-8 mobile:mt-6 mb-[30px] mobile:mb-4">
        <img src={star} alt="star" className="p-4 flex" />
      </div>
      <h1 className="text-3xl text-white mobile:text-2xl font-bold">
        How did we do?
      </h1>
      <p className="text-basicText mt-[7px] mobile:mt-[10px] mb-6 text-[15px] mobile:text-[14px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between">
        <button onClick={rateClickHandler} className={rateStyles}>
          1
        </button>
        <button onClick={rateClickHandler} className={rateStyles}>
          2
        </button>
        <button onClick={rateClickHandler} className={rateStyles}>
          3
        </button>
        <button onClick={rateClickHandler} className={rateStyles}>
          4
        </button>
        <button onClick={rateClickHandler} className={rateStyles}>
          5
        </button>
      </div>
      <button
        onClick={onSubmit}
        className="w-full h-[45px] bg-orange mt-8 mobile:mt-6 mobile:text-[14px] text-white tracking-[2px] border-none outline-none appearance-none rounded-[22.5px] active:text-orange active:bg-white hover:opacity-90"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Rate;
