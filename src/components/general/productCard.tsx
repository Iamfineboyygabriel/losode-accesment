import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

interface ProductCardProps {
  image: string;
  alt: string;
  brand: string;
  name: string;
  price: number;
}

const ProductCard = ({ image, alt, brand, name, price }: ProductCardProps) => {
  return (
    <Link to={`/product/${slugify(name)}`}>
      <div className="rounded-xl bg-white md:p-3 p-0 h-full flex flex-col">
        <div className="bg-gray-200 mb-3 rounded-t-xl overflow-hidden h-55 md:h-90 flex items-center justify-center">
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow md:px-0 px-2">
          <Typography className="uppercase font-medium text-md md:text-xl">
            {brand}
          </Typography>
          <Typography className="text-black text-sm font-medium">
            {name}
          </Typography>
        </div>
        <div className="mt-4 flex md:px-0 px-2 justify-between">
          <span className="underline font-medium text-sm">Shop Now</span>
          <span className="font-semibold">#{price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
