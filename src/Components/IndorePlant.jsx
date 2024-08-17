import React from "react";

function IndorePlant() {
  return (
    <>
      <div className="mt-2 rounded bg-slate-500 w-[96%] m-auto min-h-[450px] flex items-center flex-wrap overflow-hidden    justify-center  ">
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          className=" w-96 h-[418px]  rounded transition-all   overflow-hidden"
        >
          <img
            className=" w-96 h-[418px] rounded transition-all hover:scale-150 cursor-pointer"
            src="https://img.freepik.com/premium-photo/plant-is-white-pot-table_1140440-25557.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
          />
        </div>

        <div className="w-[800px] p-10 bg-slate-500  flex flex-col">
          <div className="font-bold text-2xl">Indoor Plant Collection</div>
          <div className="  mt-3">
            <div className="mt-1">
              Scientific support for phytoremediation — that’s the word for
              plants scrubbing contaminants from the air — usually begins with a
              NASA study conducted in the 1980s.
            </div>
            <div className="mt-1">
              Researchers then were looking for ways to improve the air quality
              in a sealed spacecraft, and they concluded that the roots and soil
              of houseplants reduced airborne volatile organic compounds (VOCs)
              significantly.
            </div>
            <div className="mt-1">
              Since those early studies, researchers have both confirmed those
              findings and called them into questionTrusted Source.
            </div>
            <div className="mt-1">
              Recent findings suggest that you’d have to shelter a large number
              of plants to equal the air purifying efficiency of modern
              biofilters and other technologies.
            </div>
          </div>
          <button className="text-sm bg-yellow-600 transition-all hover:bg-black hover:text-yellow-500  mt-5 w-28 rounded px-2 py-2 font-bold">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}

export default IndorePlant;
