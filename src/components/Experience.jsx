import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <img src={require("../img/Path 318.png")} className="w-[5rem]" alt="" />
      <div className="headline mt-7 flex flex-col  items-center text-[2rem]">
        <span>An Amazing App Can Change your Daily Life</span>
        <span>
          <strong>Music Experience</strong>
        </span>
      </div>

      <div className="feature flex  items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="For Live Music"></Feature>
        <Feature icon="music icon" title="For Daily Music"></Feature>
        <Feature icon="Group 4" title="For Artists"></Feature>
      </div>
    </div>
  );
}

export default Experience;
