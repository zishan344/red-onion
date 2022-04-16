import React from "react";
import waiter from "../../../images/adult-blur-blurred-background-687824.png";
import people from "../../../images/architecture-building-city-2047397.png";
import chifCook from "../../../images/chef-cook-food-33614.png";
import icon1 from "../../../images/icons/icon1.png";
import icon2 from "../../../images/icons/icon2.png";
import icon3 from "../../../images/icons/icon3.png";
import SingalInfo from "../SingalInfo/SingalInfo";
const restorentInfo = [
  {
    id: 1,
    img: waiter,
    icon: icon1,
    title: "Fast Delevery",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio neque modi beatae cupiditate hic ea rerum nisi, autem, voluptate ipsam eligendi quaerat!",
  },
  {
    id: 2,
    img: chifCook,
    icon: icon2,
    title: "A Good Auto Responder",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio neque modi beatae cupiditate hic ea rerum nisi, autem, voluptate ipsam eligendi quaerat!",
  },
  {
    id: 3,
    img: people,
    icon: icon3,
    title: "Home delevery",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio neque modi beatae cupiditate hic ea rerum nisi, autem, voluptate ipsam eligendi quaerat!",
  },
];

const RestorentsInfo = () => {
  return (
    <div className="max-w-6xl mx-auto my-12">
      <div>
        <h5 className="font-semibold my-2 text-2xl">Why you choose us</h5>
        <p style={{ width: "600px", maxWidth: "100%" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad numquam
          tenetur ullam vel praesentium, consequatur labore, provident minus
          recusandae at tempore cupiditate?
        </p>
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {restorentInfo.map((info) => (
          <SingalInfo key={info.id} info={info}></SingalInfo>
        ))}
      </div>
    </div>
  );
};

export default RestorentsInfo;
