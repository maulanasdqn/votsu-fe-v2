import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import type { ButtonInterface } from "@util/interfaces/Button";

const Button: FC<ButtonInterface> = ({
  type,
  text,
  primary,
  secondary,
  danger,
  to = "",
}): ReactElement => {
  return (
    <button
      type={type}
      className={`${
        primary &&
        "bg-blue-400 text-white font-sans border-2 border-white text-base hover:bg-white hover:border-blue-400 hover:text-blue-400"
      } ${
        secondary &&
        "bg-white text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white border-2 font-sans text-base"
      } p-2 rounded-lg w-auto h-auto cursor-pointer ${
        danger &&
        "bg-red-600 border-white border-2 hover:text-white hover:bg-white hover:text-red-500 hover:border-red-500 text-white font-sans text-base"
      }`}
    >
      {to.length === 0 ? text : <Link to={to}>{text}</Link>}
    </button>
  );
};

export default Button;
