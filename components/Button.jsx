const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-3 py-1 bg-blue text-white rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
