import React from "react";
import CenterMenu from "./components/CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu></CenterMenu>

      {/* Social Icon */}
      <div className="flex w-[100%] justify-center mt-14 ">
        <div className="facebook">
          <Facebook></Facebook>
        </div>
        <div className="twitter">
          <Twitter></Twitter>
        </div>
        <div className="youtube">
          <YouTube></YouTube>
        </div>
        <div className="linkedin">
          <LinkedIn></LinkedIn>
        </div>
      </div>
    </div>
  );
}

export default Footer;
