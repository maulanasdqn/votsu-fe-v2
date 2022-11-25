import Button from "@components/Common/Button";
import { FC, ReactElement, Fragment } from "react";
import { Link } from "react-router-dom";

type AuthFooterType = {
  label: string;
  subLabel: string;
  buttonLabel: string;
  url: string;
};

const AuthFooter: FC<AuthFooterType> = ({ url, label, subLabel, buttonLabel }): ReactElement => {
  return (
    <Fragment>
      <Button type="submit" primary text={buttonLabel} />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {label}
        <Link
          to={url}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
        >
          {subLabel}
        </Link>
      </p>
    </Fragment>
  );
};

export default AuthFooter;
