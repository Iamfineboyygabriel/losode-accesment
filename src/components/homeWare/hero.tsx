import hero from "../../assets/images/hero.webp";

const Hero = () => {
  return (
    <div className="md:mb-10 md:block hidden">
      <img src={hero} alt="frame" className="w-full h-auto" />
    </div>
  );
};

export default Hero;
