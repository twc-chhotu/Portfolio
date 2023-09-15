import React from "react";
import { NavLink, Link } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
function Header() {
  return (
    <header className="w-full h-14 bg-[#081b29] flex justify-around items-center text-xl ">
      <h2 className="text-3xl text-white">
        Port<span className="text-[#00abf0]">folio.</span>
      </h2>
      <nav>
        <ul className="flex justify-around gap-5">
          <li>
            <NavLinkItem to="/" value="Home" />
          </li>
          <li>
            <NavLinkItem to="/about" value="About" />
          </li>
          <li>
            <NavLinkItem to="/projects" value="Projects" />
          </li>
          <li>
            <NavLinkItem to="/services" value="Services" />
          </li>
          <li>
            <NavLinkItem to="/contact" value="Contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
