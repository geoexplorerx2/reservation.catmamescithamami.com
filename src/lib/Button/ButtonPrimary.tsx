import Button, { ButtonProps } from "./Button";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps extends ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "bg-primary-6000 hover:bg-primary-700",
  type,
  ...args
}) => {

  const handleClick = () => {
  };

  return (
    <Button
      onClick={() => handleClick()}
      type={type}
      className={`disabled:bg-opacity-70 text-neutral-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
