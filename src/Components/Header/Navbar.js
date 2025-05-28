import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showDrawerServices, setShowDrawerServices] = useState(false);

  const handleServicesToggle = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const drawerLinks = [
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Career", path: "/career" },
    { label: "Investor Relation", path: "/investor-relation" },
    { label: "Testimonials", path: "/testimonial" },
    // { label: "Dashboard", path: "/dashboard" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_White_9fd26be901.webp&w=3840&q=75"
            alt="ChefKart Logo"
            className="h-8 sm:h-12 w-auto"
          />
        </div>

        {/* Links - Desktop only */}
        <div className="hidden md:flex items-center space-x-8">
          <div
            className="flex items-center w-[160px] mr-[-30px] space-x-1 cursor-pointer relative"
            onClick={handleServicesToggle}
          >
            <span className="text-base sm:text-xl hover:text-[#f81]">
              Our Services
            </span>
            <FaChevronDown
              size={12}
              className={`transition-transform duration-300 ${
                showServicesDropdown ? "rotate-180" : ""
              }`}
            />
            {showServicesDropdown && (
              <div className="absolute bg-white text-black shadow-md py-2 top-full left-0 w-[240px] z-50">
                <ul>
                  <li>
                    <Link
                      to="/one-time-cook"
                      className="block hover:text-[#f81] px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                    >
                      <span>Chefit: One-time cook</span>
                      <FaChevronRight size={12} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/chef-for-party"
                      className="block px-4 py-2 hover:text-[#f81] hover:bg-gray-100 flex justify-between items-center"
                    >
                      <span>Chef for Party</span>
                      <FaChevronRight size={12} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/join-chefkart"
                      className="block px-4 py-2 hover:text-[#f81] hover:bg-gray-100 flex justify-between items-center"
                    >
                      <span>Connect with ChefKart</span>
                      <FaChevronRight size={12} />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/cooks-near-me">
            <span className="cursor-pointer text-base sm:text-xl hover:text-[#f81]">
              Cooks Near Me
            </span>
          </Link>
        </div>

        {/* Contact & Menu Icon */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md font-semibold whitespace-nowrap">
              Contact Us
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md font-semibold whitespace-nowrap">
              Register as a chef
            </button>
          </Link> */}
          {/* Contact & Menu Icon */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <Link to="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md font-semibold whitespace-nowrap">
                Contact Us
              </button>
            </Link>
            <Link to="/register-chef">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md font-semibold whitespace-nowrap">
                Join as Chef
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md font-semibold whitespace-nowrap">
                SignUp
              </button>
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(true)}
            className="text-black p-1.5 sm:p-2 rounded-full cursor-pointer"
          >
            <img
              src="https://storage.googleapis.com/chefkart-strapi-media/burger_icon_33cb06d073.svg"
              alt="menu"
              className="w-8 h-8 sm:w-7 sm:h-7 lg:w-12 lg:h-12 mr-2 sm:mr-4 lg:mr-10"
            />
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-72 bg-black bg-opacity-70 backdrop-blur-md text-white z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-col justify-center h-[80%] px-6 space-y-6 text-lg font-bold">
          {/* Mobile Buttons */}
          <div className="block md:hidden px-6 pt-4">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 text-sm rounded-lg font-semibold shadow-sm transition duration-200">
                Contact Us
              </button>
            </Link>
            <Link to="/register-chef" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 text-sm rounded-lg font-semibold shadow-sm transition duration-200 mt-2">
                Join as Chef
              </button>
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 text-sm rounded-lg font-semibold shadow-sm transition duration-200 mt-2">
                SignUp
              </button>
            </Link>
          </div>

          {/* Mobile-only Links */}
          <div className="block md:hidden space-y-3">
            {/* Our Services */}
            <div>
              <div
                className="cursor-pointer flex justify-between items-center hover:text-[#f81]"
                onClick={() => setShowDrawerServices(!showDrawerServices)}
              >
                <span>Our Services</span>
                <FaChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    showDrawerServices ? "rotate-180" : ""
                  }`}
                />
              </div>
              {showDrawerServices && (
                <div className="mt-2 ml-3 text-sm space-y-2">
                  <Link
                    to="/one-time-cook"
                    className="block hover:text-[#f81]"
                    onClick={() => setIsOpen(false)}
                  >
                    • Chefit: One-time cook
                  </Link>
                  <Link
                    to="/chef-for-party"
                    className="block hover:text-[#f81]"
                    onClick={() => setIsOpen(false)}
                  >
                    • Chef for Party
                  </Link>
                  <Link
                    to="/join-chefkart"
                    className="block hover:text-[#f81]"
                    onClick={() => setIsOpen(false)}
                  >
                    • Connect with ChefKart
                  </Link>
                </div>
              )}
              <hr className="my-3 border-white/20" />
            </div>

            {/* Cooks Near Me */}
            <Link
              to="/cooks-near-me"
              className="block hover:text-[#f81]"
              onClick={() => setIsOpen(false)}
            >
              Cooks Near Me
            </Link>
            <hr className="my-3 border-white/20" />
          </div>

          {/* Shared Links */}
          {drawerLinks.map((link, idx) => (
            <div key={link.label}>
              <Link
                to={link.path}
                className="cursor-pointer hover:text-[#f81]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
              {idx !== drawerLinks.length - 1 && (
                <hr className="my-3 border-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
