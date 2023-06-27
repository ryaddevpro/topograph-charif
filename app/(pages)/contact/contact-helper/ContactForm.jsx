"use client";
import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { InputForm, InputTextArea } from "./InputForm";
// import InputForm from "./InputForm";
const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const onSubmit = async (data) => {
    setSending(true);
    setServerMessage();
    const formData = { ...data, filesAttachments: [] };

    try {
      await Promise.all(
        Array.from(selectedFiles).map(async (file) => {
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
      setServerMessage(error.response.data.msg);
      error.response.data.msg;
      // Handle error
    }
    setServerMessage("message envoyez avec succes");

    reset();
    setSending(false);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const maxFiles = 3;

    if (files.length <= maxFiles) {
      setSelectedFiles([...selectedFiles, ...files]);
    } else {
      alert(`You can only select a maximum of ${maxFiles} files.`);
      event.target.value = null;
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
        <div
          className="flex flex-wrap -mx-3 mb-6"
          onClick={() => setServerMessage()}
        >
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputForm
              register={register}
              errors={errors}
              label={"nom"}
              msgError={"veuillez saisir votre nom"}
              placeholder="votre nom..."
              disabled={sending}
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <InputForm
              register={register}
              errors={errors}
              label={"prenom"}
              msgError={"veuillez saisir votre Prenom"}
              placeholder="votre prenom..."
              disabled={sending}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputForm
              register={register}
              errors={errors}
              label={"email"}
              msgError={"veuillez saisir votre email"}
              placeholder="votre email..."
              disabled={sending}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputTextArea
              register={register}
              errors={errors}
              label={"msg"}
              msgError={"veuillez saisir votre message"}
              placeholder="votre message..."
              disabled={sending}
            />
          </div>

          <div className="flex sm:justify-end lg:justify-between  md:justify-end justify-end  flex-wrap gap-3 w-full px-3 mt-4">
            <div className="w-full">
              <label htmlFor="" className="text-sm italic">
                si vous voulez envoyez un fichier (image, pdf, word...)
                <br />
                maximum 3 fichier
                <br />
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                multiple
                {...register("filesAttachments")}
                onChange={handleFileChange} // Added onChange event handler
                disabled={sending}
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Envoyez
              </button>
            </div>
            {serverMessage != "message envoyez avec succes" && (
              <p role="alert" className="text-red-500 text-xs italic mt-1">
                {serverMessage}
              </p>
            )}{" "}
            {serverMessage == "message envoyez avec succes" && (
              <p role="alert" className="text-green-500 mt-1">
                {serverMessage}
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
