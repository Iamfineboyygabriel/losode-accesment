import { Button, Typography } from "@material-tailwind/react";
import hero from "../../assets/images/contemporary.webp";

const ContemporaryStyle = () => {
  return (
    <div className="container mx-auto px-4 sm:px-7 relative my-4 sm:my-8">
      <div className="relative">
        <img
          src={hero}
          alt="Contemporary style fashion models"
          className="w-full h-auto object-cover min-h-[300px] sm:min-h-[400px] md:min-h-[500px] brightness-90 contrast-95"
        />

        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end text-center px-3 sm:px-4 pb-6 sm:pb-8 md:pb-12 z-10">
          <Typography className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4 tracking-wide">
            HARMONIOUS BLEND OF MODERN & HERITAGE
          </Typography>
          <Typography className="text-white font-medium mb-4 sm:mb-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Discover artisanal homewares blending modern design with traditional
            craft. Each piece showcases cultural heritage for contemporary
            spaces.
          </Typography>
          <Button
            className="bg-white text-base sm:text-lg w-auto text-black cursor-pointer  normal-case py-2 sm:py-3 px-6 sm:px-8 font-medium hover:bg-gray-100 transition-colors duration-300"
            ripple={true}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContemporaryStyle;
