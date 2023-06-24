"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const squareVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 1, scale: 0 },
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
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      {nosDomaine.map((item, index) => {
        return (
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            key={index}
            className="w-72 h-fit group"
          >
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
          </motion.div>
        );
      })}
    </>
  );
};

export default CardChoice;
