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
    `https://plantogallery.com/cdn/shop/files/l-intro-1642621066_1600x.jpg?v=1722416609`,
    `https://img.freepik.com/premium-photo/pansy-flowering-plant-peat-pot-with-soil-gardening-equipment-wooden-desk_1272857-58566.jpg?w=1060`,
    `https://img.freepik.com/premium-photo/colorful-zinnia-flower_1234738-370614.jpg?w=1060`,
    `https://img.freepik.com/free-photo/modern-vases-with-green-pink-light-arrangement_23-2149835498.jpg?t=st=1724238374~exp=1724241974~hmac=382c79b2633f802ffe49631e4fe278b0426a88d907e7dc8703f6ac4db1168552&w=900`,
  ];

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {frontImg.map((item, i) => (
            <div className="w-full  bg-yellow-400" key={i}>
              <img className="w-full h-[500px]" src={item} alt="Flower" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
