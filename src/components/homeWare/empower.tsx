import { Button, Typography } from "@material-tailwind/react";

const Empower = () => {
  return (
    <div className="pt-4 container text-center mx-auto mb-6 md:mb-13">
      <Typography className="md:text-3xl text-2xl mb-4 tracking-wide text-black font-medium">
        Empower Your Style with Unbeatable Savings
      </Typography>
      <Typography className="font-medium mb-3 md:mb-6 md:px-0 px-2 tracking-tight mx-auto max-w-4xl text-sm">
        Shop massive savings from hundreds of top designers and find stylish
        high quality, pieces at affordable prices. At Losode, we offer unique
        styles that helps you stand out, from dresses to accessories and
        everything in between. Enjoy exlcusive discounts and discover fashion
        that's both on-trend and budget-friendly
      </Typography>
      <Button className="rounded-none md:block hidden w-sm py-3 mx-auto bg-black text-center">
        <Typography className="text-white font-medium text-lg cursor-pointer">
          Shop Now
        </Typography>
      </Button>
      <Typography className="font-medium md:hidden block underline text-black">
        Shop Now
      </Typography>
    </div>
  );
};

export default Empower;
