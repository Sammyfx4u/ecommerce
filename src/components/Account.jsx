import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[var(--color-bg)] px-4 py-12">
      <div className="w-full max-w-md border border-[var(--color-bg-light)] p-8 shadow-sm text-[var(--color-black)]">
        <h1 className="text-3xl font-bold text-heading text-center mb-8">JOIN US</h1>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[var(--color-black)]">
            Name <span className="text-[var(--color-black)]">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-[var(--color-bg-light)] px-4 py-2 focus:outline-none text-sm text-[var(--color-black)]"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[var(--color-black)]">
            Email <span className="text-[var(--color-black)]">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-[var(--color-bg-light)] px-4 py-2 focus:outline-none text-sm text-[var(--color-black)]"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium mb-1 text-[var(--color-black)]">
            Password <span className="text-[var(--color-black)]">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-[var(--color-bg-light)] px-4 py-2 pr-10 focus:outline-none text-sm text-[var(--color-black)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-9 text-[var(--color-grey)] text-lg"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>

        {/* Description */}
        <div className="text-sm mb-6 text-[var(--color-black)]">
          <p className="mb-2 text-[var(--color-black)]">Create an account and you will get:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-body text-[var(--color-black)]">Sale promotions!</li>
            <li className="text-body text-[var(--color-black)]">Bonus offers!</li>
            <li className="text-body text-[var(--color-black)]">Update for all new product releases!</li>
          </ul>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-[var(--color-black)] mb-6">
          Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and for
          other purposes described in our{" "}
          <a href="#" className="underline text-[var(--color-black)]">
            privacy policy
          </a>.
        </p>

        {/* Sign Up Button */}
        <button className="w-full bg-[var(--color-black)] text-white py-3 font-semibold text-sm hover:opacity-90">
          SIGN UP
        </button>

        {/* Sign In Link */}
        <p className="text-sm text-center mt-6 text-[var(--color-black)]">
          Already have an account?{" "}
          <a href="#" className="font-semibold underline text-[var(--color-black)]">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Account;