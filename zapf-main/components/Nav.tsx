"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
   
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Navigation links with their respective paths
  const navLinks = [
    {   id:1,  name: "Home", path: "/" },
    {   id:2,  name: "About", path: "#faq" },
    {   id:4,  name: "Contact", path: "#contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full z-20 flex justify-between items-center px-3 lg:px-6 py-1 ${scrolled ? "bg-white" : "bg-white"} `}
        style={{
          backgroundImage: "url('/top-left-right.svg')",
          backgroundSize: "cover",
          fontWeight: "500",
          lineHeight: 1,
        }}
      >
        <nav className="flex items-center text-black">
          <Link
            href={"/"}
            className="flex items-center justify-center ">
            <img
              className="h-[45px]  lg:h-[60px] "
              src="./narimain.jpg"
              alt="logo"
            />
          </Link>
         
          <div className="hidden lg:flex space-x-6 ml-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`relative overflow-hidden py-1 px-2 ${
                  hovered === index ? "text-blue-600" : "text-black"
                }`}
                onMouseEnter={() => setHovered(null)}
                onMouseLeave={() => setHovered(null)}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                    hovered === index ? "translate-x-0" : "-translate-x-full"
                  }`}
                />
              </Link>
            ))}
          </div>
        </nav>
       
        <div className="flex items-center">
          <Link
            href="#contact"
            className="hidden lg:flex items-center justify-center px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Contact Us
          </Link>
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-x-0 top-[57px] z-10 bg-white shadow-lg transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col py-3">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="py-3 px-8 text-black hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mx-8 mt-3 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

// Add this to your global CSS to make the transition smoother
/*
html {
  scroll-behavior: smooth;
}

.custom-dashed-border {
  border-bottom: 2px dashed rgba(0, 0, 0, 0.1);
}
*/