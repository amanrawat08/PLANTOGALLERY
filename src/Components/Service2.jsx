import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillCartDashFill } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
function Service2() {
  const serviceData = [
    {
      name: "100% Secure payments",
      img: <RiSecurePaymentLine />,
      disc: "Visa, Mastercard, Amex, Paypal",
    },
    {
      name: "All India Delivery",
      img: <TbTruckDelivery />,
      disc: "From us to you, hassle-free",
    },
    {
      name: "Satisfied or refunded",
      img: <BsFillCartDashFill />,
      disc: "Not happy? We have your back.",
    },
    {
      name: "We are available 24/7",
      img: <TfiHeadphoneAlt />,
      disc: "Contact us by chat, mail, phone",
    },
  ];
  return (
    <div className="w-[89%] flex flex-wrap justify-center gap-14 mt-5 min-h-[140px]  m-auto">
      {serviceData.map((item, i) => (
        <div className="flex justify-center items-center" key={i}>
          <div className="text-3xl ">{item.img}</div>
          <div className="ml-4">
            <div className="font-bold">{item.name}</div>
            <div className="text-gray-500">{item.disc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service2;
