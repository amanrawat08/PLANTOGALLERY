import React from "react";
import { Ri24HoursFill, RiServiceLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiPlantFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
function ServiceCard() {
  const serivcedata = [
    {
      name: "Customer Care",
      img: <RiCustomerService2Fill />,
    },
    {
      name: "Sercurity Payment",
      img: <MdOutlinePayment />,
    },
    {
      name: "Quality Products",
      img: <RiPlantFill />,
    },
    {
      name: "Best Dilvery",
      img: <TbTruckDelivery />,
    },
  ];
  return (
    <div className="w-[96%]  min-h-80 flex flex-col  items-center m-auto mt-14 bg-gray-300 rounded-1xl py-10">
      <div className="text-5xl font-semibold mt-9">Service</div>
      <div className="mt-3 mb-9 text-lg text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ex ea
        quae quisquam dicta maxime delectus! Doloremque repellat harum
        temporibus.
      </div>
      <div className="flex items-center justify-center gap-6  flex-wrap">
        {serivcedata.map((item, i) => (
          <div className=" w-[150px] h-[150px] text-green-600 cursor-pointer  rounded-md  flex p-4 flex-col items-center justify-center bg-gray-800 transition-all duration-500">
            <i className="text-7xl ">{item.img}</i>
            <span className="text-1xl text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
