import React from "react";
import "./button.scss"

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick, type = "button" }) => {
  return (
    <div className={`${className} button`}>
      <button onClick={onClick} type={type} className="text-white relative ">
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
