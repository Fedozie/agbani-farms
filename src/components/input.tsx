import React, { useState } from "react";
import {
  useFormContext,
  type FieldError,
  type RegisterOptions,
} from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  rules?: RegisterOptions;
}

const Input = (props: InputProps) => {
  const { name, label, type = "text", placeholder, rules, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const value = watch(name);
  const isActive = isFocused || value;

  const error = errors[name] as FieldError | undefined;
  const errMessage = error?.message;

  return (
    <div className="relative mb-6">
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-300 ease-in-out pointer-events-none
        ${
          isActive
            ? "top-2 text-xs text-white pt-2"
            : "top-1/2 -translate-y-1/2 text-base opacity-0"
        }`}
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={isActive ? "" : placeholder}
        aria-invalid={!!error}
        {...rest}
        {...register(name, {
          ...rules,
          setValueAs: (value) =>
            type === "number"
              ? value === ""
                ? undefined
                : Number(value)
              : value,
          onBlur: () => setIsFocused(false),
        })}
        onFocus={() => setIsFocused(true)}
        className={`block w-full outline-0 bg-[#263C28] rounded-md text-lg text-white font-medium placeholder:text-white/70 px-4 pb-3 transition-all duration-300 ease-in-out
        ${isActive ? "pt-8" : "pt-4"}`}
      />

      {value && errMessage && (
        <div className="text-red-400 text-xs mt-1">{errMessage}</div>
      )}
    </div>
  );
};

export { Input };
