import React from "react";
import CenterMenu from "./components/CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer() {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu></CenterMenu>

      {/* Social Icon */}
      <div className="flex w-[100%] justify-center mt-14 ">
        <div className={SocialStyle}>
          <Facebook></Facebook>
        </div>
        <div className={SocialStyle}>
          <Twitter></Twitter>
        </div>
        <div className={SocialStyle}>
          <YouTube></YouTube>
        </div>
        <div className={SocialStyle}>
          <LinkedIn></LinkedIn>
        </div>
      </div>
    </div>
  );
}

export default Footer;
