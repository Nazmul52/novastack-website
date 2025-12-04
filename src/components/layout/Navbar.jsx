import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary-600 text-2xl font-bold">
              Nova<span className="text-secondary-600">Stack</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-primary-600 font-medium text-gray-700 transition-colors duration-200 ${
                    isActive ? "text-primary-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 rounded-lg px-6 py-2 text-white transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-primary-600 text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "hover:text-primary-600 text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary-600 hover:bg-primary-700 block w-full rounded-md px-3 py-2 text-center text-base font-medium text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
