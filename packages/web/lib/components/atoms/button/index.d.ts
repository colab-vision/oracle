import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
