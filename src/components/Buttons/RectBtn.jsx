import React from "react";
import { Link } from "react-router-dom";

function RectBtn({ content = "Hire Me", link = "#", to = "left" }) {
  return (
    <div className="w-36 relative h-12 rounded-lg overflow-hidden">
      <Link
        to={link}
        className={`peer text-2xl border-2 absolute top-0 border-[#00abf0] rounded-lg text-white px-3 py-1 w-full h-full z-10`}
      >
        {content}
      </Link>
      <div
        className={`peer-hover:w-0 w-full ${
          to == "right" ? "right-0" : "left-0"
        }  bg-[#00abf0] duration-300 h-full  absolute  top-0 z-0 `}
      ></div>
    </div>
  );
}

export default RectBtn;
