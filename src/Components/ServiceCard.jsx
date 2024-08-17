import React from "react";
import { Ri24HoursFill, RiServiceLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiPlantFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
function ServiceCard() {
  return (
    <div className="w-[96%] h-80 flex flex-col  items-center  m-auto mt-14 bg-gray-300 rounded-1xl">
      <div className="text-5xl font-semibold mt-9">Service</div>
      <div className="mt-3 mb-9 text-lg text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ex ea
        quae quisquam dicta maxime delectus! Doloremque repellat harum
        temporibus.
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="bg-gray-400 hover:text-green-600 cursor-pointer  rounded-md  flex p-4 flex-col items-center justify-center hover:bg-gray-800 transition-all duration-500">
          <i className="text-7xl ">
            <RiCustomerService2Fill />
          </i>
          <span className="text-2xl">Customer Care</span>
        </div>
        <div className="bg-gray-400 hover:text-green-600 cursor-pointer  rounded-md  flex p-4 flex-col items-center justify-center hover:bg-gray-800 transition-all duration-500">
          <i className="text-7xl ">
            <MdOutlinePayment />
          </i>
          <span className="text-2xl">Secure Payment</span>
        </div>
        <div className="bg-gray-400 hover:text-green-600 cursor-pointer  rounded-md  flex p-4 flex-col items-center justify-center hover:bg-gray-800 transition-all duration-500">
          <i className="text-7xl ">
            <RiPlantFill />
          </i>
          <span className="text-2xl">Quality Products</span>
        </div>
        <div className="bg-gray-400 hover:text-green-600 cursor-pointer  rounded-md  flex p-4 flex-col items-center justify- hover:bg-gray-800 transition-all duration-500">
          <i className="text-7xl ">
            <Ri24HoursFill />
          </i>
          <span className="text-2xl">All India Delivery</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
