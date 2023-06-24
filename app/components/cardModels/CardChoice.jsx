// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import { BoxMotion } from "../boxMotion/BoxMotion";

// const squareVariants = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0 },
// };

// const nosDomaine = [
//   { name: "Photogrammetrie", image: "/images_/photogrametrie.png" },
//   { name: "Scan et modélisation 3D", image: "/images_/scanner.jpg" },
//   { name: "Topographies", image: "/images_/suivi.jpg" },
//   { name: "BIM", image: "/images_/BIM_.jpg" },
//   { name: "Foncier", image: "/images_/cadastre.jpg" },
//   { name: "SIG", image: "/images_/SIG.jpg" },
// ];
// const BoxMotion = ({ data }) => {
//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     }
//   }, [control, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={squareVariants}
//       initial="hidden"
//       animate={control}
//     >
//       <div className="w-72 h-fit group">
//         <div className="relative overflow-hidden ">
//           <Image
//             className="h-96 w-full object-cover"
//             src={data.image}
//             width={200}
//             height={200}
//             alt=""
//           />
//           <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
//             <button className=" text-white py-2 px-5 text-3xl">
//               {data.name}
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const CardChoice = () => {
//   return (
//     <>
//       {nosDomaine.map((x, index) => {
//         return <BoxMotion data={x} key={index} />;
//       })}
//     </>
//   );
// };

// export default CardChoice;

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
        return (
          <BoxMotion key={index} variants={squareVariants} initial="hidden">
            <div className="w-72 h-fit group">
              <div className="relative overflow-hidden">
                <img
                  className="h-96 w-full object-cover"
                  src={x.image}
                  alt=""
                />
                <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="text-white py-2 px-5 text-3xl">
                    {x.name}
                  </button>
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
