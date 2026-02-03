import { forwardRef } from "react";

type InputProps = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, onChange, type = "text" }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        className="px-4 py-2 border rounded m-2"
        onChange={onChange}
      />
    );
  }
);
