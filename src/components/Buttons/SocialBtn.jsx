import React from "react";
import { Link } from "react-router-dom";

function SocialBtn({ content, link = "#", to = "left" }) {
  return (
    <div className="w-10 relative h-10 rounded-full overflow-hidden">
      <Link
        to={link}
        className={`peer text-lg  border-2 absolute top-0 text-[#00abf0]  border-[#00abf0] rounded-full hover:text-[#081b29]  w-full h-full z-10 flex justify-center items-center duration-500`}
      >
        {content}
      </Link>

      <div
        className={`peer-hover:w-full w-0 left-0 bg-[#00abf0] duration-500 h-full  absolute  top-0 z-0 `}
      ></div>
    </div>
  );
}

export default SocialBtn;
