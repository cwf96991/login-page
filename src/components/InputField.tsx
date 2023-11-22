import React, { ChangeEvent, useState } from "react";

interface InputFieldProps {
  placeholder: string;
  onChange: (arg: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;

  type?: string;
  pattern?: string;
}
const InputField = ({
  placeholder,
  value,
  onChange,
  className,
  type,
  pattern,
}: InputFieldProps) => {
  const padding = value === "" ? "pt-2" : "pt-0";

  return (
    <div className={`relative h-[56px] w-full min-w-[200px] ${className}`}>
      <input
        onChange={(e) => {
          onChange(e);
        }}
        value={value}
        className={`peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#006B54] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
        placeholder=" "
        required
        type={type ?? ""}
        pattern={pattern ?? undefined}
      />

      <label
        className={`${padding}  before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5  peer-focus:pt-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#006B54] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#006B54] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#006B54] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}
      >
        {placeholder}
      </label>
      <span className="mt-0.5 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        Please enter a valid value
      </span>
    </div>
  );
};
export default InputField;
