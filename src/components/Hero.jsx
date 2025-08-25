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
  const products = [
    { id: 0, image: product1, name: "Brooks Ghost 15", rating: 4.9, reviews: 15, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
    { id: 1, image: product2, name: "Brooks Ghost 15", rating: 4.7, reviews: 12, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
    { id: 2, image: product3, name: "Brooks Ghost 15", rating: 4.2, reviews: 10, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
    { id: 3, image: product4, name: "Brooks Ghost 15", rating: 4.5, reviews: 8, oldPrice: "$772.00", newPrice: "$299.00", tags: ["Running", "Engineered mesh"] },
  ];

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
  <section className="mt-3 px-[2px] sm:px-6 md:px-0 lg:px-6">
    <h1 className="sr-only">Zapatos Homepage</h1>
    <div
      className="
        relative w-full bg-[var(--color-bg-light)] overflow-hidden 
        px-2 sm:px-4 py-8 sm:py-8 
        md:px-0 md:min-h-[750px] 
        md:w-screen md:mx-[calc(50%-50vw)] md:max-w-none
        lg:w-full lg:mx-auto lg:min-h-[580px]
      "
    >
      {/* Arrows */}
      <button
        className="absolute left-2 top-[53%] -translate-y-1/2 z-10 bg-[var(--color-grey)] w-8 h-8 flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <img src={leftArrow} alt="" className="w-3 h-3" />
      </button>
      <button
        className="absolute right-2 top-[53%] -translate-y-1/2 z-10 bg-[var(--color-grey)] w-8 h-8 flex items-center justify-center"
        aria-label="Next Slide"
      >
        <img src={rightArrow} alt="" className="w-3 h-3" />
      </button>

      {/* Flex container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 min-h-[400px] lg:min-h-[500px]">
        
        {/* Left Text */}
        <div className="hidden lg:block w-full lg:w-1/3 px-1 lg:px-6 text-left mt-36 lg:mt-70">
          <p className="text-[14px] font-medium leading-relaxed">
            Discover the latest drops, limited editions, and classic styles
            designed for every step of your journey
          </p>
        </div>

        {/* Center Title + Shoe */}
        <div className="w-full lg:w-1/3 relative flex flex-col items-center">
          <span
            className="text-[80px] md:text-[180px] lg:text-[300px] 
                       font-extrabold leading-none z-0 font-[poppins] 
                       text-center -mt-3 md:mt-10 lg:-mt-10 tracking-tight"
            style={{ fontStyle: "oblique 14deg" }}
            aria-hidden="true"
          >
            Zapatos
          </span>

          <img
            src={heroShoe}
            alt="Featured Sneaker"
            className="absolute 
                       top-[50%] md:top-[180%] lg:top-[65%] 
                       left-1/2 
                       w-[280px] md:w-[550px] lg:w-[450px] 
                       -translate-x-1/2 -translate-y-1/2 z-10"
          />

          <button
            className="
              mt-[300px]             
              md:absolute md:top-[270%] md:mt-0 
              lg:static lg:mt-45          
              bg-[var(--color-black)] text-white text-sm px-6 py-3 z-20 
              hover:opacity-90 transition
            "
          > 
            Explore New Arrivals →
          </button>
        </div>

        {/* Right Text + Features */}
        <div className="hidden lg:block w-full lg:w-1/3 px-1 lg:px-6 text-right mt-44 lg:mt-70">
          <p className="text-[14px] font-semibold mb-3">Quality you can count on</p>
          <div className="flex justify-center lg:items-center gap-[2px] text-xs">
            <div className="flex items-center border border-black px-[18px] py-2">
              {[
                { icon: shippingIcon, label: "Shipping" },
                { icon: returnIcon, label: "Returns" },
                { icon: warrantyIcon, label: "Warranty" },
                { icon: faqIcon, label: "FAQ" },
              ].map((item, index, arr) => (
                <div key={item.label} className="flex items-center gap-1">
                  <img src={item.icon} alt="" className="w-4 h-4" />
                  <span className="text-body">{item.label}</span>
                  {index !== arr.length - 1 && (
                    <span className="mx-[18px] h-4 border-r border-black"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

{/* Find your perfect pair */}
  <section className="px-[2px] md:px-6 py-8">
  {/* Section Title */}
  <div className="flex justify-center mb-6 max-w-[1686px] mx-auto">
    <div className="flex items-center w-full">
      <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
      <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-[16px] tracking-wide uppercase whitespace-nowrap">
        Find Your Perfect Pair
      </h2>
      <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
    </div>
  </div>

  {/* Category Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 max-w-[1686px] mx-auto">
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
        className="relative group cursor-pointer 
                   h-[150px] md:h-[180px] xl:h-[300px] 
                   overflow-hidden shadow-sm"
      >
        <img
          src={item.img}
          alt={`${item.label} Shoes`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectPosition: "center bottom" }}
        />
        <button className="absolute bottom-4 left-4 bg-[var(--color-bg)] text-[var(--color-black)] text-xs px-3 py-1 shadow-sm group-hover:bg-[var(--color-black)] group-hover:text-white transition-all duration-300">
          {item.label} →
        </button>
      </article>
    ))}
  </div>
</section>








{/* Happening Now */}

<section className="bg-[var(--color-bg)] text-[var(--color-black)] px-2 md:px-6 py-12">
  {/* Header */}
  <header className="flex flex-col items-center mb-6 max-w-[1686px] mx-auto">
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

  {/* Product Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1686px] mx-auto">
    {/* Mobile: show first 2 */}
    {products.slice(0, 2).map((product) => (
      <article key={product.id} className="block md:hidden text-xs">
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
          <img src={product.image} alt="Style 1" className="w-6 h-6 object-contain border" />
          <img src={product.image} alt="Style 2" className="w-6 h-6 object-contain border" />
          <img src={product.image} alt="Style 3" className="w-6 h-6 object-contain border" />
          <span className="text-[var(--color-grey)] text-[11px]">+3 Style</span>
        </div>
        <p className="text-[var(--color-grey)] text-[11px]">
          <span className="font-semibold text-[var(--color-black)]">Specification:</span>{" "}
          {product.tags.join(", ")}
        </p>
        <button className="mt-3 w-full py-1 border border-[var(--color-black)] text-[var(--color-black)] text-xs bg-transparent">
          Add to Cart
        </button>
      </article>
    ))}

    {/* Tablet: show first 3 */}
    {products.slice(0, 3).map((product) => (
      <article key={product.id} className="hidden md:block xl:hidden text-xs">
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
          <img src={product.image} alt="Style 1" className="w-6 h-6 object-contain border" />
          <img src={product.image} alt="Style 2" className="w-6 h-6 object-contain border" />
          <img src={product.image} alt="Style 3" className="w-6 h-6 object-contain border" />
          <span className="text-[var(--color-grey)] text-[11px]">+3 Style</span>
        </div>
        <p className="text-[var(--color-grey)] text-[11px]">
          <span className="font-semibold text-[var(--color-black)]">Specification:</span>{" "}
          {product.tags.join(", ")}
        </p>
        <button className="mt-3 w-full py-1 border border-[var(--color-black)] text-[var(--color-black)] text-xs bg-transparent">
          Add to Cart
        </button>
      </article>
    ))}

    {/* Desktop: show first 4 */}
    {products.slice(0, 4).map((product) => (
      <article key={product.id} className="hidden xl:block text-xs">
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
          <img src={product.image} alt="Style 1" className="w-6 h-6 object-contain border" />
          <img src={product.image} alt="Style 2" className="w-6 h-6 object-contain border" />
          <img src={product.image} alt="Style 3" className="w-6 h-6 object-contain border" />
          <span className="text-[var(--color-grey)] text-[11px]">+3 Style</span>
        </div>
        <p className="text-[var(--color-grey)] text-[11px]">
          <span className="font-semibold text-[var(--color-black)]">Specification:</span>{" "}
          {product.tags.join(", ")}
        </p>
      </article>
    ))}
  </div>

  {/* Pagination Dots */}
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


<section className="px-[2px] md:px-6 py-8 bg-[var(--color-bg)]">
  {/* Section Title */}
  <div className="flex justify-center mb-4 max-w-[1686px] mx-auto">
    <div className="flex items-center w-full">
      <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
      <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-[16px] uppercase whitespace-nowrap">
        Trending Sneaker Style
      </h2>
      <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
    </div>
  </div>

  {/* Desktop / Tablet Layout */}
  <article className="relative w-full h-[460px] rounded-md overflow-hidden max-w-[1686px] mx-auto hidden md:block">
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

  <div className="hidden md:grid grid-cols-3 gap-4 mt-4 max-w-[1686px] mx-auto">
    {[trend1, trend2, trend3].map((img, idx) => (
      <article key={idx} className="relative h-[460px] rounded-md overflow-hidden">
        <img
          src={img}
          alt="Trending Sneaker"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-sm font-semibold text-[var(--color-black)] leading-tight">
            {idx === 0 && <>Performance<br /><span className="text-[var(--color-grey)] font-normal">Running Shoes</span></>}
            {idx === 1 && <>Sustainable Sneakers</>}
            {idx === 2 && <>High-Tops for<br /><span className="text-[var(--color-grey)] font-normal">Streetwear Looks</span></>}
          </h3>
          {idx === 0 && <p className="text-xs text-[var(--color-grey)] mt-1">Built for speed and support.</p>}
          {idx === 1 && <p className="text-xs text-[var(--color-grey)] mt-1">Eco-friendly and stylish.</p>}
          {idx === 2 && <p className="text-xs text-[var(--color-grey)] mt-1">Fashionable with extra ankle support.</p>}
          <button className="mt-2 bg-[var(--color-black)] text-white text-xs px-4 py-[6px] rounded-sm">
            SEE MORE →
          </button>
        </div>
      </article>
    ))}
  </div>

  {/* Mobile Layout: only show SHOP NOW button */}
  <div className="grid grid-cols-2 gap-2 md:hidden mt-4">
    {[trendingMain, trend1, trend2, trend3].map((img, idx) => (
      <div key={idx} className="relative h-[200px] overflow-hidden">
        <img src={img} alt="Trending Sneaker" className="w-full h-full object-cover" />
        <div className="absolute bottom-2 left-0 w-full flex justify-center">
          <button className="bg-[var(--color-black)] text-white text-xs px-4 py-[6px] rounded-sm">
            SHOP NOW →
          </button>
        </div>
      </div>
    ))}
  </div>
</section>



      <section className="px-[2px] md:px-6 py-8 text-center">
        <div className="flex justify-center mb-2 max-w-[1686px] mx-auto">
          <div className="flex items-center w-full">
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
        <div className="mt-4 flex justify-center flex-wrap gap-6 max-w-[1686px] mx-auto">
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

     <section className="px-[2px] md:px-6 py-8 bg-[var(--color-bg)]">
  {/* Section Title */}
  <header className="flex justify-center mb-6 max-w-[1686px] mx-auto">
    <div className="flex items-center w-full">
      <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
      <h2 className="mx-4 text-center text-[var(--color-black)] font-semibold text-[16px] uppercase whitespace-nowrap">
        Blogs
      </h2>
      <div className="flex-grow h-px bg-[var(--color-bg-light)]"></div>
    </div>
  </header>

  {/* Desktop/Tablet Layout: show first 3 only */}
  <div className="hidden md:grid grid-cols-3 gap-4 text-sm max-w-[1686px] mx-auto">
    {[blog1, blog2, blog3].map((img, idx) => (
      <article key={idx} className="rounded-lg overflow-hidden bg-[var(--color-bg)] shadow-sm">
        <img src={img} alt="" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="font-medium truncate text-[var(--color-black)]">
            {idx === 0 && "Step Into Style: The Hottest Sneakers"}
            {idx === 1 && "Running on Clouds: Best Performance Picks"}
            {idx === 2 && "From Courts to Streets: How High-Tops Win"}
          </h3>
          <p className="text-[var(--color-black)] text-xs mt-1">
            {idx === 0 && "Explore the must-have sneakers dominating streetwear and sportswear this year."}
            {idx === 1 && "Discover the top sneakers that blend speed, comfort, and style for peak performance."}
            {idx === 2 && "Uncover the journey of high-top sneakers from sports arenas to everyday wear."}
          </p>
          <a href="#" className="inline-block mt-2 text-xs font-medium text-[var(--color-black)] hover:underline">
            Read more →
          </a>
        </div>
      </article>
    ))}
  </div>

  {/* Mobile Layout: show first 2 only, two per row */}
  <div className="grid grid-cols-2 gap-2 md:hidden text-sm max-w-[1686px] mx-auto">
    {[blog1, blog2].map((img, idx) => (
      <article key={idx} className="rounded-lg overflow-hidden bg-[var(--color-bg)] shadow-sm h-auto">
        <img src={img} alt="" className="w-full h-40 object-cover" />
        <div className="p-2">
          <h3 className="font-medium truncate text-[var(--color-black)] text-xs">
            {idx === 0 && "Step Into Style: The Hottest Sneakers"}
            {idx === 1 && "Running on Clouds: Best Performance Picks"}
          </h3>
          <p className="text-[var(--color-black)] text-[10px] mt-1">
            {idx === 0 && "Explore the must-have sneakers dominating streetwear and sportswear this year."}
            {idx === 1 && "Discover the top sneakers that blend speed, comfort, and style for peak performance."}
          </p>
          <a href="#" className="inline-block mt-1 text-[10px] font-medium text-[var(--color-black)] hover:underline">
            Read more →
          </a>
        </div>
      </article>
    ))}
  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center items-center gap-1 mt-6">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`h-2 w-2 rounded-full ${i === 0 ? "bg-[var(--color-black)]" : "bg-[var(--color-muted)]"}`}
      ></span>
    ))}
  </div>
</section>

    </main>
  );
};

export default Homepage;