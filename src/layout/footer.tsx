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

const Footer = () => {
  return (
    <footer className="bg-black md:block hidden text-white mt-10">
      <div className="pt-8 pb-8 container px-7 mx-auto justify-between flex flex-col md:flex-row  gap-8">
        <div className="w-full flex flex-col gap-6 md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="max-w-[80px]" />
          </Link>
          <div className="flex flex-col gap-3">
            <div>
              <Typography className="font-normal text-[#B2B2B2] text-sm">
                Email Us:
              </Typography>
              <Typography className="font-medium text-sm">
                hello@losode.com
              </Typography>
            </div>

            <div>
              <Typography className="font-normal text-[#B2B2B2] text-sm">
                Contact us:
              </Typography>
              <Typography className="font-medium text-sm">
                +2342013306011
              </Typography>
            </div>
          </div>
          <div>
            <Typography className="font-medium mb-8 text-lg">
              We accept:
            </Typography>
            <div className="flex gap-3 items-center">
              <img
                src={master}
                alt="mastercard"
                className="h-4 sm:h-5 w-auto"
              />
              <img
                src={flutter}
                alt="flutterwave"
                className="h-4 sm:h-5 w-auto"
              />
              <img src={paypal} alt="paypal" className="h-4 sm:h-5 w-auto" />
              <img src={visa} alt="visa" className="h-4 sm:h-5 w-auto" />
              <img src={losode} alt="losode" className="h-4 sm:h-5 w-auto" />
            </div>
          </div>
        </div>

        <div>
          <Typography className="text-white mb-5 font-medium text-xl">
            Useful Information
          </Typography>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              {QuickLinks.map((links, index) => (
                <div key={index}>
                  <Link to={links.to}>
                    <Typography className="font-medium text-[#B2B2B2] text-sm">
                      {links.label}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {Services.map((service, index) => (
                <div key={index}>
                  <Link to={service.to}>
                    <Typography className="font-medium text-[#B2B2B2] text-sm">
                      {service.label}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Typography className="font-medium text-white text-xl">
            Stay in touch
          </Typography>
          <div className="flex flex-row">
            <input
              type="email"
              className="px-3 py-2 bg-black text-white border border-white focus:outline-none focus:border-white text-xs sm:text-sm w-[150px]"
            />
            <button className="bg-white text-black cursor-pointer text-xs font-medium px-4 py-2 hover:bg-gray-200 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <div>
            <Typography className="font-medium max-w-xs mt-5 text-[#B2B2B2] text-md">
              Keep in touch with news, <br /> promotion and offers from us
            </Typography>
            <Typography className="font-semibold mt-4">
              Follow us on:
            </Typography>
            <div className="flex mt-8 gap-3">
              <img src={instagram} alt="instagram" className="h-4 w-auto" />
              <img src={facebook} alt="facebook" className="h-4 w-auto" />
              <img src={youtube} alt="youtube" className="h-4 w-auto" />
              <img src={x} alt="x" className="h-4 w-auto" />
              <img src={linkdn} alt="linkedin" className="h-4 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
