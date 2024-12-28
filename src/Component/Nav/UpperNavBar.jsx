import React from "react";
import facebookIcon from "../../assets/UpperNavBar/Facebook F.png";
import instagramIcon from "../../assets/UpperNavBar/Instagram.png";
import youtubeIcon from "../../assets/UpperNavBar/YouTube Logo.png";
const UpperNavBar = () => {
  return (
    <nav className="flex justify-end gap-2 border-y-2 pr-20">
      <img
        className="w-5 h-5 my-2 cursor-pointer"
        src={facebookIcon}
        alt="facebook"
      />
      <img
        className="w-5 h-5 my-2 cursor-pointer"
        src={instagramIcon}
        alt="instagram"
      />
      <img
        className="w-5 h-5 my-2 cursor-pointer"
        src={youtubeIcon}
        alt="youtube"
      />
    </nav>
  );
};

export default UpperNavBar;
