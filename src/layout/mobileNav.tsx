import { Link } from "react-router-dom";
import logo from "../assets/images/mobile-logo.png";
import search from "../assets/images/mobile-search.svg";
import bag from "../assets/images/mobile-bag.svg";
import { Heart, Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="bg-white text-black sticky top-0 z-50 flex items-center justify-between px-4 py-3 md:hidden">
      <div className="flex gap-2">
        <Menu />
        <Heart />
      </div>
      <Link to="/">
        <img src={logo} alt="losode" className="h-8 w-auto" />
      </Link>
      <div className="flex gap-2">
        <img src={search} alt="search_image" />
        <img src={bag} alt="bag_image" />
      </div>
    </nav>
  );
};

export default MobileNav;
