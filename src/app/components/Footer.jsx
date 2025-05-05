"use client";
import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0E0A0E] dark:bg-black border-t border-gray-200 dark:border-white/[0.1] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300 dark:text-gray-300">
        {/* Column 1 */}
        <div>
          <Link href="/">
            <img
              className="w-[120px] h-[30px] object-contain"
              src="https://quizard.app/logo_light.png"
              alt="Quizard Logo"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 pt-3">
            Beautifully animated UI components for modern web applications.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline text-gray-300 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:support@aceternity.com"
              aria-label="Email"
              className="hover:text-yellow-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Column 4: Optional Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
          <p className="text-sm mb-2 text-gray-400">
            Subscribe to our newsletter
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-1 rounded bg-gray-800 text-white dark:text-white outline-none"
            />
            <button
              type="submit"
              className="bg-white dark:bg-gray-900 text-black dark:text-white px-3 py-1 rounded hover:opacity-80"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Aceternity UI. All rights reserved.
      </div>
    </footer>
  );
}
