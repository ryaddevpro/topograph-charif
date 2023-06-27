import React from "react";
import { useForm } from "react-hook-form";

const InputForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Nom{" "}
        </label>
        <input
          className="appearance-none bg-transparent border-b w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
          type="text"
          id="nom"
          placeholder="Votre nom..."
          aria-label="Full name"
          {...register("nom", { required: "Votre nom est requis" })}
        />
        {errors.nom && (
          <p role="alert" className="text-red-500 text-xs italic mt-1">
            {errors.nom?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputForm;
