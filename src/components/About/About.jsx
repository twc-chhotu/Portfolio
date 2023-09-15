import React from "react";
import myPic from "../../assets/mySelf.jpg";
import "./About.css";
import Skills from "./Skills";

function About() {
  return (
    <div className="bg-[#112e42] h-screen w-full text-white">
      <div className="flex justify-around">
        <div className="w-80 h-80 flex justify-center items-center">
          <img
            src={myPic}
            alt="ckumar"
            className="rounded-full w-[19rem] h-[19rem] absolute border-2 border-[#00abf0]"
          />
          <div className="spin w-80 h-80 border-2 border-transparent border-t-[#00abf0] border-b-[#00abf0] rounded-full"></div>
        </div>
        <p className="w-[50%] text-xl">
          I am a passionate for web development with a strong command of
          development technologies, programming languages, data structures, and
          algorithms. I am currently pursuing a Bachelor of Computer
          Applications and have experience working on a variety of web
          development projects. I am also proficient in desktop application
          development using Java, AWT, and Spring. I am a team player and have a
          strong work ethic. I am always looking for new challenges and
          opportunities to learn and grow. I am confident that I would be a
          valuable asset to your team. thank you for visiting my portfolio.
        </p>
      </div>

      {/* =================SKILLS================= */}

      <div>
        <h3>My Skills</h3>
        <div className="flex justify-around w-full px-20 h-96">
          <div className="w-[28rem] h-full">
            <h2>Web Development</h2>
            <div className="border-2 border-black h-full flex justify-center">
              <Skills content="MongoDB" percentage="96" />
            </div>
          </div>
          {/* = */}
          <div className="w-[28rem] h-full">
            <h2>Programming Skills</h2>
            <div className="border-2 border-black h-full flex justify-center">
              <Skills content="C/C++" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
