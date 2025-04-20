import type React from "react";

type RowProps = {
  className?: string;
  children: {
    left: React.ReactNode;
    right: React.ReactNode;
  };
};

const Row: React.FC<RowProps> = ({ className = "", children }) => {
  return (
    <div className={`row flex justify-evenly w-full ${className}`}>
      <div className="part left-part flex">
        <div className="flex content flex-col">{children.left}</div>
      </div>
      <div className="part right-part flex">
        <div className="flex content flex-col">{children.right}</div>
      </div>
    </div>
  );
};

export default Row;
