import React from "react";

const Feature = (props) => {
  return (
    <div className=" flex flex-col items-center justify-center relative mx-[12rem] text-center">
      <div className="icon bg-[#081730] rounded-2xl p-4">
        <img
          src={require(`../img/${props.icon}.png`)}
          alt=""
          className="w-[3rem]"
        />
      </div>
      <span className="mt-5">{props.title}</span>
      <span className="text-[#707070] mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
      </span>
      <span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">
        Learn More
      </span>
    </div>
  );
};

export default Feature;
