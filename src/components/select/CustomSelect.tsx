import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import React, { useEffect, useRef, useState } from "react";

interface CustomSelectProps<T extends Record<string, any>> {
  options: T[];
  labelKey?: keyof T; // Key used for displaying in the dropdown (default: 'label')
  onChange?: (selectedOption: T) => void;
  direction?: "ltr" | "rtl";
  arrowIcon?: React.ReactElement;
  characterNumber?: number;
  classNames?: {
    wrapper?: string;
    input?: string;
    label?: string;
    icon?: string;
    optionMain?: string;
    options?: string;
  };
  defaultValue?: T; // Default value for the select
  placeholder?: string; // Placeholder text
}

const CustomSelect = <T extends Record<string, any>>({
  options,
  labelKey = "label" as keyof T,
  onChange,
  direction = "ltr",
  arrowIcon = <ArrowDownIcon className="w-6 " />,
  characterNumber = 250,
  classNames = {
    wrapper: "",
    input: "",
    label: "",
    icon: "",
    optionMain: "",
    options: "",
  },
  defaultValue,
  placeholder,
}: CustomSelectProps<T>) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState<number | null>(null);
  const [dropdownHeight, setDropdownHeight] = useState<number | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);
  // useEffect(() => {
  //   if (defaultValue) {
  //     setSelectedOption(defaultValue);
  //     if (onChange) {
  //       onChange(defaultValue);
  //     }
  //   }
  // }, [defaultValue, onChange]);

  const handleSelect = (option: T) => {
    setSelectedOption(option);
    setIsDropdownVisible(false);
    if (onChange) {
      onChange(option);
    }
  };

  const handleToggleDropdown = () => {
    if (selectRef.current) {
      setDropdownWidth(selectRef.current.getBoundingClientRect().width);
      setDropdownHeight(selectRef.current.getBoundingClientRect().height);
    }
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (selectRef.current) {
        setDropdownWidth(selectRef.current.getBoundingClientRect().width);
        setDropdownHeight(selectRef.current.getBoundingClientRect().height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${classNames.wrapper} w-full mt-2 relative inline-block text-${direction}`}
      ref={selectRef}
    >
      <div
        className={`${
          classNames.input
        } flex items-center justify-between border-2 hover:border-asiatech-gray-610 rounded-xl cursor-pointer h-[40px] shadow-sm ${
          isDropdownVisible ? "border-asiatech-gray-900" : "border-asiatech-gray-510"
        }`}
        onClick={handleToggleDropdown}
      >
        <div
          className={`${classNames.label} py-2 px-4 text-asiatech-gray-800 line-clamp-1 text-sm`}
        >
          {/* {defaultValue && defaultValue} */}
          {selectedOption ? selectedOption[labelKey] : placeholder}
        </div>
        {arrowIcon && (
          <div
            className={`${
              classNames.icon
            } flex items-center ml-2 transition-all duration-300 transform ${
              isDropdownVisible ? "rotate-180" : ""
            }`}
          >
            <div className="hidden">&nbsp;</div>
            {arrowIcon}
          </div>
        )}
      </div>
      {isDropdownVisible && (
        <ul
          style={{
            width: dropdownWidth ? `${dropdownWidth}px` : "auto",
            maxHeight: "200px", // Set your desired maximum height
            boxShadow: " 0px 4px 20px 0px rgba(104, 104, 104, 0.24)",
          }}
          className={`${
            classNames.optionMain
          } absolute py-2 px-3 z-[10001] mt-2 overflow-auto bg-white rounded-lg  ${
            direction === "rtl" ? "right-0" : "left-0"
          }`}
        >
          {options.map((option, index) => (
            <div
              key={String(option[labelKey])}
              className={`${classNames.options} py-2 px-2 text-asiatech-gray-800 cursor-pointer hover:bg-asiatech-gray-300 hover:rounded-lg text-sm `}
              onClick={() => handleSelect(option)}
            >
              {option[labelKey]}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
