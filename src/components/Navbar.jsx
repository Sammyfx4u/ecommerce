import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import phoneIcon from "../assets/icon/phone.svg";
import emailIcon from "../assets/icon/email.svg";
import infoIcon from "../assets/icon/info.svg";
import arrowDown from "../assets/icon/dropdown.svg";
import userIcon from "../assets/icon/profile.svg";
import heartIcon from "../assets/icon/heart.svg";
import cartIcon from "../assets/icon/cart.svg";
import searchIcon from "../assets/icon/search.svg";
import deliveryIcon from "../assets/icon/delivery.svg";
import menuIcon from "../assets/icon/menu.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full text-[var(--color-black)] bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-[13px] py-2 px-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <img src={deliveryIcon} alt="Shipping Icon" className="w-4 h-4 invert md:invert-0 transition duration-200" />
          <span>
            Spend $150 or more and get{" "}
            <span className="underline">FREE SHIPPING</span> on your order!
          </span>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden px-4 py-3 bg-black text-white flex items-center justify-between">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={menuIcon}
              alt="Menu"
              className="w-6 h-6 invert md:invert-0 transition duration-200"
            />
          </button>
          <img
            src={logo}
            alt="Zapatos Logo"
            className="h-5 w-auto invert md:invert-0 transition duration-200"
          />
        </div>

        {/* Right: Call + Wishlist + Cart */}
        <div className="flex items-center gap-5">
          <img src={phoneIcon} alt="Call" className="w-5 h-5 invert md:invert-0 transition duration-200" />
          <img src={heartIcon} alt="Wishlist" className="w-5 h-5 invert md:invert-0 transition duration-200" />
          <div className="relative">
            <img src={cartIcon} alt="Cart" className="w-5 h-5 invert md:invert-0 transition duration-200" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-[6px] rounded-full leading-none">
              !
            </span>
          </div>
        </div>
      </div>

      {/* Search Box (Mobile) */}
      <div className="md:hidden px-4 pt-2 pb-4">
        <div className="w-full h-[42px] flex border border-gray-300 rounded-none">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full h-full px-4 text-sm focus:outline-none text-body"
          />
          <button className="w-[50px] flex items-center justify-center border-l border-gray-300">
            <img
              src={searchIcon}
              alt="Search"
              className="w-4 h-4 invert md:invert-0 transition duration-200"
            />
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex bg-white border-b border-gray-200 px-6 py-4 items-center justify-between max-w-[1750px] mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Zapatos Logo" className="h-13 w-auto" />
        </div>
        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-[400px] h-[42px] flex border border-gray-300">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full h-full px-4 text-sm focus:outline-none text-body"
            />
            <button className="w-[50px] flex items-center justify-center border-l border-gray-300">
              <img src={searchIcon} alt="Search" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center text-sm gap-4 whitespace-nowrap">
          <div className="flex items-center gap-1">
            <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
            <span>(804) 6623–9999</span>
          </div>
          <Divider />
          <div className="flex items-center gap-1">
            <img src={emailIcon} alt="Email" className="w-4 h-4" />
            <span>supportoursmallbusiness@g.com</span>
          </div>
          <Divider />
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={infoIcon} alt="Info" className="w-4 h-4" />
            <span>Info</span>
            <img src={arrowDown} alt="Dropdown" className="w-2.5 h-2.5" />
          </div>
          <Divider />
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={userIcon} alt="User" className="w-4 h-4" />
            <img src={arrowDown} alt="Dropdown" className="w-2.5 h-2.5" />
          </div>
          <Divider />
          <img src={heartIcon} alt="Wishlist" className="w-4 h-4 cursor-pointer" />
          <Divider />
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="Cart" className="w-4 h-4" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-[6px] rounded-full leading-none">
              !
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Menu (Desktop Only) */}
      <div className="hidden md:flex bg-gray-100 py-3 px-6 justify-center gap-6 text-sm font-medium uppercase">
        {["MEN", "KIDS", "WOMEN", "SPORT", "BRANDS", "SANDALS"].map((item) => (
          <div
            key={item}
            className="flex items-center gap-1 cursor-pointer hover:text-black transition"
          >
            <span>{item}</span>
            <img src={arrowDown} alt="Dropdown" className="w-2.5 h-2.5" />
          </div>
        ))}
      </div>
    </nav>
  );
};

const Divider = () => <div className="h-5 border-l border-gray-300" />;

export default Navbar;
