"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
export default function Card({ tabs }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      {tabs.map((item, index) => {
        return (
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            key={index}
            className=" max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-200 transition duration-300"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.icon} </div>
              <p className="text-gray-700 text-base">{item.label}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
