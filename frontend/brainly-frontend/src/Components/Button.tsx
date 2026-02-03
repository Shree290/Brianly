import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?:()=>void;
  fullWidth?:boolean;
  loading?:boolean;
  reference?: React.RefObject<HTMLInputElement>
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-700",
};
const defaultStyles="px-4 py-2 rounded-md font-light flex items-center"

export function Button({ variant, text, startIcon, onClick, fullWidth, reference }: ButtonProps) {
  return <button onClick={onClick} className={variantClasses[variant]+" "+ defaultStyles+ fullWidth}>
      <div className="pr-2">
      {startIcon}
      </div>
      {text}
    </button>
  
}
