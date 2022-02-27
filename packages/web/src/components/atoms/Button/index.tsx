import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="btn">{label}</button>;
};
