import { FaCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  const socialLink = [
    {
      color: "blue",
      img: <FaFacebook />,
    },
    {
      color: "green",
      img: <FaWhatsapp />,
    },
    {
      color: "blue",
      img: <CiLinkedin />,
    },
    {
      color: "Black",
      img: <FaGithubAlt />,
    },
    {
      color: "red",
      img: <CiYoutube />,
    },
  ];
  return (
    <footer className="w-[100%] mt-10 py-3 min-h-[50vh] flex flex-col justify-evenly text-gray-500">
      <div className="flex flex-wrap items-start justify-evenly">
        <div className="m-4">
          <div className="mb-2 text-[#1e2d7d]">ABOUT THE SHOP</div>
          <div className="w-72">
            We are specializes in providing indoor and outdoor plants for home
            decor and business spaces. Our aim is to bring one stop online shop
            with ‘Best in Class’ services for our customers at affordable
            prices.
          </div>
        </div>
        <div className="m-4">
          <div className="mb-2 text-[#1e2d7d]">Footer Menu</div>
          <ul>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Search
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Contract us
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Affiates
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Refund policy
            </li>
          </ul>
        </div>
        <div className="m-4">
          <div className="mb-2 text-[#1e2d7d]">INFORMATION</div>
          <ul>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Shipping Policy
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Terms and condition
            </li>
            <li className="hover:text-red-600 py-1 transition-all duration-300 cursor-pointer">
              Refund policy
            </li>
          </ul>
        </div>
        <div className="w-72 flex flex-col m-4">
          <div className="mb-2 text-[#1e2d7d]">NEWSLETTER</div>
          <div>
            Subscribe to get notified about product launches, special offers and
            news.
          </div>

          <div class="flex items-center w-full mt-7 justify-center">
            <div class="relative w-full">
              <input
                id="username"
                name="username"
                type="text"
                className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-green-700 transition-colors focus:outline-none peer bg-inherit w-full"
              />
              <label
                for="username"
                className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-700"
              >
                Name
              </label>
            </div>
          </div>
          <button className="mt-4 text-white py-2 rounded-sm px-4 bg-[#ee0000]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 justify-around">
        <div className="flex items-center">
          <FaCopyright /> 2024 plantogallery.com
        </div>
        <div>
          <span>Follow us:</span>
          <ul className="flex items-center justify-center ">
            {socialLink.map((item, i) => (
              <li className="m-1 text-2xl p-1 rounded-lg hover:text-white cursor-pointer transition-all duration-500 hover:bg-black">
                {item.img}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
