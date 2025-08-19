import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

import heroShoe from "../assets/images/HeroShoe.png";
import leftArrow from "../assets/icon/LeftArrow.svg";
import rightArrow from "../assets/icon/RightArrow.svg";
import shippingIcon from "../assets/icon/shipping.svg";
import returnIcon from "../assets/icon/returns.svg";
import warrantyIcon from "../assets/icon/warranty.svg";
import faqIcon from "../assets/icon/faq.svg";
import heartIcon from "../assets/icon/heart.svg";

import categoryMen from "../assets/images/CatMen.png";
import categoryKids from "../assets/images/CatKids.png";
import categoryWomen from "../assets/images/CatWomen.png";
import categorySport from "../assets/images/CatSport.png";
import categoryBrands from "../assets/images/CatBrands.png";
import categorySandals from "../assets/images/CatSandals.png";

import product1 from "../assets/images/prod1.png";
import product2 from "../assets/images/prod2.png";
import product3 from "../assets/images/prod3.png";
import product4 from "../assets/images/prod4.png";

import trendingMain from "../assets/images/CatMen.png";
import trend1 from "../assets/images/trend1.png";
import trend2 from "../assets/images/trend2.png";
import trend3 from "../assets/images/trend3.png";

import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";
import brand5 from "../assets/images/brand5.png";
import brand6 from "../assets/images/brand6.png";
import brand7 from "../assets/images/brand7.png";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/blog4.png";

