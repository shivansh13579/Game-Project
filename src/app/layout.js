import Footer from "./components/Footer";
// import { Navbar } from "./components/Navbar";
import Navbar from "./components/Navbar";

import "./globals.css"; // if you're using Tailwind or global styles

export const metadata = {
  title: "MyApp",
  description: "Next.js App with App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
