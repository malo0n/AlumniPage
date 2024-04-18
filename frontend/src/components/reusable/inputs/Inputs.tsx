import { UseFormRegisterReturn } from "react-hook-form";
// import { InputProps } from "@/types/types";
import { useState, useEffect, useRef } from "react";
import Select from "react-select";

interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}
interface SelectProp<
  Option = unknown,
  IsMulti = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  
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
  Group extends GroupBase<Option> = GroupBase<Option>
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
        })
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
}

export const CustomInput = ({
  name,
  placeholder,
  onChange,
  onBlur,
  icon,
}: InputProps) => {
  return (
    <div className=" flex relative ">
      {icon && (
        <img
          src={icon}
          className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3"
          alt="icon"
        ></img>
      )}
      <input
        className="w-full border-[#cfcfd0] bg-[#f2f3f7] border-[1px] px-4 py-[13px] rounded-md focus:border-blackMain focus:outline-none placeholder:text-base focus:placeholder:opacity-40 placeholder:text-[#8b8b8b] hover:border-blackMain"
        onChange={onChange}
        onBlur={onBlur}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};
