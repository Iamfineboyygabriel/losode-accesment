import Slider from "react-slick";
import hero1 from "../../assets/images/kicthen-lady.avif";
import hero2 from "../../assets/images/couch.avif";
import hero3 from "../../assets/images/chopper.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const MobileHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    customPaging: (i: number) => (
      <div
        style={{
          width: i === activeSlide ? "12px" : "8px",
          height: i === activeSlide ? "12px" : "8px",
          backgroundColor: "white",
          borderRadius: "50%",
          display: "inline-block",
          transition: "all 0.3s ease",
        }}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
  };

  const slides = [
    {
      image: hero1,
      subheadline: "Discover Timeless Homeware",
    },
    {
      image: hero2,
      subheadline: "Transform Your Home",
    },
    {
      image: hero3,
      subheadline: "Add Charm to Every Corner",
    },
  ];

  return (
    <div className="relative md:hidden block w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.subheadline}
              className="w-full h-[500px] object-cover md:h-[600px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileHero;