const Homepage = () => {
  // Sample products with ratings
  const products = [
    { id: 0, image: product1, name: "Brooks Ghost 15", rating: 4.9, reviews: 15, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
    { id: 1, image: product2, name: "Brooks Ghost 15", rating: 4.7, reviews: 12, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
    { id: 2, image: product3, name: "Brooks Ghost 15", rating: 4.2, reviews: 10, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
    { id: 3, image: product4, name: "Brooks Ghost 15", rating: 4.5, reviews: 8, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} color="var(--color-black)" />
        ))}
        {hasHalfStar && <FaStarHalf key="half" color="var(--color-black)" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} color="var(--color-black)" />
        ))}
      </>
    );
  };

  return (
    <main className="text-body text-[var(--color-black)]">
      {/* === HERO SECTION === */}
<section className="bg-[var(--color-muted)] px-2 md:px-4 py-8 md:py-8">
  <h1 className="sr-only">Zapatos Homepage</h1>
  <div className="relative mx-auto overflow-hidden max-w-full">
    {/* Arrows */}
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-grey)] w-8 h-8 flex items-center justify-center"
      aria-label="Previous Slide"
    >
      <img src={leftArrow} alt="" className="w-3 h-3" />
    </button>
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-grey)] w-8 h-8 flex items-center justify-center"
      aria-label="Next Slide"
    >
      <img src={rightArrow} alt="" className="w-3 h-3" />
    </button>

    {/* Hero Content */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 min-h-[400px] md:min-h-[500px]">
      
      {/* Left Text - hidden on mobile */}
      <div className="hidden md:block w-full md:w-1/3 px-1 md:px-2 text-left mt-16 md:mt-36">
        <p className="text-[16px] font-medium leading-relaxed text-[var(--color-black)]">
          Discover the latest drops, limited editions, and classic styles
          designed for every step of your journey
        </p>
      </div>

      {/* Center Logo + Shoe */}
      <div className="w-full md:w-1/3 relative flex flex-col items-center">
        <span
          className="text-[80px] md:text-[300px] italic font-extrabold text-[var(--color-black)] leading-none z-0 font-[poppins] -mt-3 md:-mt-10"
          aria-hidden="true"
        >
          Zapatos
        </span>
        <img
          src={heroShoe}
          alt="Featured Sneaker"
          className="absolute top-[50%] md:top-[65%] left-1/2 w-[280px] md:w-[400px] -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <button className="mt-[300px] md:mt-40 bg-[var(--color-black)] text-white text-sm px-6 py-3 z-20 hover:opacity-90 transition">
          Explore New Arrivals →
        </button>
      </div>

      {/* Right Info - hidden on mobile */}
      <div className="hidden md:block w-full md:w-1/3 px-1 md:px-2 text-right mt-16 md:mt-36">
        <p className="text-[16px] font-semibold mb-3 text-[var(--color-black)]">
          Quality you can count on
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-3">
          {[
            { icon: shippingIcon, label: "Shipping" },
            { icon: returnIcon, label: "Returns" },
            { icon: warrantyIcon, label: "Warranty" },
            { icon: faqIcon, label: "FAQ" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-1 border px-3 py-1 text-sm text-[var(--color-black)]"
            >
              <img src={item.icon} alt="" className="w-4 h-4" />
              <span className="text-body">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>



      {/* === FIND YOUR PERFECT PAIR === */}
      <section className="px-4 md:px-12 py-8">
        <div className="flex justify-center mb-6">
          <div className="flex items-center w-[90%]">
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
            <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-[16px] tracking-wide uppercase whitespace-nowrap">
              Find Your Perfect Pair
            </h2>
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[1686px] mx-auto">
          {[
            { img: categoryMen, label: "Men" },
            { img: categoryKids, label: "Kids" },
            { img: categoryWomen, label: "Women" },
            { img: categorySport, label: "Sport" },
            { img: categoryBrands, label: "Brands" },
            { img: categorySandals, label: "Sandals" },
          ].map((item) => (
            <article
              key={item.label}
              className="relative group cursor-pointer h-[300px] overflow-hidden shadow-sm"
            >
              <img
                src={item.img}
                alt={`${item.label} Shoes`}
                className="w-full h-full object-cover  transition-transform duration-300 group-hover:scale-105" style={{ objectPosition: "50% 90%" }}
              />
              <button className="absolute bottom-4 left-4 bg-[var(--color-bg)] text-[var(--color-black)] text-xs px-3 py-1 shadow-sm group-hover:bg-[var(--color-black)] group-hover:text-white transition-all duration-300">
                {item.label} →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* === HAPPENING NOW === */}
      <section className="bg-[var(--color-bg)] text-[var(--color-black)] px-4 md:px-12 py-12">
       <header className="flex flex-col items-center mb-6">
  <div className="flex items-center w-full">
    <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
    <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-xl uppercase whitespace-nowrap">
      Happening Now
    </h2>
    <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
  </div>
  <a
    href="#"
    className="mt-2 text-xs text-[var(--color-black)] underline whitespace-nowrap"
  >
    See all →
  </a>
</header>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <article key={product.id} className="text-xs">
              <div className="relative bg-[var(--color-muted)] p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] object-contain"
                />
                <span className="absolute top-2 left-2 bg-[var(--color-bg)] text-[var(--color-black)] text-[10px] font-semibold px-1 py-0.5 border border-[var(--color-black)]">
                  SALE!
                </span>
                <img
                  src={heartIcon}
                  alt="Add to Favorites"
                  className="absolute bottom-2 right-2 w-3 h-3"
                />
              </div>
              <h3 className="mt-3 font-semibold text-sm text-[var(--color-black)]">{product.name}</h3>
              <div className="flex items-center gap-1 mb-1">
                {renderStars(product.rating)}
                <span className="text-[var(--color-grey)] text-xs">({product.reviews} reviews)</span>
              </div>
              <div className="mb-2">
                <span className="line-through text-[var(--color-grey)] mr-1">{product.oldPrice}</span>
                <span className="font-bold text-[var(--color-black)]">{product.newPrice}</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <img
                  src={product.image}
                  alt="Style 1"
                  className="w-6 h-6 object-contain border"
                />
                <img
                  src={product.image}
                  alt="Style 2"
                  className="w-6 h-6 object-contain border"
                />
                <img
                  src={product.image}
                  alt="Style 3"
                  className="w-6 h-6 object-contain border"
                />
                <span className="text-[var(--color-grey)] text-[11px]">+3 Style</span>
              </div>
              <p className="text-[var(--color-grey)] text-[11px]">
                <span className="font-semibold text-[var(--color-black)]">Specification:</span>{" "}
                {product.tags.join(", ")}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-[var(--color-black)]" : "bg-[var(--color-muted)]"
              }`}
            />
          ))}
        </div>
      </section>

      {/* === TRENDING SNEAKER STYLE === */}
      <section className="px-4 md:px-12 py-8 bg-[var(--color-bg)]">
        <div className="flex justify-center mb-4">
          <div className="flex items-center w-[90%]">
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
            <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-[16px] uppercase whitespace-nowrap">
              Trending Sneaker Style
            </h2>
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
          </div>
        </div>
        <article className="relative w-full h-[460px] rounded-md overflow-hidden">
         <img
  src={trendingMain}
  alt="Chunky Dad Sneakers"
  className="w-full h-full object-cover"
  style={{ objectPosition: "50% 85%" }} 
/>

          <div className="absolute top-4 right-4 text-right bg-[var(--color-bg)]/90 p-3 rounded-sm">
            <h3 className="font-semibold text-sm text-[var(--color-black)]">
              Chunky Dad Sneakers
            </h3>
            <p className="text-xs text-[var(--color-grey)]">Bold, retro, and comfy</p>
            <button className="mt-2 bg-[var(--color-black)] text-white text-xs px-4 py-[6px] rounded-sm">
              SEE MORE →
            </button>
          </div>
        </article>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <article className="relative h-[460px] bg-[var(--color-muted)] rounded-md overflow-hidden">
            <img
              src={trend1}
              alt="Performance Running Shoes"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-sm font-semibold text-[var(--color-black)] leading-tight">
                Performance<br />
                <span className="text-[var(--color-grey)] font-normal">
                  Running Shoes
                </span>
              </h3>
              <p className="text-xs text-[var(--color-grey)] mt-1">
                Built for speed and support.
              </p>
              <button className="mt-2 bg-[var(--color-black)] text-white text-xs px-4 py-[6px] rounded-sm">
                SEE MORE →
              </button>
            </div>
          </article>
          <article className="relative h-[460px] bg-[var(--color-muted)] rounded-md overflow-hidden">
            <img
              src={trend2}
              alt="Sustainable Sneakers"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-sm font-semibold text-[var(--color-black)]">
                Sustainable Sneakers
              </h2>
              <p className="text-xs text-[var(--color-grey)] mt-1">
                Eco-friendly and stylish.
              </p>
              <button className="mt-2 bg-[var(--color-black)] text-white text-xs px-4 py-[6px] rounded-sm">
                SEE MORE →
              </button>
            </div>
          </article>
          <article className="relative h-[460px] bg-[var(--color-muted)] rounded-md overflow-hidden">
            <img
              src={trend3}
              alt="High-Tops for Streetwear Looks"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-sm font-semibold text-[var(--color-black)] leading-tight">
                High-Tops for<br />
                <span className="text-[var(--color-grey)] font-normal">
                  Streetwear Looks
                </span>
              </h2>
              <p className="text-xs text-[var(--color-grey)] mt-1">
                Fashionable with extra ankle support.
              </p>
              <button className="mt-2 bg-[var(--color-black)] text-white text-xs px-4 py-[6px] rounded-sm">
                SEE MORE →
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* === BRANDS === */}
      <section className="px-4 md:px-12 py-8 text-center">
        <div className="flex justify-center mb-2">
          <div className="flex items-center w-[90%]">
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
            <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-[16px] uppercase whitespace-nowrap">
              Brands
            </h2>
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
          </div>
        </div>
        <a href="#" className="text-xs text-[var(--color-black)]">
          See all →
        </a>
        <div className="mt-4 flex justify-center flex-wrap gap-6">
          {[brand1, brand2, brand3, brand4, brand5, brand6, brand7].map(
            (img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Brand ${idx + 1}`}
                className="h-6 object-contain"
              />
            )
          )}
        </div>
      </section>

      {/* === BLOGS === */}
      <section className="px-4 md:px-12 py-8 bg-[var(--color-bg)]">
        <header className="flex justify-center mb-6">
          <div className="flex items-center w-[90%]">
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
            <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-[16px] uppercase whitespace-nowrap">
              Blogs
            </h2>
            <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <article className="rounded-lg overflow-hidden bg-[var(--color-bg)] shadow-sm">
            <img
              src={blog1}
              alt="Step Into Style: The Hottest Sneakers"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium truncate text-[var(--color-black)]">
                Step Into Style: The Hottest Sneakers
              </h3>
              <p className="text-[var(--color-black)] text-xs mt-1">
                Explore the must-have sneakers dominating streetwear and
                sportswear this year.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-xs font-medium text-[var(--color-black)] hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden bg-[var(--color-bg)] shadow-sm">
            <img
              src={blog2}
              alt="Running on Clouds: Best Performance Picks"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium truncate text-[var(--color-black)]">
                Running on Clouds: Best Performance Picks
              </h3>
              <p className="text-[var(--color-black)] text-xs mt-1">
                Discover the top sneakers that blend speed, comfort, and style
                for peak performance.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-xs font-medium text-[var(--color-black)] hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden bg-[var(--color-bg)] shadow-sm">
            <img
              src={blog3}
              alt="From Courts to Streets: How High-Tops Win"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium truncate text-[var(--color-black)]">
                From Courts to Streets: How High-Tops Win
              </h3>
              <p className="text-[var(--color-black)] text-xs mt-1">
                Uncover the journey of high-top sneakers from sports arenas to
                everyday wear.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-xs font-medium text-[var(--color-black)] hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden bg-[var(--color-bg)] shadow-sm">
            <img
              src={blog4}
              alt="Sustainable Kicks: Eco-Friendly Finds"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium truncate text-[var(--color-black)]">
                Sustainable Kicks: Eco-Friendly Finds
              </h3>
              <p className="text-[var(--color-black)] text-xs mt-1">
                Find stylish, sustainable footwear that’s good for your feet—and
                the planet.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-xs font-medium text-[var(--color-black)] hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
        </div>
        <div className="flex justify-center items-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === 0 ? "bg-[var(--color-black)]" : "bg-[var(--color-muted)]"
              }`}
            ></span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;