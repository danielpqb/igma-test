"use client";

import { cn } from "@/utils/classNames";
import React from "react";

type Props = {
  size: "md" | "lg";
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};
const InputText = ({ size, disabled, onChange, error }: Props) => {
  const className = {
    lg: "h-[64px] text-md",
    md: "h-[56px] text-xs",
  };

  return (
    <div className="flex flex-col w-full">
      <input
        disabled={!!disabled}
        className={cn([
          "flex items-center justify-center w-full text-base-dark-highlight font-medium leading-xl border-b-thin border-base-dark-highlight outline-none",
          className[size],
          "hover:border-b-[3px] hover:border-solid",
          "focus:border-[1px] focus:border-b-[3px] focus:border-solid focus:border-primary-light",
          "active:font-semibold",
          "disabled:bg-base-dark-disabled disabled:text-base-dark-disabled disabled:cursor-not-allowed",
          error ? "border-errors-main" : "",
        ])}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <div className="text-errors-dark text-xxxs font-medium leading-lg">
        {error}
      </div>
    </div>
  );
};

export default InputText;
