const Table = ({ data, headers, children }) => {
  return (
    <table className="min-w-full border-separate border-spacing-0 overflow-x-scroll">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header.value}
              scope="col"
              className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
            >
              {header.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {headers.map((header) => (
              <td
                key={header.value}
                className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6 lg:pl-8"
              >
                {item[header.value] || children}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
