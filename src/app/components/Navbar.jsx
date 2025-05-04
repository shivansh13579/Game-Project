"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLink = [
  { link: "/#", name: "Shivam" },
  { link: "/about", name: "About" },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`flex items-center justify-between px-6 lg:px-10 py-3 transition-all duration-300 ${
          scroll
            ? "bg-black/80 text-white shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <Link href="/">
          <img
            className="w-[140px] h-[40px] object-contain"
            src="https://quizard.app/logo_light.png"
            alt="Quizard Logo"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLink.map((data) => (
            <li
              key={data.name}
              className="cursor-pointer hover:text-gray-300 uppercase font-semibold text-sm"
            >
              <Link href={data.link}>{data.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          {navLink.map((data) => (
            <Link
              key={data.name}
              href={data.link}
              onClick={() => setMenuOpen(false)}
              className="block uppercase font-semibold text-sm hover:text-gray-400"
            >
              {data.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
