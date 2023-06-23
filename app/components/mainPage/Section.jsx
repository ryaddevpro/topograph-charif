import dynamic from "next/dynamic";
import React from "react";
import Card from "../Card";
import Image from "next/image";

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
      <div className="flex  justify-center flex-col flex-wrap items-center gap-4 ">
        <h1 className="text-3xl">Pourquoi nous choisir?</h1>
        <p className="text-2xl">
          Notre société a une expercience d&apos;une vingtaine d&apos;année
        </p>
      </div>
      <div className="">
        <div className="flex justify-center flex-wrap gap-10 my-10">
          <Card tabs={tabs} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section class="mx-auto w-fit p-12">
        <div class="w-72 h-fit group">
          <div class="relative overflow-hidden">
            <Image
              class="h-96 w-full object-cover"
              src="/images_/scanner.jpg"
              width={200}
              height={200}
              alt=""
            />
            <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button class=" text-white py-2 px-5 text-3xl">
                Scan et modélisation 3D
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
