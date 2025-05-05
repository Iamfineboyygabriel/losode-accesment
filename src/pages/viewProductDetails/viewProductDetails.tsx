import { useParams } from "react-router-dom";
import { products, taglines } from "../../components/utils/data";
import { slugify } from "../../components/utils/slugify";
import { Button, Typography } from "@material-tailwind/react";
import love from "../../assets/images/love.svg";
import { useState } from "react";
import banner from "../../assets/images/banner.png";

const ViewProductDetails = () => {
  const { slug } = useParams();
  const matchedProduct = products.find((p) => slugify(p.name) === slug);

  const [openSection, setOpenSection] = useState<string | null>(
    "Item Description"
  );

  const [currentTagline, setCurrentTagline] = useState(taglines[0]);

  const generateTagline = () => {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setCurrentTagline(taglines[randomIndex]);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const colorMap: Record<string, string> = {
    Black: "#000000",
    Gold: "#FFD700",
    White: "#FFFFFF",
    Brown: "#8B4513",
  };

  if (!matchedProduct) {
    return <div className="p-8">Product not found</div>;
  }

  const accordionSections = [
    { title: "Item Description", content: matchedProduct.itemDescription },
    { title: "Size And Fit", content: matchedProduct.sizeAndFit },
    { title: "Occasion", content: matchedProduct.occasion },
    {
      title: "Material And Care Info",
      content: matchedProduct.materialAndCareInfo,
    },
    { title: "Returns Policy", content: matchedProduct.returnsPolicy },
  ];

  return (
    <main className="px-4 sm:px-7 container mx-auto">
      <div className="flex flex-col md:flex-row md:mt-14 my-0 items-start gap-3">
        <div className="hidden md:block bg-black p-0.5 flex-shrink-0">
          <img
            src={matchedProduct.image}
            alt={matchedProduct.alt}
            className="w-[80px] h-[80px] object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src={matchedProduct.image}
            alt={matchedProduct.alt}
            className="w-full max-w-[400px] sm:max-w-[500px] mb-3 h-auto mx-auto"
          />
          <span className="text-xs sm:text-sm text-gray-300 font-medium">
            Item Code {matchedProduct?.itemCode}
          </span>
          <Typography className="uppercase mt-2 md:block hidden sm:mt-2 text-sm sm:text-md">
            see more items from{" "}
            <span className="underline">{matchedProduct.brand}</span>
          </Typography>
        </div>
        <div className="w-full flex flex-col">
          <Typography className="font-semibold md:no-underline underline mb-2 text-2xl sm:text-3xl">
            {matchedProduct.brand.toUpperCase()}
          </Typography>
          <Typography className="text-lg sm:text-xl mb-2 font-medium">
            {matchedProduct.name}
          </Typography>
          <div className="flex md:flex-row flex-col md:items-center gap-3 mb-4">
            <Typography className="text-sm sm:text-lg italic text-gray-600">
              "{currentTagline}"
            </Typography>
            <Button
              onClick={generateTagline}
              className="bg-black w-fit cursor-pointer text-white normal-case text-xs sm:text-sm py-1 px-3 rounded-md shadow-none"
            >
              Generate Tagline
            </Button>
          </div>
          <span className="text-lg sm:text-xl font-medium mb-4">
            ₦ {matchedProduct.price.toLocaleString()}
          </span>
          <div className="mb-4">
            <div className="font-normal text-base sm:text-lg mb-2">
              Colour: {matchedProduct.color}
            </div>
            <div className="flex gap-2 items-center">
              <div
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full cursor-pointer"
                style={{
                  backgroundColor: colorMap[matchedProduct.color] || "#ccc",
                  border:
                    matchedProduct.color?.toLowerCase() === "white"
                      ? "1px solid #ccc"
                      : "none",
                }}
                title={matchedProduct.color}
              />
            </div>
          </div>
          <div className="flex mb-6 sm:mb-8 w-full flex-col">
            <div className="flex justify-between">
              <span className="text-base sm:text-lg font-normal">Size</span>
              <span className="underline font-normal text-base sm:text-lg">
                View Size Guide
              </span>
            </div>
            <Button className="border text-black py-2 w-full  normal-case md:w-[150px] mt-2 rounded-none shadow-none border-gray-200">
              <Typography className="font-medium text-xs sm:text-sm cursor-pointer">
                {matchedProduct.size}
              </Typography>
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button className="bg-black normal-case cursor-pointer rounded-md text-center py-2 sm:py-3">
              <Typography className="text-white font-medium text-sm sm:text-base">
                Add to Bag
              </Typography>
            </Button>
            <Button className="flex items-center justify-start gap-2 px-4 py-2 sm:py-3 w-full border border-black bg-inherit shadow-none normal-case cursor-pointer">
              <img src={love} alt="love" className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-black font-medium flex-grow text-center text-sm sm:text-base">
                Save Item
              </span>
            </Button>
          </div>
          <div className="mt-4 sm:mt-6">
            {accordionSections.map((section, index) => (
              <div key={index}>
                <button
                  className="flex justify-between items-center w-full md:py-2 py-3 text-black font-semibold text-sm sm:text-base"
                  onClick={() => toggleSection(section.title)}
                >
                  <span>{section.title}</span>
                  <span>{openSection === section.title ? "–" : "+"}</span>
                </button>
                {openSection === section.title && (
                  <div className="pb-4 text-black text-sm sm:text-base">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="md:mt-13 mt-7">
        <img src={banner} alt="banner" className="w-full h-auto" />
      </section>
    </main>
  );
};

export default ViewProductDetails;
