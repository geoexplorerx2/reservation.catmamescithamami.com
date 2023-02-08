import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: ReactNode;
  onClick?: () => void;
  rounded?: string;
};

const Button: FC<ButtonProps> = ({
  className = "text-neutral-700 dark:text-neutral-200",
  translate = "",
  sizeClass = "px-4 py-3 sm:px-6",
  fontSize = "text-[12px] font-regular",
  children,
  type,
  onClick = () => {},
  rounded = ""
}) => {
  const CLASSES = `relative h-auto inline-flex items-center justify-center ${rounded} transition-colors ${fontSize} ${sizeClass} ${translate} ${className}`;

  const handleClick = () => {
    if(onClick) onClick && onClick();
  };

  return (
    <button
      className={`${CLASSES}`}
      onClick={() => handleClick() }
      type={type}
    >
      { children }
    </button>
  );
};

export default Button;
