// import { Typography } from "@material-tailwind/react";
// import ProductCard from "../general/productCard";
// import { products } from "../utils/data";

// const Season = () => {
//   return (
//     <div className="bg-[#F9F9F9] text-center w-full">
//       <div className="container px-7 py-7 mx-auto">
//         <Typography className="text-3xl mb-4 text-black font-semibold">
//           This Season, Transform Your Space
//         </Typography>
//         <Typography className="text-md mb-7 max-w-5xl mx-auto text-black">
//           <span className="font-semibold mr-2">
//             Home is more than where you live, it's how you express yourself
//           </span>
//           Warm. Inviting. Distinctive. Whether you're redesigning your living
//           room or adding thoughtful touches to your kitchen, this is your
//           opportunity to create, curate, and cultivate spaces that tell your
//           story
//         </Typography>
//         <section className="grid grid-cols-4 gap-4 text-start">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               image={product.image}
//               alt={product.alt}
//               brand={product.brand}
//               name={product.name}
//               price={product.price}
//             />
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Season;

import { Typography } from "@material-tailwind/react";
import ProductCard from "../general/productCard";
import { products } from "../utils/data";

const Season = () => {
  return (
    <div className="bg-[#F9F9F9] text-center w-full">
      <div className="container px-4 sm:px-7 py-6 sm:py-7 mx-auto">
        <Typography className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-black font-semibold">
          This Season, Transform Your Space
        </Typography>
        <Typography className="text-sm sm:text-md mb-5 sm:mb-7 max-w-lg sm:max-w-5xl mx-auto text-black">
          <span className="font-semibold mr-2">
            Home is more than where you live, it's how you express yourself
          </span>
          Warm. Inviting. Distinctive. Whether you're redesigning your living
          room or adding thoughtful touches to your kitchen, this is your
          opportunity to create, curate, and cultivate spaces that tell your
          story
        </Typography>
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-start">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              alt={product.alt}
              brand={product.brand}
              name={product.name}
              price={product.price}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Season;
