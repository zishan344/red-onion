import { useEffect, useState } from "react";

const useFood = (foodType) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => {
        const filterFood = data.filter((food) => food.catagory == foodType);
        setFoods(filterFood);
      });
  }, [foodType]);
  return [foods, setFoods];
};

export default useFood;
