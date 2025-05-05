import { Typography } from "@material-tailwind/react";
import nigeriaFlag from "../../src/assets/svg/NigerianFlag.svg";

const CategoryNav = () => {
  return (
    <div className="bg-black shadow-lg w-full py-3">
      <div className="container px-7 flex items-center gap-16 mx-auto">
        <div className="flex items-center gap-3">
          <div className="h-5 w-auto">
            <img src={nigeriaFlag} alt="nigerian_flag" className="h-full" />
          </div>
          <Typography className="font-normal text-sm text-white">
            NGN
          </Typography>
        </div>
        <div>
          <ul className="flex text-white gap-5">
            <li>
              <span className="font-semibold tracking-tight text-sm text-[#FD2512]">
                Sale
              </span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                New Arrivals
              </span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                Kitchen
              </span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                Bedroom
              </span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                Living Room
              </span>
            </li>
            <li>
              <span className="font-normal text-sm">Dining</span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                Bathroom
              </span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">Decor</span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                Lighting
              </span>
            </li>
            <li>
              <span className="font-normal text-sm">Outdoor</span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                Furniture
              </span>
            </li>
            <li>
              <span className="font-normal tracking-tight text-sm">
                Collections
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
