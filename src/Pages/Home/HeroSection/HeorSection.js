import React from "react";
import "./HeroSection.css";
const HeorSection = () => {
  return (
    <div className="hero flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold mb-6">
          Best Food waiting for your belly
        </h1>
        <div className="text-center relative ">
          <input
            className="w-4/5 outline-none  h-12 rounded-full px-4 text-center "
            type="text"
            name=""
            id=""
            placeholder="search food items"
          />
          <button className="absolute  px-8 right-0 py-3 bg-red-600 rounded-full text-1xl font-semibold text-white hover:bg-red-500">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeorSection;
