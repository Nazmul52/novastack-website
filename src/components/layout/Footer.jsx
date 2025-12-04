import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">
              Nova<span className="text-primary-400">Stack</span>
            </h3>
            <p className="mb-4 text-gray-400">
              Empowering innovation through next-generation technology
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 text-gray-400 transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 text-gray-400 transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link
                to="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 text-gray-400 transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                to="mailto:hello@novastack.com"
                className="hover:text-primary-400 text-gray-400 transition-colors"
              >
                <FaEnvelope className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} NovaStack Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
