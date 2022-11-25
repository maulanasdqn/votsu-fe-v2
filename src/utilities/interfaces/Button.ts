import { ButtonHTMLAttributes } from "react";

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  text: string;
  to?: "";
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}
