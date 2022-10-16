import React from "react";

function Download() {
  const downImgStyles =
    " border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]";
  return (
    <div className="download">
      <div className="downloadImages flex">
        <img
          src={require("../img/App Store.png")}
          alt=""
          className={downImgStyles + " mr-[1rem]"}
        />
        <img
          src={require("../img/Google Play.png")}
          alt=""
          className={downImgStyles}
        />
      </div>
    </div>
  );
}

export default Download;
