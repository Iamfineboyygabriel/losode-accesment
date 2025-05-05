import { Typography } from "@material-tailwind/react";

const FooterBanner = () => {
  return (
    <div className="container bg-white items-center flex justify-between md:px-7 px-2 mx-auto py-2">
      <Typography className="text-sm font-medium text-black md:text-left">
        © {new Date().getFullYear()} Losode Inc.{" "}
        <br className="md:hidden block" />
        <span className="text-gray-400">Always Beyond Borders</span>
      </Typography>
      <Typography className="text-center text-xs md:text-sm font-semibold text-black md:text-left">
        All Right Reserved
      </Typography>
    </div>
  );
};

export default FooterBanner;
