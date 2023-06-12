export default function FileInput({ label, onChange, accept, className }) {
  const handleFileChange = (event) => {
    const files = event.target.files;
    const selectedFile = files && files.length ? files[0] : null;
    onChange(selectedFile);
  };

  return (
    <>
      <div className={className}>
        <label
          htmlFor="file"
          className="block text-sm font-medium leading-6 text-white mb-1"
        >
          {label}
        </label>
        <input
          id="file"
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="bg-gray-700 block w-full rounded-md border-0 py-1.5 px-2 text-gray-300 shadow-sm focus:ring-5 focus:outline-none  placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
