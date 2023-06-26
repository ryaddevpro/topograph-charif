"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pahtname = usePathname();
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-indigo-600 ">
            <Image
              src={"/images/logo2.png"}
              width={200}
              height={50}
              alt="200"
            />
          </Link>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
            onClick={toggleCollapse}
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        <div
          className={`${
            isCollapsed ? "hidden" : "flex"
          } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
          id="navbar-collapse"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                pahtname == link.href ? "bg-indigo-600 text-white" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
