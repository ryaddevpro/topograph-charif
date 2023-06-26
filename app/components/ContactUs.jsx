import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div
      className="w-10/12 bg-cover bg-center mx-auto rounded-3xl"
      style={{
        height: "20rem",
        backgroundImage: "url(/images/banner2.jpg)",
      }}
    >
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50  rounded-3xl">
        <div className="text-center flex flex-wrap gap-5 flex-col items-center">
          <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
            Pour plus d&apos;informations
          </h1>
          <Link
            href={"/contact"}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-blue-500"
          >
            Contact US
          </Link>
        </div>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-3xl "> Qui sommes Nous?</h1>
        <div className="flex justify-center flex-col items-center">
          <div>
            <p>
              Pendant plus que 20ans, Millenium Topo charif Med agit comme
              société leader dans la géomatique, le foncier et la topographie.
              Grâce à une équipe de professionnels hautemant qualifiés, nous
              vous garantissons précision et qualité des prestations.
            </p>
          </div>
          <Link href={"https://www.linkedin.com/in/mohammed-charif-0590645a"}>
            <div className="hover:scale-150 cursor-pointer">
              <Image
                src={
                  "https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg"
                }
                width={100}
                height={100}
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
