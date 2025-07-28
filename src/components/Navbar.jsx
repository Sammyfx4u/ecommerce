import React from "react";
import logo from "../assets/logo.svg";

import phoneIcon from "../assets/icon/phone.svg";
import emailIcon from "../assets/icon/email.svg";
import infoIcon from "../assets/icon/info.svg";
import arrowDown from "../assets/icon/dropdown.svg";
import userIcon from "../assets/icon/profile.svg";
import heartIcon from "../assets/icon/heart.svg";
import cartIcon from "../assets/icon/cart.svg";
import searchIcon from "../assets/icon/search.svg";
import deliveryIcon from "../assets/icon/delivery.svg";

const Navbar = () => {
  return (
    <nav className="w-full max-w-[1750px] mx-auto text-[14px] font-normal text-[var(--color-black)]">
      {/* Top banner */}
      <div className="bg-[var(--color-black)] text-white text-[13px] py-[6px] px-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <img src={deliveryIcon} alt="Shipping Icon" className="w-5 h-5" />
          <span>
            Spend $150 or more and get{" "}
            <span className="underline">FREE SHIPPING</span> on your order!
          </span>
        </div>
      </div>

      {/* Main Nav Section */}
      <div className="w-full bg-[var(--color-bg)] border-b border-[var(--color-bg-light)] px-4 md:px-12 py-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center min-w-[130px]">
          <img src={logo} alt="Zapatos Logo" className="h-9 w-auto" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-[522px] h-[48px] flex">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full h-full border border-gray-300 px-4 text-sm rounded-l-md focus:outline-none"
            />
            <button className="bg-[var(--color-muted)] px-4 h-full rounded-r-md border border-l-0 border-gray-300 flex items-center justify-center">
              <img src={searchIcon} alt="Search" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right-side Contact & Icons */}
        <div className="flex items-center flex-shrink-0 gap-2 text-sm">
          {/* Phone */}
          <div className="flex items-center gap-1">
            <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
            <span>(804) 6623–9999</span>
          </div>

          <Divider />

          {/* Email */}
          <div className="flex items-center gap-1">
            <img src={emailIcon} alt="Email" className="w-4 h-4" />
            <span>supportoursmallbusiness@g.com</span>
          </div>

          <Divider />

          {/* Info */}
          <div className="flex items-center gap-[2px] cursor-pointer">
            <img src={infoIcon} alt="Info" className="w-4 h-4" />
            <span>Info</span>
            <img src={arrowDown} alt="Dropdown" className="w-[10px] h-[10px]" />
          </div>

          <Divider />

          {/* User */}
          <div className="flex items-center gap-[2px] cursor-pointer">
            <img src={userIcon} alt="User" className="w-4 h-4" />
            <img src={arrowDown} alt="Dropdown" className="w-[10px] h-[10px]" />
          </div>

          <Divider />

          {/* Heart */}
          <img src={heartIcon} alt="Wishlist" className="w-4 h-4 cursor-pointer" />

          <Divider />

          {/* Cart */}
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="Cart" className="w-4 h-4" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-[5px] rounded-full leading-none">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[var(--color-bg-light)] py-[10px] px-6 md:px-12 flex justify-center gap-6 text-sm font-medium">
        {["MEN", "KIDS", "WOMEN", "SPORT", "BRANDS", "SANDALS"].map((item) => (
          <div
            key={item}
            className="flex items-center gap-[4px] cursor-pointer hover:text-black transition"
          >
            <span>{item}</span>
            <img src={arrowDown} alt="Dropdown" className="w-[10px] h-[10px]" />
          </div>
        ))}
      </div>
    </nav>
  );
};

// Reusable Divider Component
const Divider = () => (
  <div className="h-5 border-l border-gray-300 mx-2" />
);

export default Navbar;
