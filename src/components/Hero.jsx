import React from "react";

// Import all images from assets (rename as needed)
import heroShoe from "../assets/HeroShoe.png";
import leftArrow from "../assets/icon/LeftArrow.svg";
import rightArrow from "../assets/icon/RightArrow.svg";
import shippingIcon from "../assets/icon/shipping.svg";
import returnIcon from "../assets/icon/returns.svg";
import warrantyIcon from "../assets/icon/warranty.svg";
import faqIcon from "../assets/icon/faq.svg";

import categoryMen from "../assets/CatMen.png";
import categoryKids from "../assets/CatKids.png";
import categoryWomen from "../assets/CatWomen.png";
import categorySport from "../assets/CatSport.png";
import categoryBrands from "../assets/CatBrands.png";
import categorySandals from "../assets/CatSandals.png";

import product1 from "../assets/prod1.png";
import product2 from "../assets/prod2.png";
import product3 from "../assets/prod3.png";
import product4 from "../assets/prod4.png";

import trendingMain from "../assets/CatMen.png";
import trend1 from "../assets/trend1.png";
import trend2 from "../assets/trend2.png";
import trend3 from "../assets/trend3.png";

import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const Homepage = () => {
  return (
    <div className="text-body text-[14px] text-[var(--color-black)]">
      {/* === HERO SECTION === */}
      <section className="bg-white px-4 md:px-12 py-8">
        <div className="relative bg-white rounded shadow-sm overflow-hidden">
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <img src={leftArrow} alt="left" className="w-4 h-4" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <img src={rightArrow} alt="right" className="w-4 h-4" />
          </button>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/3 text-center md:text-left px-4">
              <p>
                Discover the latest drops, limited editions, and classic styles
                designed for every step of your journey
              </p>
            </div>

            <div className="w-full md:w-1/3 text-center relative">
              <h1 className="text-heading text-[80px] md:text-[120px] font-extrabold z-10 leading-none">
                Zapatos
              </h1>
              <img
                src={heroShoe}
                alt="Hero Shoe"
                className="w-[250px] md:w-[340px] -mt-10 md:-mt-16 mx-auto"
              />
              <button className="mt-4 bg-black text-white text-sm px-4 py-2">
                Explore New Arrivals →
              </button>
            </div>

            <div className="w-full md:w-1/3 text-center md:text-right px-4">
              <p className="mb-2 font-medium">Quality you can count on</p>
              <div className="flex justify-center md:justify-end gap-4 flex-wrap">
                {[{ icon: shippingIcon, label: "Shipping" }, { icon: returnIcon, label: "Returns" }, { icon: warrantyIcon, label: "Warranty" }, { icon: faqIcon, label: "FAQ" }].map((item) => (
                  <div key={item.label} className="flex items-center gap-1">
                    <img src={item.icon} alt={item.label} className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FIND YOUR PERFECT PAIR === */}
      <section className="px-4 md:px-12 py-8">
        <h2 className="text-heading text-center font-semibold mb-6 text-[16px] tracking-wide">
          FIND YOUR PERFECT PAIR
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {[{ img: categoryMen, label: "MEN" }, { img: categoryKids, label: "KIDS" }, { img: categoryWomen, label: "WOMEN" }, { img: categorySport, label: "SPORT" }, { img: categoryBrands, label: "BRANDS" }, { img: categorySandals, label: "SANDALS" }].map((item) => (
            <div key={item.label} className="relative group cursor-pointer">
              <img src={item.img} alt={item.label} className="w-full" />
              <button className="absolute bottom-2 left-2 bg-white text-black text-xs px-2 py-1 shadow-sm">
                {item.label} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* === HAPPENING NOW === */}
      <section className="px-4 md:px-12 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-heading font-semibold text-[16px]">HAPPENING NOW!</h2>
          <a href="#" className="text-xs">See all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[product1, product2, product3, product4].map((img, index) => (
            <div key={index} className="text-xs">
              <div className="relative">
                <img src={img} alt="product" className="w-full" />
                <span className="absolute top-2 left-2 bg-white text-[10px] px-1 py-0.5 border border-black">SALE</span>
              </div>
              <p className="mt-2 font-bold">BROOKS GHOST 15</p>
              <div className="text-yellow-500">★★★★★ <span className="text-gray-500">4.9 (15 reviews)</span></div>
              <div>
                <span className="line-through text-gray-400 mr-1">$172.00</span>
                <span className="font-bold">$299.00</span>
              </div>
              <p className="text-gray-500 text-[11px]">+5 Style</p>
              <p className="text-gray-500 text-[11px]">Specification: Running, Engineered mesh</p>
            </div>
          ))}
        </div>
      </section>

      {/* === TRENDING SNEAKER STYLE === */}
      <section className="px-4 md:px-12 py-8">
        <h2 className="text-heading font-semibold text-[16px] mb-4">
          TRENDING SNEAKER STYLE
        </h2>
        <div className="grid gap-4">
          <div className="relative">
            <img src={trendingMain} alt="trending main" className="w-full" />
            <div className="absolute top-4 right-4 text-right">
              <p className="font-semibold text-sm">Chunky Dad Sneakers</p>
              <p className="text-xs">Bold, retro, and comfy</p>
              <button className="mt-1 bg-black text-white text-xs px-3 py-1">SEE MORE →</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[trend1, trend2, trend3].map((img, idx) => (
              <div key={idx} className="relative">
                <img src={img} alt="trend" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BRANDS === */}
      <section className="px-4 md:px-12 py-8 text-center">
        <h2 className="text-heading font-semibold text-[16px] mb-2">BRANDS</h2>
        <a href="#" className="text-xs">See all →</a>
        <div className="mt-4 flex justify-center flex-wrap gap-6">
          {[brand1, brand2, brand3, brand4, brand5, brand6, brand7].map((img, idx) => (
            <img key={idx} src={img} alt="brand" className="h-6 object-contain" />
          ))}
        </div>
      </section>

      {/* === BLOGS === */}
      <section className="px-4 md:px-12 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-heading font-semibold text-[16px]">BLOGS</h2>
          <a href="#" className="text-xs">See all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {[blog1, blog2, blog3, blog4].map((img, i) => (
            <div key={i}>
              <img src={img} alt="blog" className="w-full mb-2" />
              <p className="font-medium leading-tight">Blog Title</p>
              <p className="text-[11px] text-gray-500 leading-tight">
                Short blog description or excerpt here.
              </p>
              <a href="#" className="text-[11px] underline mt-1 inline-block">Read more →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
