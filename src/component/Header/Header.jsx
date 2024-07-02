import React from "react";

const Header = () => {
  return (
    <header className="bg-neutral-900">
      <div
        className="header_content container mx-auto flex justify-between items-center text-white p-5
      "
      >
        <div className="left_header text-xl">
          <a href="">Start Bootstrap</a>
        </div>
        <nav className="right_header flex justify-around list-none gap-4">
          <a href="#" className="text-gray-500 hover:text-white">
            <li>Home</li>
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <li>About</li>
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <li>Service</li>
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <li>Contact</li>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
