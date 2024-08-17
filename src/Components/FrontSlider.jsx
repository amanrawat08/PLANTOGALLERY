import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  const frontImg = [
    `https://img.freepik.com/free-photo/beautiful-bicolor-plant-details_23-2149362166.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid`,
    `https://plantogallery.com/cdn/shop/files/IMG_8953_2048x2048_f3b391cb-4829-4203-becf-dc2dbe9003fe_900x.jpg?v=1722505140`,
    `https://plantogallery.com/cdn/shop/files/l-intro-1642621066_1600x.jpg?v=1722416609`,
    `https://img.freepik.com/free-photo/colorful-flower-is-vase-with-yellow-center_1340-29676.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid`,
  ];

  return (
    <>
      <div className="slider-container mt-[118px]">
        <Slider {...settings}>
          {frontImg.map((item, i) => (
            <div className="w-full  bg-yellow-400">
              <img className="w-full h-[32rem]" src={item} alt="Flower" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
