import React, { useState } from "react";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
import shoe5 from "../assets/shoe5.png";
import shoe6 from "../assets/shoe6.png";
import shoe7 from "../assets/shoe7.png";
import shoe8 from "../assets/shoe8.png";
import shoe9 from "../assets/shoe9.png";
import shoe10 from "../assets/shoe10.png";
import shoe11 from "../assets/shoe11.png";
import shoe12 from "../assets/shoe12.png";
import heartIcon from "../assets/icon/heart.svg";
import { FaStar } from "react-icons/fa";

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

  return (
    <div className="px-6 lg:px-16 py-10 text-[--color-black] font-[--font-base]">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">HOME &gt; MEN</div>
      <h2 className="text-2xl font-bold mb-4">MEN</h2>

      {/* Categories */}
      <div className="flex gap-4 overflow-auto mb-8">
        {[category1, category2, category3, category4].map((img, i) => (
          <div key={i} className="relative min-w-[200px]">
            <img
              src={img}
              alt="category"
              className="w-full h-48 object-cover rounded-sm"
            />
            <button className="absolute bottom-3 left-3 bg-white text-black px-3 py-1 text-xs font-semibold">
              {["ATHLETIC SHOES", "CASUAL SNEAKERS", "RETRO", "WHITE"][i]} →
            </button>
          </div>
        ))}
      </div>

      {/* Filters & Sort */}
      <div className="flex justify-between items-center mb-4">
        <button className="border border-gray-300 text-sm px-4 py-2">Filters ⌵</button>
        <button className="border border-gray-300 text-sm px-4 py-2">SORT BY: Popularity</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-sm p-4 relative text-sm"
          >
            {/* SALE Tag */}
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">SALE</div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-3"
            />

            {/* Name */}
            <h3 className="font-semibold mb-1">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => {
                const rating = product.rating;
                if (i + 1 <= Math.floor(rating)) {
                  return <FaStar key={i} className="text-black w-4 h-4" />;
                } else if (i + 0.5 <= rating) {
                  return <FaStar key={i} className="text-black w-4 h-4 opacity-50" />;
                } else {
                  return <FaStar key={i} className="text-gray-300 w-4 h-4" />;
                }
              })}
              <span className="text-sm text-gray-600 ml-1">
                {product.rating.toFixed(2)} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-1">
              <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>
              <span className="font-bold">{product.newPrice}</span>
            </div>

            {/* Tags */}
            <div className="text-xs text-gray-600">Specification:</div>
            <div className="text-xs text-gray-800 mb-3">
              {product.tags.join(", ")}
            </div>

            {/* Heart Button */}
            <div
              onClick={() => toggleLike(product.id)}
              className={`w-7 h-7 absolute bottom-3 right-3 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${
                likedItems[product.id] ? "bg-red-500" : "bg-transparent"
              }`}
            >
              <img
                src={heartIcon}
                alt="heart"
                className={`w-4 h-4 ${likedItems[product.id] ? "invert brightness-200" : ""}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-10">
        <button className="border border-gray-300 px-6 py-2 text-sm">LOAD MORE</button>
      </div>

      {/* Footer Text */}
      <div className="text-xs text-gray-700 mt-10 space-y-4 max-w-4xl mx-auto">
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
