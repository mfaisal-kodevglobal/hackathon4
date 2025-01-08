'use client'
import React, { useState } from "react";

const HeaderTopBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
        {/* Announcement Section */}
        <section className=" bg-[#7E33E0] text-[#F1F1F1] px-1 sm:px-2 h-[44px] ">
          <div className="container mx-auto flex items-center justify-between w-[1177px] h-[44px]">

            {/* Contact Info */}
            <div className="text-sm pl-28 flex items-center space-x-4">

              {/* Email */}
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.5l-11.707-7.207 1.414-1.414 10.293 6.707 10.293-6.707 1.414 1.414z" />
                  <path d="M22.707 9.207l-10.707 7-10.707-7v9.793h21.414z" />
                </svg>
                <span>faisal@gmail.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.68 1.432a3 3 0 0 0-4.36.041l-1.78 1.837a3 3 0 0 0-.818 2.133c0 .404.033.81.1 1.211l.4 2.45a1 1 0 0 1-.402.957L7.195 12.2a1 1 0 0 1-.926.08l-1.977-.986a3 3 0 0 0-3.244.45l-.996 1.003c-1.457 1.466-.667 4.11 1.487 6.27 2.155 2.158 4.8 2.947 6.27 1.487l1.002-.996a3 3 0 0 0 .45-3.244l-.986-1.977a1 1 0 0 1 .08-.926l2.033-2.225a1 1 0 0 1 .957-.402l2.45.4c.401.067.807.1 1.211.1a3 3 0 0 0 2.133-.818l1.837-1.78a3 3 0 0 0 .041-4.36l-1.775-1.78a3 3 0 0 0-4.36-.041zm-.707 1.414c.44-.44 1.16-.44 1.6 0l1.775 1.78c.44.44.44 1.16 0 1.6l-1.837 1.78a1 1 0 0 1-.711.274c-.32 0-.637-.025-.947-.076l-2.45-.4a3 3 0 0 0-3.002 1.206L7.947 12.47a3 3 0 0 0-.244 3.503l.986 1.977a1 1 0 0 1-.15 1.081l-.996.997c-.566.566-2.09.102-3.653-1.463C2.275 16.008 1.811 14.484 2.376 13.92l.997-.996a1 1 0 0 1 1.081-.15l1.977.986a3 3 0 0 0 3.503-.244l2.225-2.033a3 3 0 0 0 1.206-3.002l-.4-2.45c-.051-.31-.076-.627-.076-.947a1 1 0 0 1 .274-.711l1.78-1.837z" />
                </svg>
                <span>(12345)6789123</span>
              </div>
            </div>

            {/* Menu Options */}
            <ul className="flex items-center space-x-6 text-sm pr-28">
              {/* Language Dropdown */}
              <li className="flex items-center space-x-2">
                <span>English</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </li>
              {/* Currency Dropdown */}
              <li className="flex items-center space-x-2">
                <span>USD</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </li>
              {/* Login */}
              <li className="flex items-center space-x-2">
                    <a href="login" ><span>Login</span></a>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.67 0 8 1.34 8 4v2h-16v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </li>
              {/* Wishlist */}
              <li className="flex items-center space-x-2">
                {/* Heart Outline Icon */}
                <span>Wishlist</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </li>
              {/* Cart */}
              <li className="flex items-center space-x-2">
                <a href="cart">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4h14l-1.5 9h-13L7 4zm0 0L5.5 2H2v2h2.5L7 4zm10 14c0 1.104-.896 2-2 2s-2-.896-2-2 2-.896 2-2 2 .896 2 2zm-8 0c0 1.104-.896 2-2 2s-2-.896-2-2 2-.896 2-2 2 .896 2 2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
    </>
  );
};

export default HeaderTopBar;
