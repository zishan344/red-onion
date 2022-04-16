import React, { useState } from "react";
import useFood from "../../../hook/useFood";
import Breakfast from "../Breakfsast/Breakfast";

const Foods = () => {
  const [catagory, setCatagory] = useState("breakfast");
  const [foods, setFoods] = useFood(catagory);
  console.log(catagory);

  return (
    <div className="max-w-6xl mx-auto my-12">
      <ul className="flex justify-center gap-5 font-semibold mt-8">
        <li
          onClick={() => setCatagory("breakfast")}
          className="hover:text-orange-500"
        >
          Breakfast
        </li>
        <li
          onClick={() => setCatagory("lunch")}
          className="hover:text-orange-500"
        >
          Lunch
        </li>
        <li
          onClick={() => setCatagory("dinner")}
          className="hover:text-orange-500"
        >
          Dinner
        </li>
      </ul>
      <div className="md:grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {foods.map((food) => (
          <Breakfast key={food.id} breakfast={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
