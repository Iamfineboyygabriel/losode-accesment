import { useState } from "react";

export default function SidebarButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://www.losode.com/sell"
      className="fixed z-60"
      style={{
        right: "-47px",
        top: "50%",
        transformOrigin: "center",
        transform: "translateY(-50%) rotate(90deg)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-black text-white md:block hidden py-2 px-4 transition-all duration-300 ${
          isHovered ? "bg-gray-800" : ""
        }`}
      >
        <span className="font-medium whitespace-nowrap text-sm">
          Sell on Losode
        </span>
      </div>
    </a>
  );
}
