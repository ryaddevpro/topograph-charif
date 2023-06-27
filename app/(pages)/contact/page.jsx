import React from "react";

import ContactInfo from "./contact-helper/ContactInfo";
import ContactForm from "./contact-helper/ContactForm";

const Page = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <ContactInfo />
          <ContactForm />
        </div>
        <iframe
          style={{ height: "64vh" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1797.715468201711!2d-6.826125628012188!3d34.01987217913609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b8ff0ddcc9f%3A0x0!2zMzTCsDAxJzEyLjEiTiA2wrA0OSczMC43Ilc!5e1!3m2!1sfr!2sma!4v1664735493288!5m2!1sfr!2sma"
          className="w-full my-44"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
