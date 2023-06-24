"use client";
import Image from "next/image";
import { BoxMotion } from "../boxMotion/BoxMotion";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

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
      {nosDomaine.map((x, index) => {
        const modalId = `my_modal_${index + 1}`;

        return (
          <BoxMotion key={index} variants={squareVariants} initial="hidden">
            <dialog id={modalId} className="modal border border-black w-full">
              <form
                method="dialog"
                className="modal-box max-w-full    border-8 border-black"
              >
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <div>
                  <h3 className="font-bold text-lg text-center">BIM </h3>
                  <div className="flex flex-wrap m-5">
                    <div className=" relative">
                      <Image
                        src={"/images_/scanner.jpg"}
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <div className="mx-10 w-8/12">
                      <div className="">
                        En tant que maître d’œuvre de projets publics ou privés,
                        ETAFAT Ing assure toutes les missions de conception
                        technique, planification, organisation et direction
                        d’exécution d’un bâtiment ou d’un projet
                        d’infrastructure, jusqu’à sa livraison. Enfin, ETAFAT
                        Ing offre des services d’assistance à la mise en
                        service, à l’exploitation et à la maintenance des
                        ouvrages.
                      </div>
                      <div className="my-2">
                        <b>Nos domaines d’activités portent sur :</b>
                      </div>
                      <div className="mx-5">
                        <ul className="list-disc	break-words w-">
                          <li>Les terrassements généraux</li>
                          <li>La voirie, passages, carrefours, giratoires,</li>
                          <li>
                            Les réseaux d’assainissement, (eaux pluviales, eaux
                            usées),
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            {/* Open the modal using ID.showModal() method */}
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
