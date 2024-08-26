import { Link } from "react-router-dom";
export default function CreateAccount({ isLogin, setIsLogin }) {
  return (
    <>
      {" "}
      <div className="absolute min-h-96 text-black w-80 flex flex-col justify-start p-5  items-center bg-gray-200 overflow-auto top-13 -left-40 z-20 rounded-lg">
        <div className="text-black text-lg">Create my account</div>
        <div className="text-gray-500 text-sm mt-4">
          Enter your e-mail and password:
        </div>
        <input
          type="text"
          placeholder="First Name"
          className="w-60 border outline-none border-gray-300 font-semibold px-2 py-1 mt-4 rounded "
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-60 border outline-none border-gray-300 font-semibold px-2 py-1 mt-4 rounded "
        />
        <input
          type="text"
          placeholder="Email"
          className="w-60 border outline-none border-gray-300 font-semibold px-2 py-1 mt-4 rounded "
        />
        <input
          type="text"
          placeholder="Password"
          className="w-60 border outline-none border-gray-300 font-semibold px-2 py-1 mt-4 rounded "
        />
        <button className="mt-5 border bg-green-600 w-60 hover:opacity-80 transition-all duration-500 px-3 py-2 text-white rounded">
          Login
        </button>
        <div className="mt-5 text-sm text-gray-500">
          New customer?{" "}
          <span
            onClick={() => setIsLogin(true)}
            className="text-[#008a00] hover:underline underline-offset-4 "
          >
            Create your account
          </span>
        </div>
        <div className=" text-sm text-gray-500 mt-2">
          Lost passowrd?{" "}
          <span className="text-[#008a00] hover:underline underline-offset-4 ">
            Recover password
          </span>
        </div>
      </div>
    </>
  );
}
