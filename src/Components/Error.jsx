import React from "react";

const Error = () => {
  return (
    <div className="w-[70vw] m-auto h-[70vh] flex items-center flex-col justify-center">
      <img
        className="h-[50vh]"
        src="https://img.freepik.com/premium-vector/disappointed-expression-sunflower-pot-cartoon_152558-50745.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
        alt=""
      />
      <div className="text-6xl font-bold font-sans">404 Error</div>
      <div className="mt-6 text-gray-700 text-2xl">Page Not Found </div>
    </div>
  );
};
export default Error;
