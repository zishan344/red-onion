import React from "react";

const Breakfast = ({ breakfast }) => {
  const { img, name, price, description } = breakfast;

  return (
    <div className=" text-center hover:shadow-2xl py-6 cursor-pointer rounded-2xl">
      <img className="w-1/2 mx-auto" src={img} alt="" />
      <h2 className="font-bold">{name}</h2>
      <h3 className="font-semibold text-gray-600">{description}</h3>
      <h3 className="font-bold ">${price}</h3>
    </div>
  );
};

export default Breakfast;
