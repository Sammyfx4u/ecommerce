import React from "react";

// Images
import backgroundImage from "../assets/images/footer-bg.svg";
import logo from "../assets/images/logo.svg";

// Icons
import facebookIcon from "../assets/icon/facebook.svg";
import xIcon from "../assets/icon/X.svg";
import instagramIcon from "../assets/icon/instagram.svg";
import youtubeIcon from "../assets/icon/youtube.svg";
import phoneIcon from "../assets/icon/phone.svg";
import emailIcon from "../assets/icon/email.svg";
import mastercardIcon from "../assets/icon/mastercard.svg";
import visaIcon from "../assets/icon/visa.svg";
import afterpayIcon from "../assets/icon/afterpay.svg";
import paypalIcon from "../assets/icon/paypal.svg";

const Footer = () => {
  return (
    <footer className="text-body text-[var(--color-black)]">
      {/* Newsletter CTA */}
      <section
        className="bg-cover bg-center text-white text-center py-16 px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-heading italic leading-tight">
          Be the first to know about new <br />
          <span className="text-white">drops and exclusive offers!</span>
        </h2>
        <p className="mt-4 text-base max-w-xl mx-auto">
          Subscribe to our newsletter for early access, special deals,
          <br />
          and the latest trends.
        </p>
        <form className="mt-6 flex justify-center flex-wrap gap-0">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 w-96 text-[var(--color-black)] outline-none bg-[var(--color-bg)] border border-gray-300 rounded-none"
            required
          />
          <button
            type="submit"
            className="bg-[var(--color-black)] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 border border-[var(--color-black)] rounded-none"
          >
            SIGN UP →
          </button>
        </form>
      </section>

      {/* Footer Main Content */}
      <section className="bg-[var(--color-bg)] py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
          {/* Column 1 */}
          <div className="md:col-span-1 space-y-4">
            <img src={logo} alt="Zapatos Logo" className="h-10" />
            <p className="text-body">
              Not Just Shoes, but a Statement.
              <br />
              Kicks Designed to Keep You One Step Ahead.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-2">
              <img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
              <img src={xIcon} alt="X / Twitter" className="h-5 w-5" />
              <img src={instagramIcon} alt="Instagram" className="h-5 w-5" />
              <img src={youtubeIcon} alt="YouTube" className="h-5 w-5" />
            </div>

            {/* Contact Info */}
            <div className="pt-4 space-y-2 text-[15px]">
              <div className="flex items-center gap-2">
                <img src={phoneIcon} alt="Phone" className="h-4 w-4" />
                <span className="text-body">08978978789</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="Email" className="h-4 w-4" />
                <span className="text-body">supportoursmallbusiness@g.com</span>
              </div>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="font-semibold text-heading mb-3">SHOP</h4>
            <ul className="space-y-2">
              <li className="text-body">Men</li>
              <li className="text-body">Kids</li>
              <li className="text-body">Women</li>
            </ul>
          </div>

          {/* BRANDS */}
          <div>
            <h4 className="font-semibold text-heading mb-3">BRANDS</h4>
            <ul className="space-y-2">
              <li className="text-body">Adidas</li>
              <li className="text-body">Nike</li>
              <li className="text-body">Fila</li>
              <li className="text-body">Brooks</li>
              <li className="text-body">Mizuna</li>
              <li className="text-body">Salomon</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-heading mb-3">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li className="text-body">Return</li>
              <li className="text-body">Shipping</li>
              <li className="text-body">Terms & Conditions</li>
              <li className="text-body">Privacy Policy</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold text-heading mb-3">SUPPORT</h4>
            <ul className="space-y-2">
              <li className="text-body">About Us</li>
              <li className="text-body">FAQ’s</li>
              <li className="text-body">Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="bg-[var(--color-black)] text-white text-xs py-4 px-6 flex flex-wrap justify-center items-center gap-6 text-center">
        <p className="text-body">© 2024 Zapatos. Store by Blazecommerce.io</p>
        <div className="flex items-center gap-4">
          <img src={mastercardIcon} alt="Mastercard" className="h-5" />
          <img src={visaIcon} alt="Visa" className="h-5" />
          <img src={afterpayIcon} alt="Afterpay" className="h-5" />
          <img src={paypalIcon} alt="PayPal" className="h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;