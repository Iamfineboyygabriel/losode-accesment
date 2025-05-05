import { Typography } from "@material-tailwind/react";

const TopBanner = () => {
  return (
    <main className="bg-[#F9F9F9] w-full p-1">
      <section className="container mx-auto md:px-7 flex justify-center md:justify-between">
        <Typography className="md:text-sm text-xs text-black text-center font-medium tracking-tight">
          New to Losode? <span className="underline">Subscribe</span> and Get
          10% off your first order.
        </Typography>
        <Typography className="text-sm md:block hidden underline text-black font-medium tracking-tight">
          Sell on Losode
        </Typography>
      </section>
    </main>
  );
};

export default TopBanner;
