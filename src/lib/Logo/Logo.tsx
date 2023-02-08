import React, { FC } from "react";

interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
};

const Logo: FC<LogoProps> = ({
  img,
  imgLight,
  className = "",
}) => {
  return (
    <div className={`inline-block text-primary-6000 ${className}`}>
        <img
          className={`block w-[140px] h-[82.01px]`}
          src={img}
          alt="Logo"
        />
    </div>
  );
};

export default Logo;
