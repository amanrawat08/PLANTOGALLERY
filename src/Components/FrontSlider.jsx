import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function FrontSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    /*   slidesToScroll: 1, */
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  const frontImg = [
    `https://img.freepik.com/free-photo/beautiful-bicolor-plant-details_23-2149362166.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid`,
    `https://plantogallery.com/cdn/shop/files/IMG_8953_2048x2048_f3b391cb-4829-4203-becf-dc2dbe9003fe_900x.jpg?v=1722505140`,
    `https://plantogallery.com/cdn/shop/files/l-intro-1642621066_1600x.jpg?v=1722416609`,
    `https://img.freepik.com/free-photo/colorful-flower-is-vase-with-yellow-center_1340-29676.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid`,
  ];
  const FrontImg = [];
  return (
    <>
      <div className="slider-container mt-[118px]">
        <Slider {...settings}>
          {frontImg.map((item, i) => (
            <div className="w-screen  bg-yellow-400">
              <img className="w-screen h-[32rem]" src={item} alt="Flower" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-2 rounded bg-slate-500 w-[96%] m-auto min-h-[450px] flex items-center flex-wrap overflow-hidden    justify-center  ">
        <div className=" w-96 h-[418px] rounded transition-all   overflow-hidden">
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
