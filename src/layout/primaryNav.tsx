// import { Typography } from "@material-tailwind/react";
// import logo from "../assets/images/losode-logo.png";
// import { Bag, Love, Profile, Search } from "../assets/svg";
// const PrimaryNav = () => {
//   return (
//     <main className="bg-black py-2">
//       <div className="container mx-auto px-7 flex justify-between">
//         <div className="flex items-center gap-6">
//           <Typography className="font-medium text-sm text-white">
//             Women
//           </Typography>
//           <Typography className="font-medium text-sm text-white">
//             Men
//           </Typography>
//           <Typography className="font-medium text-sm text-white">
//             Kids
//           </Typography>
//           <Typography className="font-bold text-sm text-white">
//             Homeware
//           </Typography>
//         </div>
//         <div>
//           <img src={logo} alt="logo" className="w-[130px]" />
//         </div>
//         <div className="flex gap-6 items-center">
//           <Typography className="font-medium flex gap-2 items-center text-md text-white">
//             <Search />
//             Search
//           </Typography>
//           <Profile />
//           <Love />
//           <Bag />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default PrimaryNav;

import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import logo from "../assets/images/losode-logo.png";
import { Bag, Love, Profile, Search } from "../assets/svg";
import SearchModal from "../components/constants/searchBar";

const PrimaryNav = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
      <main className="bg-black py-2">
        <div className="container mx-auto px-7 flex justify-between">
          <div className="flex items-center gap-6">
            <Typography className="font-medium text-sm text-white">
              Women
            </Typography>
            <Typography className="font-medium text-sm text-white">
              Men
            </Typography>
            <Typography className="font-medium text-sm text-white">
              Kids
            </Typography>
            <Typography className="font-bold text-sm text-white">
              Homeware
            </Typography>
          </div>
          <div>
            <img src={logo} alt="logo" className="w-[130px]" />
          </div>
          <div className="flex gap-6 items-center">
            <Typography
              className="font-medium flex gap-2 items-center text-md text-white cursor-pointer"
              onClick={openSearchModal}
            >
              <Search />
              Search
            </Typography>
            <Profile />
            <Love />
            <Bag />
          </div>
        </div>
      </main>
    </>
  );
};

export default PrimaryNav;
