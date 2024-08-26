import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import { useState } from "react";
export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <div className="absolute min-h-96 text-black w-80 flex flex-col  justify-evenly p-5  items-center bg-gray-200 overflow-auto top-13 -left-40 z-20 rounded-lg">
          <div className="text-black text-lg">Login Account</div>
          <div className="text-gray-500 text-sm mt-4">Enter your Details:</div>
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
              onClick={() => setIsLogin(false)}
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
      ) : (
        <CreateAccount isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  );
}
