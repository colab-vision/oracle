import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "sm" | "md";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  isLoading,
}) => {
  const btnClass = classNames({
    "oracle-btn": true,
    disabled: isLoading,
    sm: size === "sm",
    md: size === "md",
  });

  return (
    <button
      type="button"
      className={btnClass}
      onClick={() => console.log("ckicked")}
    >
      {children}
    </button>
  );
};
