import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
const page = () => {
  return (
    <div>
      {" "}
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="max-w-screen-lg mx-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-12 border">
            <div className="bg-gray-900 md:col-span-4 p-10 text-white">
              <p className="mt-4 text-sm leading-7 font-regular uppercase">
                Contact
              </p>
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span className="text-indigo-600">Touch</span>
              </h3>
              <p className="mt-4 leading-7 text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </p>
              <div className="flex items-center mt-5">
                <FaMapMarkerAlt size={32} className="mr-2" />
                <span className="text-sm">
                  House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
                </span>
              </div>
              <div className="flex items-center mt-5">
                <FaPhoneAlt size={25} className="mr-2" />
                <span className="text-sm">+93 749 99 65 50</span>
              </div>
              <div className="flex items-center mt-5">
                <FaClock size={32} className="mr-2" />
                <span className="text-sm">24/7</span>
              </div>
            </div>
            <form className="md:col-span-8 p-10">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Jane"
                    aria-label="Full name"
                  />
                  <p className="text-red-500 text-xs italic mt-1">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b  w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Doe"
                    aria-label="Full name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                    type="email"
                    placeholder="jane@exp.com"
                    aria-label="Full name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={10}
                    className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
                    type="email"
                    placeholder="jane@exp.com"
                    aria-label="Full name"
                    defaultValue={"        \n      "}
                  />
                </div>
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight" type="checkbox" />
                      <span className="text-sm">Send me your newsletter!</span>
                    </label>
                  </div>
                  <button
                    className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
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
    </div>
  );
};

export default page;
