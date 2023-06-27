import React from "react";
import { useForm } from "react-hook-form";

export const InputForm = ({
  register,
  errors,
  label,
  msgError,
  placeholder,
}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {label}
      </label>
      <input
        className="appearance-none bg-transparent border-b w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
        type="text"
        id={`${label}`}
        placeholder={placeholder}
        aria-label="Full name"
        {...register(`${label}`, { required: `${msgError}` })}
      />
      {errors[`${label}`] && (
        <p role="alert" className="text-red-500 text-xs italic mt-1">
          {errors[`${label}`]?.message}
        </p>
      )}
    </>
  );
};

export const InputTextArea = ({
  register,
  errors,
  label,
  msgError,
  placeholder,
}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Votre message
      </label>
      <textarea
        rows={10}
        className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
        type="text"
        id="msg"
        {...register(`${label}`, { required: `${msgError}` })}
        placeholder={placeholder}
      />
      {errors.msg && (
        <p role="alert" className="text-red-500 text-xs italic mt-1">
          {errors.msg?.message}
        </p>
      )}
    </>
  );
};
