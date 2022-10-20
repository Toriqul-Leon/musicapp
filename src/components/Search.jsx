import React from "react";
import MusicPlayer from "./MusicPlayer";

function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* Left Side */}
      <div className="left flex-1">
        <img
          className="absolute top-[22rem] left-[-120rem]"
          src={require("../img/backgraphics.png")}
          alt=""
        />
        <img
          className="absolute w-[16rem] top-[26rem]"
          src={require("../img/d1.png")}
          alt=""
        />
        <img
          className="absolute w-[9rem] top-[32.7rem] left-[7rem]"
          src={require("../img/d2.png")}
          alt=""
        />
        <img
          className="absolute w-[9rem] top-[33rem] left-[17rem]"
          src={require("../img/d3.png")}
          alt=""
        />
        <img
          className="absolute w-[17rem] top-[50rem] left-[2rem]"
          src={require("../img/d4.png")}
          alt=""
        />
      </div>
      {/* Right side */}
      <div className="right flex flex-col items-start justify-start flex-1 h-[100%] pt-[9rem]">
        <div className="searchBar flex justify-start w-[100%]">
          <input
            className="flex-[19] ml-52  outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
            type="text"
            placeholder="Enter the keyword or URL"
          />
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              className="w-[1.5rem] "
              src={require("../img/search.png")}
              alt=""
            />
          </div>
        </div>
        {/* Tiled icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%] ml-52">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>
        {/* Paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl ml-52">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        {/* Music Player */}
        <MusicPlayer></MusicPlayer>
      </div>
    </div>
  );
}

export default Search;
