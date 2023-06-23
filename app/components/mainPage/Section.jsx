import dynamic from "next/dynamic";
import React from "react";
import Card from "../Card";

const Section = () => {
  const tabs = [
    {
      icon: "Plus de 26 ans d'expérience",
      label:
        "MTCM a apporté pendant une vingtaine d'années son expertise dans différents projets phare du royaume relevant de la topographie, photogrammétrie et SIG.",
    },
    {
      icon: "Efficacité et précision",
      label:
        "Notre philosophie, nos valeurs et nos expertises dans le domaine vous assurent la meilleure qualité dans les délais contractuels.",
    },
    {
      icon: "Equipe compétente et dynamique",
      label:
        "Notre équipe constituée de professionnels hautement qualifiés vous garantira l'application des derniers standards et normes professionnelles.",
    },
  ];
  return (
    <>
      <div className="flex  justify-center flex-col items-center gap-4 ">
        <h1 className="text-3xl">Pourquoi nous choisir?</h1>
        <p className="text-2xl">
          Notre société a une expercience d&apos;une vingtaine d&apos;année
        </p>
      </div>
      <div className="flex justify-center gap-10 my-10">
        <Card tabs={tabs} />
      </div>
    </>
  );
};

export default Section;
