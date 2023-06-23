import Image from "next/image";
import React from "react";

const CardChoice = () => {
  const nosDomaine = [
    { name: "Photogrammetrie", image: "/images_/photogrametrie.png" },
    { name: "Scan et modélisation 3D", image: "/images_/scanner.jpg" },
    { name: "Topographies", image: "/images_/suivi.jpg" },
    { name: "BIM", image: "/images_/BIM_.jpg" },
    { name: "Foncier", image: "/images_/cadastre.jpg" },
    { name: "SIG", image: "/images_/SIG.jpg" },
  ];
  return (
    <>
      {nosDomaine.map((item, index) => {
        return (
          <div className="w-72 h-fit group" key={index}>
            <div className="relative overflow-hidden ">
              <Image
                className="h-96 w-full object-cover"
                src={item.image}
                width={200}
                height={200}
                alt=""
              />
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className=" text-white py-2 px-5 text-3xl">
                  {item.name}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardChoice;
