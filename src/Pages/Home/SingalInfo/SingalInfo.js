import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const SingalInfo = ({ info }) => {
  const { title, img, description, icon } = info;
  return (
    <div className=" py-6 cursor-pointer rounded-2xl">
      <img src={img} alt="" />

      <div className="relative px-10 my-5">
        <img src={icon} alt="" className="absolute w-9 left-0 top-0" />
        <h2 className="font-semibold my-3">{title}</h2>
        <p>{description}</p>
        <button className="flex items-center gap-4">
          <span className="text-blue-600">see more</span>
          <BsFillArrowRightCircleFill className="text-green-600" />
        </button>
      </div>
    </div>
  );
};

export default SingalInfo;
