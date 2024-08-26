import { CiSearch } from "react-icons/ci";
import GoHome from "./GoHome";
export default function Search() {
  return (
    <div className=" w-[70vw] p-5 min-h-[50vh]   m-auto  text-gray-600 flex flex-col gap-5 items-center justify-evenly">
      <div className=" text-center text-3xl text-black font-semibold">
        Search
      </div>
      <div>Use the search bar below to find products:</div>
      <div className="flex items-center justify-start flex-wrap">
        <input
          placeholder="Enter Your Plant.."
          class="bg-gray-100 text-gray-800 border-0  p-2  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-green-600 transition ease-in-out duration-150 outline-none py-2 text-lg px-1   xl:w-[450px]  "
          type="text"
        />

        <i className=" transition-all  p-3  rounded  text-2xl cursor-pointer text-white  bg-[#008a00] ">
          <CiSearch />
        </i>
      </div>
      <GoHome />
    </div>
  );
}
