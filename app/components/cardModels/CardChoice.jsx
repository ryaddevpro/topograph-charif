"use client";
import Image from "next/image";
import { BoxMotion } from "../boxMotion/BoxMotion";
import Modal from "../Modal";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const CardChoice = () => {
  const nosDomaine = [
    {
      name: "Photogrammetrie",
      image: "/images_/photogrametrie.png",
      text: ``,
      list: [``],
    },
    {
      name: "Scan et modélisation 3D",
      image: "/images_/scanner.jpg",
      text: ``,
      list: [``],
    },
    {
      name: "Topographies",
      image: "/images_/suivi.jpg",
      text: ``,
      list: [``],
    },
    {
      name: "BIM",
      image: "/images_/BIM_.jpg",
      text: ``,
      list: [``],
    },
    {
      name: "Foncier",
      image: "/images_/cadastre.jpg",
      text: ``,
      list: [``],
    },
    {
      name: "SIG",
      image: "/images_/SIG.jpg",
      text: ``,
      list: [``],
    },
  ];

  return (
    <>
      {nosDomaine.map((x, index) => {
        const modalId = `my_modal_${index + 1}`;
        return (
          <BoxMotion key={index} variants={squareVariants} initial="hidden">
            {/* Open the modal using ID.showModal() method */}
            <Modal
              modalId={modalId}
              title={x.name}
              image={x.image}
              text={x.text}
              list={x.list}
            />
            <div
              className="relative overflow-hidden w-72 h-fit group cursor-pointer"
              onClick={() => document.getElementById(modalId).showModal()}
            >
              <div className="relative hover:scale-110 transition-all duration-500 ease-in-out">
                <Image
                  width={300}
                  height={300}
                  src={x.image}
                  className="transition-all duration-500 ease-in-out h-96 w-full object-cover "
                  alt="Sample Image"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className=" ">
                    <h1 className="text-white text-2xl font-bold text-center w-auto border p-1 rounded-md  hover:bg-indigo-600 ">
                      {x.name}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </BoxMotion>
        );
      })}
    </>
  );
};

export default CardChoice;
