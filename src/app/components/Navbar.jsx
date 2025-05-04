"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter at the top

const navLink = [
  { link: "/courses", name: "Courses" },
  { link: "/about", name: "About" },
  { link: "/categories", name: "Blog" },
  { link: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
        setColor(true);
      } else {
        setScroll(false);
        setColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <div className="absolute top-0 w-full z-20">
        <div
          className={`fixed w-full px-15 py-4 flex justify-between items-center transition-all duration-300 ${
            scroll
              ? "bg-black/50 text-white shadow-lg"
              : "bg-transparent text-white"
          }`}
        >
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-semibold">𝕊𝕊_𝔹𝕝𝕠𝕘</h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 items-center">
            {navLink.map((data) => (
              <li
                key={data.name}
                className="cursor-pointer hover:text-gray-500 uppercase font-bold text-[18px]"
              >
                <Link href={data.link}>{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
