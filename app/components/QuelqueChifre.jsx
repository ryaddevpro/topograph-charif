"use client";
import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 3,
      onUpdate(value) {
        node.textContent = parseInt(value);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <div ref={nodeRef} />;
}
const QuelqueChifre = () => {
  const chiffreTab = [
    {
      nombre: 13,
      domaine: "Mille km² de Superficie couverte en prises de vues aériennes",
    },
    {
      nombre: 30,
      domaine: `Mille Ha de superficie immatriculée      `,
    },
    {
      nombre: 90,
      domaine: `Solutions SIG métier développées`,
    },
    {
      nombre: 100,
      domaine: `Mille m² de surface de plancher en BIM`,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl">
          Millenium Topo <b>en chiffres</b>
        </h1>
      </div>
      <div className="flex sm: md:w-10/12 lg:w-full mx-auto justify-between flex-wrap">
        {chiffreTab.map((x, index) => {
          return (
            <div
              key={index}
              className="flex sm:w-48 md:w-56 lg:w-64 w-44 flex-col items-center text-center"
            >
              <div className="text-5xl my-4 font-bold">
                <Counter from={0} to={x.nombre} />
              </div>
              <div className="text-xl ">{x.domaine} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuelqueChifre;
