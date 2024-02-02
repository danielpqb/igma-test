"use client";

import { cn } from "@/utils/classNames";
import React from "react";

type Props = {
  children: React.ReactNode;
  size: "md" | "lg";
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const Button = ({ children, size, disabled, onClick }: Props) => {
  const className = {
    lg: "h-[56px] min-w-[160px] text-xs px-inline-xxs",
    md: "h-[48px] min-w-[120px] text-xxs px-inline-xxxs",
  };

  return (
    <button
      disabled={!!disabled}
      className={cn([
        "flex items-center justify-center text-base-light-contrast cursor-pointer rounded-none bg-base-dark-highlight font-semibold leading-lg ease-linear delay-0 duration-[2s]",
        className[size],
        "focus:border-thin focus:border-primary-main focus:bg-base-dark-main",
        "hover:bg-base-dark-main hover:transition-none",
        "active:text-base-light-secondary",
        "disabled:bg-base-dark-disabled disabled:text-base-light-secondary disabled:cursor-not-allowed",
      ])}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
