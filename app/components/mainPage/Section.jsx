import dynamic from "next/dynamic";
import React from "react";
import Card from "../cardModels/Card1";
import Image from "next/image";
import CardChoice from "../cardModels/CardChoice";
import Link from "next/link";

const Section = () => {
  const Excellence = [
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
    <section className="my-44">
      <div className="flex  justify-center flex-col flex-wrap items-center gap-4 text-center ">
        <h1 className="text-3xl">Pourquoi nous choisir?</h1>
        <p className="text-2xl ">
          Notre société a une expercience d&apos;une vingtaine d&apos;année
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-10 my-10">
        <Card tabs={Excellence} />
      </div>
      <div className=" text-center my-10">
        <h1 className="text-3xl ">Nos Domaines d&apos;Expertises</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 w-10/12 mx-auto">
        <CardChoice />
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* bg-[url('/images/banner2.jpg')]  */}
      <div
        className="w-10/12 bg-cover bg-center mx-auto rounded-3xl"
        style={{
          height: "20rem",
          backgroundImage: "url(/images/banner2.jpg)",
        }}
      >
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50  rounded-3xl">
          <div className="text-center">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
              Pour plus d&apos;informations{" "}
            </h1>
            <Link
              href={"/contact"}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-blue-500"
            >
              Contact US
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
    </section>
  );
};

export default Section;
