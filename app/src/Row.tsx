import type React from "react";
import { useRevealOnScroll } from "./useReveal/useRevealOnScroll";

type RowProps = {
  className?: string;
  fadein?: string;
  children: {
    left: React.ReactNode;
    right: React.ReactNode;
  };
};

const Row: React.FC<RowProps> = ({ className = "", children, fadein = "left" }) => {
  const ref = useRevealOnScroll();
  return (
    <div className={`row flex justify-evenly w-full ${className} ${fadein === "left" ? "fade-in-left" : fadein}`} ref={ref}>
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
