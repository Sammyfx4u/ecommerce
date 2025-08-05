import React, { useState } from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import category1 from "../assets/images/category1.png";
import category2 from "../assets/images/category2.png";
import category3 from "../assets/images/category3.png";
import category4 from "../assets/images/category4.png";
import shoe1 from "../assets/images/shoe1.png";
import shoe2 from "../assets/images/shoe2.png";
import shoe3 from "../assets/images/shoe3.png";
import shoe4 from "../assets/images/shoe4.png";
import shoe5 from "../assets/images/shoe5.png";
import shoe6 from "../assets/images/shoe6.png";
import shoe7 from "../assets/images/shoe7.png";
import shoe8 from "../assets/images/shoe8.png";
import shoe9 from "../assets/images/shoe9.png";
import shoe10 from "../assets/images/shoe10.png";
import shoe11 from "../assets/images/shoe11.png";
import shoe12 from "../assets/images/shoe12.png";
import heartIcon from "../assets/icon/heart.svg";
import ChevronRight from "../assets/icon/ChevronRight.svg";

const shoeImages = [
  shoe1, shoe2, shoe3, shoe4, shoe5, shoe6,
  shoe7, shoe8, shoe9, shoe10, shoe11, shoe12,
];

const products = shoeImages.map((img, index) => ({
  id: index,
  name: "BROOKS GHOST 15",
  rating: 4.5 + (index % 2 ? 0.2 : 0), // slight variation
  reviews: 15 + index,
  oldPrice: "$772.00",
  newPrice: "$299.00",
  image: img,
  tags: ["Running", "Engineered mesh"]
}));

const Category = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
    <div className="px-6 lg:px-16 py-10 text-body text-[var(--color-black)]">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-[var(--color-grey)] mb-2">
      <span>HOME</span>
      <img
        src={ChevronRight}
        alt="Arrow"
        className="mx-1 w-2.5 h-2.5 object-contain"
      />
      <span className="text-[var(--color-grey)] font-medium">MEN</span>
    </div>

      <h2 className="text-2xl font-bold text-heading mb-4">MEN</h2>

      {/* Categories */}
      <div className="flex gap-3 mb-8  w-full">
        {[category1, category2, category3, category4].map((img, i) => (
          <div key={i} className="relative w-full">
            <img
              src={img}
              alt="category"
              className="w-full h-48 object-cover rounded-sm"
            />
            <button className="absolute bottom-3 left-3 bg-[var(--color-bg)] text-[var(--color-black)] px-3 py-1 text-xs font-semibold">
              {["ATHLETIC SHOES", "CASUAL SNEAKERS", "RETRO", "WHITE"][i]} →
            </button>
          </div>
        ))}
      </div>

      {/* Filters & Sort */}
      <div className="flex justify-between items-center mb-4">
        <button className="border border-[var(--color-bg-light)] text-sm px-4 py-2 text-[var(--color-black)]">Filters ⌵</button>
        <button className="border border-[var(--color-bg-light)] text-sm px-4 py-2 text-[var(--color-black)]">SORT BY: Popularity</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[var(--color-bg)] p-4 relative text-xs"
          >
            {/* Image Container with Gray Background */}
            <div className="bg-[var(--color-muted)] p-4 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] object-contain mb-3"
              />
              <span className="absolute top-2 left-2 bg-[var(--color-bg)] text-[var(--color-black)] text-[10px] font-semibold px-1 py-0.5 border border-[var(--color-black)]">SALE</span>
              <img
                src={heartIcon}
                alt="heart"
                className="absolute bottom-2 right-2 w-3 h-3 cursor-pointer"
                onClick={() => toggleLike(product.id)}
              />
            </div>

            {/* Name */}
            <h3 className="mt-3 font-semibold text-sm text-[var(--color-black)]">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-1">
              {renderStars(product.rating)}
              <span className="text-[var(--color-grey)] text-xs">{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="line-through text-[var(--color-grey)] mr-1">{product.oldPrice}</span>
              <span className="font-bold text-[var(--color-black)]">{product.newPrice}</span>
            </div>

            {/* Style Images */}
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

            {/* Specification */}
            <p className="text-[var(--color-grey)] text-[11px]">
              <span className="font-semibold text-[var(--color-black)]">Specification:</span> {product.tags.join(", ")}
            </p>
          </div>
        ))}
      </div>
      
      {/* Load More */}
      <div className="flex justify-center mt-10">
        <button className="border border-[var(--color-bg-light)] px-6 py-2 text-sm text-[var(--color-black)]">LOAD MORE</button>
      </div>

      {/* Footer Text */}
      <div className="text-xs text-[var(--color-grey)] mt-10 space-y-4 max-w-4xl mx-auto">
        <p>
          Fly through history with our aircraft-specific squadrons, recreating the story of aviation
          with meticulously hand-carved and hand-painted wooden models. Gift your unique aviator a
          one-of-a-kind model of the aircraft they flew.
        </p>
        <p>
          Expertly crafted and heirloom quality, these models can be reproduced from your photos and
          make perfect gifts for holidays, retirements, birthdays, or welcome-home surprises. Typically
          18 inches long, custom sizes are also available.
        </p>
        <p>
          Aviators cherish milestones like their first solo, carrier landing, or combat flight. Our
          skilled artisans can recreate these moments with precision, and we offer options for adding
          personalized inscriptions or call signs on brass plates.
        </p>
        <p>
          Our wooden military aircraft models, detailed with various weapons and clear pieces, are
          guaranteed. For custom models, we'll send approval pictures. Order now and preserve these
          memories for generations.
        </p>
      </div>
    </div>
  );
};

export default Category;