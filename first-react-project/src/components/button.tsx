import { ReactNode } from "react";

interface Props {
  color?: string; //optional
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
