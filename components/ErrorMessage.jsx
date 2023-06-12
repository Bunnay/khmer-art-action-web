const ErrorMessage = ({ message }) => {
  return (
    <div className="p-4 mb-4 text-sm text-red ring-1 ring-red rounded-lg bg-red/5 dark:text-red">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
