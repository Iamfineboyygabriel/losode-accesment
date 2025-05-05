import { Button, Typography } from "@material-tailwind/react";
import frame from "../../assets/images/bed.avif";
import frame1 from "../../assets/images/pot.avif";
import frame2 from "../../assets/images/tv.avif";

const Substance = () => {
  return (
    <div className="py-4 sm:py-6">
      <div className="container px-4 sm:px-7 mx-auto">
        <section className="flex flex-col md:flex-row mb-6 sm:mb-10 gap-4 sm:gap-5 justify-between items-center">
          <div className="w-full md:w-[55%] h-[250px] sm:h-[400px] overflow-hidden order-2 md:order-1">
            <img
              src={frame}
              alt="Modern bedroom furniture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[45%] px-0 sm:px-8 order-1 md:order-2">
            <Typography className="text-2xl sm:text-3xl mb-3 sm:mb-4 font-semibold">
              Comfort with Character
            </Typography>
            <Typography className="font-medium mb-3 sm:mb-4 text-sm sm:text-md">
              This is not about trends, it's about creating spaces that reflect
              you, and living in them well. Make a shift in your environment, in
              perspective. Think natural materials, balanced composition, soft
              textures, and color that complements. Choose pieces that adapt
              with you - thoughtful, versatile, and unmistakably yours. Great
              design does not demand attention. It earns it
            </Typography>
            <span className="underline font-semibold text-sm sm:text-md cursor-pointer hover:text-gray-600">
              Explore New Arrivals
            </span>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 sm:gap-10 justify-between">
          <div className="w-full md:w-[45%] flex flex-col">
            <div className="h-[250px] sm:h-[400px] overflow-hidden mb-3 sm:mb-4">
              <img
                src={frame1}
                alt="Decorative ceramic pots"
                className="w-full h-full object-cover"
              />
            </div>
            <Typography className="uppercase font-semibold text-2xl sm:text-3xl mb-2 sm:mb-3">
              Stylish Ceramics, Artisan Crafted
            </Typography>
            <Typography className="text-sm sm:text-md text-black font-medium mb-3 sm:mb-4 flex-grow">
              Make a statement with our collection of ceramics that exude
              organic elegance and artistic flair. These handcrafted pieces
              blend timeless technique with modern aesthetics, ensuring your
              space stands out effortlessly
            </Typography>
            <Button className="text-sm md:block hidden sm:text-md w-xs cursor-pointer bg-black border border-transparent hover:border-black font-normal normal-case hover:bg-white hover:text-black text-white mt-auto transition-all duration-300 py-2 sm:py-3">
              Shop Ceramics
            </Button>
            <Typography className="underline md:hidden block font-medium py-1">
              Shop Ceramics
            </Typography>
          </div>

          <div className="w-full md:w-[55%] flex flex-col">
            <div className="h-[250px] sm:h-[400px] overflow-hidden mb-3 sm:mb-4">
              <img
                src={frame2}
                alt="Modern entertainment unit"
                className="w-full h-full object-cover"
              />
            </div>
            <Typography className="uppercase mb-2 sm:mb-3 text-2xl sm:text-3xl font-semibold">
              Sleek Entertainment Units, <br /> Modern Living
            </Typography>
            <Typography className="text-sm sm:text-md text-black font-medium mb-3 sm:mb-4 flex-grow">
              Transform your living space with our collection of units that
              combine functionality with refined design. These versatile pieces
              integrate seamlessly with contemporary interiors, ensuring your
              entertainment area is both practical and aesthetically pleasing
            </Typography>
            <Button className="text-sm md:block hidden sm:text-md w-xs cursor-pointer bg-black border border-transparent hover:border-black font-normal normal-case hover:bg-white hover:text-black text-white mt-auto transition-all duration-300 py-2 sm:py-3">
              Shop Furniture
            </Button>
            <Typography className="underline md:hidden block font-medium py-1">
              Shop Furniture
            </Typography>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Substance;
