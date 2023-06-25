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
      text: `
    Procédant avec une vision globale du territoire, notre équipe maîtrise parfaitement les outils d’aide à la décision dédiée exclusivement aux études foncières, au cadastre, et à l’immobilier notamment la copropriété ,l’expropriation, les pré notations et la taxe sur Terrain-Non-Bâti (T.N.B).
    Nos prestations de la topographie cadastrale couvrent la réalisation de :`,
      list: [
        `Plan de situation, Plan de délimitation administrative, Plan de partage`,
        `Plan et enquête parcellaire`,
        `Immatriculation foncière`,
        `Immatriculation foncière et Immatriculation Foncière d’Ensemble (IFE)`,
        `Mise en concordance,Copropriété et Morcellement`,
      ],
    },
    { name: "Scan et modélisation 3D", image: "/images_/scanner.jpg" },
    { name: "Topographies", image: "/images_/suivi.jpg" },
    { name: "BIM", image: "/images_/BIM_.jpg" },
    { name: "Foncier", image: "/images_/cadastre.jpg" },
    { name: "SIG", image: "/images_/SIG.jpg" },
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
                  <div className="w-11/12">
                    <h1 className="text-white text-2xl font-bold text-center">
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
