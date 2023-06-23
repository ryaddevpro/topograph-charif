import React from "react";
import NavBar from "../NavBar";

const Header = () => {
  const videoSource = "videos/chantierDrone.mp4";

  return (
    <>
      <header className="w-full relative">
        <div className=" mx-auto">
          <video
            className="w-full h-auto md:h-96 object-cover"
            autoPlay
            muted
            loop
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>
      <div className="mt-8"></div>
    </>
  );
};

export default Header;
