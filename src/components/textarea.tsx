import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder: string;
}

const TextArea = (props: TextAreaProps) => {
  const { name, label, placeholder, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const value = watch(name);
  const isActive = isFocused || (value !== undefined && value !== "");
  const errMessage = errors[name]?.message;

  const handleBlur = () => {
    setIsFocused(false);
    clearErrors(name);
  };

  return (
    <div className="relative mb-6">
      {/* Floating label */}
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-300 ease-in-out pointer-events-none
          ${
            isActive
              ? "top-2 text-xs text-white opacity-100 pt-2"
              : "top-4 text-base text-white/50 opacity-0"
          }`}
      >
        <span
          className={`block transition-transform duration-300 ease-in-out
            ${isActive ? "translate-y-0" : "translate-y-2"}`}
        >
          {label}
        </span>
      </label>

      <textarea
        id={name}
        placeholder={isActive ? "" : placeholder}
        {...rest}
        {...register(name, {
          required: true,
          onBlur: handleBlur,
        })}
        onFocus={() => setIsFocused(true)}
        className={`block w-full outline-0 bg-[#263C28] rounded-md text-lg text-white font-medium placeholder:text-white/70 px-4 pb-3 transition-all duration-300 resize-none
          ${isActive ? "pt-8" : "pt-4"}`}
        rows={5}
      />

      {errMessage && typeof errMessage === "string" && (
        <div className="text-red-400 text-xs mt-1">{errMessage}</div>
      )}
    </div>
  );
};

export { TextArea };