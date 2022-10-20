import React from "react";

function MusicPlayer() {
  return (
    <div className="musicPlayer flex flex-col px-5 w-[78%] border-2 border-black py-3 bg-[#232A4e] rounded-xl ml-[13rem] mt-5">
      <div className="upperPart flex items-center justify-between">
        {/* Profile */}
        <div className="profile flex ">
          <img
            className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
            src={require("../img/Mask Group 23.png")}
            alt=""
          />
          <div className="details flex flex-col ml-4">
            <span className="text-[1rem]">Tristam Bone Dry</span>
            <span className="text-sm text-gray-500"> Unknown Artist</span>
          </div>
        </div>
        <div>
          <img src={require("../img/path.png")} className="h-[1rem]" alt="" />
        </div>
      </div>
      <div className="lowerPart"></div>
    </div>
  );
}

export default MusicPlayer;
