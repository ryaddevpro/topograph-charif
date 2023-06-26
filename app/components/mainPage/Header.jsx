import React from "react";
import NavBar from "../NavBar";

const Header = () => {
  const videoSource = "videos/chantierDrone.mp4";

  return (
    <>
      <header className="w-full relative">
        <div className="mx-auto">
          <div className="relative">
            <video
              className="w-full h-auto md:h-96 object-cover"
              autoPlay
              muted
              loop
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex justify-center items-center h-full absolute inset-0">
              <h1 className="text-4xl text-white">Millenium Topo CHARIF MED</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-8"></div>
    </>
  );
};

export default Header;
