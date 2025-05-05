import { Typography } from "@material-tailwind/react";
import logo from "../assets/images/losode-logo.png";
import { Link } from "react-router-dom";
import { QuickLinks, Services } from "../components/utils/data";
import master from "../../src/assets/images/masterCard.svg";
import flutter from "../../src/assets/images/flutter.svg";
import paypal from "../../src/assets/images/paypal.svg";
import visa from "../../src/assets/images/visa.svg";
import facebook from "../../src/assets/images/instagram.svg";
import instagram from "../../src/assets/images/facebook.svg";
import youtube from "../../src/assets/images/youtube.svg";
import linkdn from "../../src/assets/images/linkdln.svg";
import x from "../../src/assets/images/x.png";
import losode from "../../src/assets/images/losode_vector.svg";

const MobileFooter = () => {
  return (
    <footer className="bg-black md:hidden block text-white mt-10">
      <div className="py-8 container px-4 mx-auto grid grid-cols-2  gap-3">
        <div className="flex flex-col gap-6">
          <Link to="/">
            <img src={logo} alt="logo" className="max-w-[80px]" />
          </Link>
          <div className="flex flex-col gap-3">
            <div>
              <Typography className="font-normal text-[#B2B2B2] text-xs">
                Email Us:
              </Typography>
              <Typography className="font-medium text-xs">
                hello@losode.com
              </Typography>
            </div>
            <div>
              <Typography className="font-normal text-[#B2B2B2] text-xs">
                Contact us:
              </Typography>
              <Typography className="font-medium text-xs">
                +2342013306011
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography className="font-medium text-white text-lg">
            Stay in touch
          </Typography>
          <div className="grid w-full grid-cols-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-xs py-2 bg-black text-white border border-white focus:outline-none focus:border-white w-full"
            />
            <button className="bg-white px-2 w-fit text-black cursor-pointer text-xs font-medium py-2 hover:bg-gray-200 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <Typography className="font-medium text-[#B2B2B2] text-xs">
            Keep in touch with news, promotions, and offers from us
          </Typography>
        </div>

        <div className="col-span-2 w-full">
          <Typography className="text-white whitespace-nowrap mb-5 font-medium text-lg">
            Useful Information
          </Typography>
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              {QuickLinks.map((links, index) => (
                <div key={index}>
                  <Link to={links.to}>
                    <Typography className="font-medium text-[#B2B2B2] text-xs hover:underline">
                      {links.label}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {Services.map((service, index) => (
                <div key={index}>
                  <Link to={service.to}>
                    <Typography className="font-medium text-[#B2B2B2] text-xs hover:underline">
                      {service.label}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Typography className="font-medium mb-4 text-base">
            We accept:
          </Typography>
          <div className="flex gap-2 sm:gap-3 items-center">
            <img src={master} alt="mastercard" className="h-6 w-auto" />
            <img src={flutter} alt="flutterwave" className="h-5 w-auto" />
            <img src={paypal} alt="paypal" className="h-6 w-auto" />
            <img src={visa} alt="visa" className="h-6 w-auto" />
            <img src={losode} alt="losode" className="h-6 w-auto" />
          </div>
        </div>

        <div className="col-span-2 w-full">
          <Typography className="font-semibold mt-3 text-sm sm:text-base">
            Follow us on:
          </Typography>
          <div className="grid grid-flow-col auto-cols-max mt-3 gap-4">
            <img src={instagram} alt="instagram" className="h-5 w-auto" />
            <img src={facebook} alt="facebook" className="h-5  w-auto" />
            <img src={youtube} alt="youtube" className="h-5 w-auto" />
            <img src={x} alt="x" className="h-5 w-auto" />
            <img src={linkdn} alt="linkedin" className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
