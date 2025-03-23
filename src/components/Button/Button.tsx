export interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
  size: "small" | "large";
}

export const Button = ({
  className = "",
  label,
  size = "large",
  ...props
}: ButtonProps) => {
  const sizeClassName =
    {
      small: "rounded-sm px-2 py-1 text-xs",
      large: "rounded-md px-2.5 py-1.5 text-sm",
    }[size] || "";

  return (
    <button
      type="button"
      className={`bg-indigo-600 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600${sizeClassName ? ` ${sizeClassName}` : sizeClassName}${className ? ` ${className}` : className}`}
      {...props}
    >
      {label}
    </button>
  );
};
