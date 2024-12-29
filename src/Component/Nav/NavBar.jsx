import React, { useState } from "react";
import logo from "../../assets/UpperNavBar/Planeteria.png";
import arrowDown from "../../assets/NavBar/Expand Arrow.png";
import searchIcon from "../../assets/NavBar/Search.png";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const menuItems = ["Gardening", "Plants", "Seeds", "Accessories"];

  return (
    <nav className="navbar flex items-center justify-between px-4 py-3 bg-white shadow-md relative">
      <div className="hidden md:flex gap-6 items-center">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 cursor-pointer">
            <span className="font-semibold text-gray-700 hover:text-green-600">
              {item}
            </span>
            <img
              className="w-4 h-4"
              src={arrowDown}
              alt={`${item} dropdown`}
              aria-label={`Expand ${item}`}
            />
          </div>
        ))}
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => {
            setSearchOpen(false);
            setMenuOpen(!isMenuOpen);
          }}
          className="text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <img
        className="h-8 md:h-10 mx-auto cursor-pointer"
        src={logo}
        alt="Planeteria logo"
      />

      {/* Search Icon */}
      <div className="md:hidden bg-red-600 items-center p-1.5 rounded-[3px] justify-center">
        <button
          onClick={() => {
            setMenuOpen(false)
            setSearchOpen(!isSearchOpen)
          }}
          className="text-red-600 focus:outline-none"
          aria-label="Toggle search"
        >
          <img className="w-6 h-6" src={searchIcon} alt="Search icon" />
        </button>
      </div>

      {/* Desktop Navigation */}

      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-md shadow-sm">
        <input
          placeholder="What are you looking for?"
          type="text"
          className="flex-grow px-4 py-2 text-gray-600 placeholder-gray-400 outline-none rounded-l-md"
          aria-label="Search"
        />
        <button
          className="bg-red-600 hover:bg-green-700 text-white p-2 flex items-center justify-center rounded-r-md"
          aria-label="Search button"
        >
          <img className="w-5 h-5" src={searchIcon} alt="Search" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
          <ul className="flex flex-col p-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="py-2 border-b border-gray-200 text-gray-700 hover:text-green-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 px-4 py-2 bg-white shadow-lg z-10">
          <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
            <input
              placeholder="What are you looking for?"
              type="text"
              className="flex-grow px-4 py-2 text-gray-600 placeholder-gray-400 outline-none rounded-l-md"
              aria-label="Search"
            />
            <button
              className="bg-red-600 hover:bg-green-700 text-white p-2 flex items-center justify-center rounded-r-md"
              aria-label="Search button"
            >
              <img className="w-5 h-5" src={searchIcon} alt="Search" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
