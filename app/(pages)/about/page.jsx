"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const squareVariants = {
  visible: { opacity: 1, scale: 2, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1 },
};
function Square() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className=" w-56 h-56 mx-auto mt-96"
    >
      
    </motion.div>
  );
}
export default function Page() {
  return (
    <div className="App">
      <h1 className="title">Scroll Down</h1>
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
