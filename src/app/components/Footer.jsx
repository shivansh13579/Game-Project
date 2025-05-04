import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/[0.1] py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700 dark:text-gray-300">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
            Aceternity
          </h3>
          <p className="text-sm">
            Bringing you beautifully animated UI components for modern web apps.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-black dark:text-white mb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-black dark:text-white mb-2">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-500">
              🐦
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-800">
              💻
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              📸
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Aceternity UI. All rights reserved.
      </div>
    </footer>
  );
}
