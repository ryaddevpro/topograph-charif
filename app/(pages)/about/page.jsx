import ContactUs from "@/app/components/ContactUs";
import QuelqueChifre from "@/app/components/QuelqueChifre";
import { BoxMotion } from "@/app/components/boxMotion/BoxMotion";
import Image from "next/image";
export const metadata = {
  title: "About",
};
const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
export default function Page() {
  return (
    <div>
      <div className=" w-full h-96 flex justify-center items-center ">
        <div className="w-full h-96 flex justify-center items-center relative">
          <div
            className="bg-center bg-cover w-full h-96"
            style={{ backgroundImage: " url('images_/tram2.jpg') " }}
          >
            <div className=" mx-auto h-full flex items-center   ">
              <div className="text-center w-full text-white opacity-80 bg-black text-3xl font-bold">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around gap-5 my-36 flex-wrap">
        <div className="w-80">
          <div>
            <h1 className="text-4xl">Mot Du Directeur</h1>
          </div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
          aspernatur, rerum, sequi in recusandae quos aperiam aliquid unde et
          perspiciatis maiores numquam magnam odio eligendi molestias modi esse
          facilis minus?
        </div>
        <div>
          <Image
            src={"/images_/CHARIF__MOHAMED.jpg"}
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BoxMotion variants={squareVariants} initial="hidden">
        <QuelqueChifre />
      </BoxMotion>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContactUs />
      <br />
      <br />
      <br />
    </div>
  );
}
