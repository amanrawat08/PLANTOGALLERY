import GoHome from "./GoHome";
export default function Affiates() {
  return (
    <div className=" w-[70vw] p-5 mt-6  m-auto  text-gray-600 flex flex-col gap-5 justify-evenly">
      <div className=" text-center text-3xl text-black font-semibold">
        Affiates
      </div>
      <div>
        Being a Affiliate Marketer is Very Cost Effective. You Don't Have to Put
        Much Money In An Affiliate Program in Order to Gain Lot.
      </div>
      <div className="text-center">
        <button className="bg-green-600 px-9 py-2 rounded-sm hover:opacity-90 transition-all duration-500 text-white">
          Register
        </button>
      </div>
      <GoHome />
    </div>
  );
}
