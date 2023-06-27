"use client";
import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = { ...data, filesAttachments: [] };

    try {
      await Promise.all(
        Array.from(data.filesAttachments).map(async (file) => {
          const base64 = await readFileAsync(file);
          formData.filesAttachments.push(base64);
        })
      );

      await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Handle successful submission
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        resolve(readerEvent.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <form className="md:col-span-8 p-10" onSubmit={handleSubmit(onSubmit)}>
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
              id="nom"
              placeholder="Jane"
              aria-label="Full name"
              {...register("nom")}
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
              id="prenom"
              placeholder="Doe"
              aria-label="Full name"
              {...register("prenom")}
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
              type="text"
              id="email"
              {...register("email")}
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
              Your msg
            </label>
            <textarea
              rows={10}
              className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
              type="email"
              id="msg"
              {...register("msg")}
              placeholder="jane@exp.com"
              aria-label="Full name"
            />
          </div>
          <input type="file" multiple {...register("filesAttachments")} />
          <div className="flex justify-between w-full px-3">
            <div>{error && <p>{error}</p>}</div>

            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send msg
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
