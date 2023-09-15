import React from "react";
import {
  AiFillGithub,
  AiFillHeart,
  AiFillLinkedin,
  AiOutlineInstagram,
  BiCodeAlt,
  BsFacebook,
} from "../ReactIcons/Icons";

import { GiHeartWings } from "react-icons/gi";
import RectBtn from "../Buttons/RectBtn";
import collegeFront from "../../assets/webdev.png";
import SocialBtn from "../Buttons/SocialBtn";

function Home() {
  return (
    <main className="text-xl bg-[#112e42] w-full h-screen flex justify-around items-center">
      {/* ============LEFT SIDE============= */}
      <div className="w-[30rem]  h-[26rem] flex flex-col justify-around items-center">
        <div className="text-white flex flex-col gap-1">
          <p className="text-6xl font-bold flex items-center ">
            Hii,
            <span className="text-[#00abf0] flex items-center">
              &nbsp;I`m Chh
              <GiHeartWings className="text text-pink-500 text-5xl mb-[-1rem]" />
              tu
            </span>
          </p>
          <p className="text-4xl font-bold">I`m very passionate for</p>
          <h1 className="text-4xl font-bold">
            <span className="text-[#00abf0] ">Web Development</span> as
          </h1>
          <p className="text-4xl font-bold">well as </p>
        </div>

        <div className="flex justify-around w-96">
          <RectBtn to="left" content="Hire Me" />
          <RectBtn to="right" content="View CV" />
        </div>

        {/* -----------Social Media---------- */}
        <div className="flex justify-between w-64 mt-10 ">
          <SocialBtn content={<BsFacebook />} />
          <SocialBtn content={<AiOutlineInstagram />} />
          <SocialBtn content={<AiFillLinkedin />} />
          <SocialBtn content={<AiFillGithub />} />
          <SocialBtn content={<BiCodeAlt />} />
        </div>
      </div>

      {/* ============RIGHT SIDE============= */}
      <div>
        <img
          src={collegeFront}
          alt=""
          className="rounded-full w-96 h-96 border-4 border-cyan-500"
        />
      </div>
    </main>
  );
}

export default Home;
