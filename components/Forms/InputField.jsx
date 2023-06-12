export default function InputField({ label, className, error, ...props }) {
  return (
    <div className={className}>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium leading-6 text-white mb-1"
      >
        {label}
      </label>
      <input
        className="bg-gray-700 block w-full rounded-md border-0 py-1.5 px-2 text-gray-300 shadow-sm focus:ring-5 focus:outline-none  placeholder:text-gray-400 sm:text-sm sm:leading-6"
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
