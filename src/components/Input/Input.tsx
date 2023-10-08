import React, { forwardRef, Ref } from "react";
import { FiSearch } from "react-icons/fi";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  prefix?: string;
  type?: "text" | "search";
  inputClass?: string;
  errorMessage?: string;
}

const Input = forwardRef(
  (
    {
      name,
      label,
      prefix,
      type = "text",
      inputClass,
      errorMessage,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="w-full">
        <label htmlFor={name} className="mb-1 block text-sm">
          {label}
        </label>
        <div className="flex flex-row items-center">
          {prefix && (
            <span
              className={`text-sm border rounded-l p-4 whitespace-no-wrap ${
                errorMessage?.length && "border-epps-red-500"
              }`}
            >
              {prefix}
            </span>
          )}

          {type === "search" && (
            <span
              className={`border rounded py-4 px-2 border-r-0 rounded-r-none ${
                errorMessage?.length && "border-epps-red-500"
              }`}
            >
              <FiSearch />
            </span>
          )}

          <input
            {...rest}
            name={name}
            ref={ref}
            type={type}
            className={`border rounded focus:outline-none p-3 w-full ${
              type === "search" && `border-l-0 rounded-l-none`
            } ${prefix && `border-l-0 rounded-l-none`} ${inputClass} `}
          />
        </div>
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
