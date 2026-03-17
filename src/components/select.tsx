import React, { useState, useRef, useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./index.module.css";
import { SlArrowDown, SlMagnifier } from "react-icons/sl";

interface Options {
  value: string;
  label: string;
}

interface DropdownProps {
  label?: string;
  options: Options[];
  name: string;
  placeholder: string;
}

const Select: React.FC<DropdownProps> = (props) => {
  const { label, options, name, placeholder } = props;

  const {
    register,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useFormContext();

  const errMessage = errors[name]?.message;

  const fieldValue = watch(name);

  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const selectedLabel = useMemo(() => {
    const found = options.find((opt) => opt.value === fieldValue);
    return found ? found.label : placeholder;
  }, [fieldValue, options, placeholder]);

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [options, searchTerm]);

  // Toggle the dropdown on click
  const toggleSelect = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);

    // Focus on search input when dropdown opens
    if (!isActive) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  // Function to select an option
  const selectOption = (optionIndex: number) => {
    const option = filteredOptions[optionIndex].value;
    setIsActive(false);
    setSearchTerm("");

    setValue(name, option);
    clearErrors(name);
  };

  // Blur function to close the dropdown
  const handleBlur = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsActive(false);
      setSearchTerm("");
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Removes the dropdown if it is active, when you click elsewhere on the page
  useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  }, []);

  return (
    <div className="flex flex-col mb-6">
      <div
        className={`relative cursor-pointer rounded-md p-4 mxs:p-2 ${styles.dropdown} ${
          errMessage ? " border-red-400" : ""
        }`}
      >
        <label
          htmlFor={name}
          className={`
            transition-all duration-300 ease-in-out pointer-events-none text-white
            ${isActive ? "text-xs -translate-y-1/2" : "text-base hidden"}
          `}
        >
          {label}
        </label>
        <div
          className={styles["dropdown-btn"]}
          onClick={toggleSelect}
          id={name}
          {...register(name, {
            required: {
              value: true,
              message: `Please select a ${name} `,
            },
          })}
        >
          <p
            className={`text-lg font-medium ${
              !fieldValue ? "text-white/70" : "text-white"
            } ${isActive ? "invisible" : ""}`}
          >
            {selectedLabel}
          </p>

          <SlArrowDown
            className={`transition ease-in-out delay-100 duration-200 ${
              isActive ? "rotate-180" : ""
            }`}
            color="#ffffff"
          />
        </div>
        {isActive && (
          <div
            className={`${styles["dropdown-content"]} relative`}
            ref={dropdownRef}
          >
            {/* Search input */}
            {options.length > 5 ? (
              <div className="flex items-center bg-white border-b p-1.5 mt-2">
                <SlMagnifier className="text-gray-400 mr-2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search options..."
                  className={`w-full outline-none transition-all duration-300 `}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            ) : null}

            {/* Options list */}
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    className={`font-livvic ${styles["dropdown-item"]} ${
                      selectedLabel === option.label ? styles.selected : ""
                    }`}
                    key={index}
                    ref={(element) => {
                      optionRefs.current[index] = element;
                    }}
                    onClick={() => selectOption(index)}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="p-2 text-center text-gray-500">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">
          Please select a {name}
        </div>
      )}
    </div>
  );
};

export { Select };
