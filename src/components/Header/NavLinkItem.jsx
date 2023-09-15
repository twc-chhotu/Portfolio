import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavLinkItem({ to, value }) {
  console.log("to---> ", to);
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` ${isActive ? "text-[#00abf0]" : "text-white"}
                    block py-2 pr-4 pl-3 duration-200 hover:text-orange-700 `
      }
    >
      {value}
    </NavLink>
  );
}

export default NavLinkItem;
