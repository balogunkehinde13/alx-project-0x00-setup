import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 transition ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;