import { UseFormRegisterReturn } from "react-hook-form";
// import { InputProps } from "@/types/types";
import { useState, useEffect, useRef } from "react";
import Select from "react-select";

interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}
interface SelectProp<Option = unknown, IsMulti = boolean, Group extends GroupBase<Option> = GroupBase<Option>> {
  options: readonly Option[];
  isMulti?: IsMulti;
  defaultValue?: string;
  onChange: (value: Option | Option[] | null) => void;
  onBlur: () => void;
  value: Option | Option[] | null;
  name?: string;
  placeholder?: string;
  noOptionsMessage?: () => string;
  maxMenuHeight?: number;
}
export function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: SelectProp) {
  return (
    <Select
      placeholder={props.placeholder}
      maxMenuHeight={props.maxMenuHeight}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          padding: "0.5rem 0.5rem",
          border: "1px solid #cfcfd0",
          backgroundColor: "#f2f3f7",
          ":focus": {
            borderColor: "#121111",
            boxShadow: "none",
          },
          ":hover": {
            borderColor: "#121111",
          },
        }),
        container: (baseStyles, state) => ({
          ...baseStyles,
          width: "100%",
        }),
        input: (baseStyles, state) => ({
          ...baseStyles,
          ":focus": {
            borderColor: "#121111",
            boxShadow: "none",
          },
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
        }),
        menuList: (baseStyles, state) => ({
          ...baseStyles,
        }),
        placeholder: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: "16px",
        }),
        noOptionsMessage: (baseStyles, state) => ({
          ...baseStyles,
        }),
        indicatorSeparator: (baseStyles, state) => ({
          ...baseStyles,
          display: "none",
        }),
      }}
      {...props}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        border: "none",
        ":focus": {
          boxShadow: "none",
        },
        boxShadow: "none",
        colors: {
          ...theme.colors,
          primary25: "#f2f3f7",
          primary: "#121111",
        },
      })}
    />
  );
}

interface InputProps {
  label?: string;
  onBlur?: () => void;
  icon?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  className?: string;
}

export const CustomInput = ({ name, placeholder, onChange, onBlur, icon, className }: InputProps) => {
  return (
    <div className=' relative flex '>
      {icon && (
        <img
          src={icon}
          className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform'
          alt='icon'
        ></img>
      )}
      <input
        className={`w-full rounded-md border-[1px] border-[#cfcfd0] bg-[#f2f3f7] px-4 py-[13px] transition-all duration-100 placeholder:text-base placeholder:text-[#8b8b8b] hover:border-blackMain focus:border-blackMain focus:shadow-[0px_0px_0px_1px] focus:outline-none focus:placeholder:opacity-40 ${className}`}
        onChange={onChange}
        onBlur={onBlur}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};
