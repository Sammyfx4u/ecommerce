import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4 py-12">
      <div className="w-full max-w-md border border-gray-200 p-8 shadow-sm text-[--color-black]">
        <h1 className="text-3xl font-bold text-center mb-8">JOIN US</h1>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none text-sm"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none text-sm"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 pr-10 focus:outline-none text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-9 text-gray-500 text-lg"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>

        {/* Description */}
        <div className="text-sm mb-6">
          <p className="mb-2">Create an account and you will get:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sale promotions!</li>
            <li>Bonus offers!</li>
            <li>Update for all new product releases!</li>
          </ul>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-600 mb-6">
          Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and for
          other purposes described in our{" "}
          <a href="#" className="underline">
            privacy policy
          </a>.
        </p>

        {/* Sign Up Button */}
        <button className="w-full bg-black text-white py-3 font-semibold text-sm hover:opacity-90">
          SIGN UP
        </button>

        {/* Sign In Link */}
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <a href="#" className="font-semibold underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Account;
