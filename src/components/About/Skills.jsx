import React from "react";

function Skills({ content, percentage = "95" }) {
  let temp = percentage;
  percentage = `w-[${temp}%]`;
  console.log(percentage);
  return (
    <div className="w-[24rem] mb-3  h-fit">
      <div className="flex justify-between">
        <h2>{content}</h2>
        <p>{temp}%</p>
      </div>
      <div className=" border-[#000] border rounded  w-full">
        <div className={`${percentage}  bg-[#00abf0] h-3   rounded`}></div>
      </div>
    </div>
  );
}

export default Skills;
