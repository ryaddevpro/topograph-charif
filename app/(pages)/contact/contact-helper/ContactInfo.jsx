import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
const ContactInfo = () => {
  return (
    <div className="bg-gray-900 md:col-span-4 p-10 text-white">
      <div className="flex items-center mt-5">
        <FaMapMarkerAlt size={32} className="mr-2" />
        <span>Avenue Al Alaouiyine Rabat, Maroc</span>
      </div>
      <div className="flex items-center mt-5">
        <FaPhoneAlt size={25} className="mr-2" />
        <div>
          <span>0537701614</span>
        </div>
      </div>
      <div className="flex items-center mt-5">
        <BsEnvelope size={32} className="mr-2" />
        <span>mcharifcabinet@yahoo.fr</span>
      </div>
      <div className="flex items-center mt-5">
        <AiOutlineSchedule size={32} className="mr-2" />
        <span>Du lundi au Vendredi, de 8h à 17h30</span>
      </div>
    </div>
  );
};

export default ContactInfo;
