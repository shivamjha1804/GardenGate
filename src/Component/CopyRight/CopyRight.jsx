import React from "react";
import heart from "../../assets/Developer/heart.png";
import brain from "../../assets/Developer/brain.png";

const CopyRight = () => {
  return (
    <div
      className="py-4 text-center"
      style={{
        backgroundColor: "#ECFBE8",
      }}
    >
      <p className="text-sm text-gray-600 mb-2">
        © {new Date().getFullYear()} Garden Gate Pvt. All Rights Reserved.
      </p>
      <div className="flex justify-center items-center text-sm text-gray-600 space-x-1">
        <p>This website is made with</p>
        <img src={heart} alt="heart" className="w-9 h-9 " />
        <p>and</p>
        <img src={brain} alt="brain" className="w-7 h-7 mx-5" />
        <p>of</p>
        <a
          href="https://www.linkedin.com/in/shivam-jha-728876208/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline font-semibold ml-1"
        >
          Shivam Jha
        </a>
      </div>
    </div>
  );
};

export default CopyRight;
