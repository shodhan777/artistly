interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
}

interface TableProps {
  data: Artist[];
}

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto shadow rounded bg-white">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-blue-200 text-left">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Price Range</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id} className="hover:bg-blue-50 text-center">
              <td className="border px-4 py-2">{artist.name}</td>
              <td className="border px-4 py-2">{artist.category}</td>
              <td className="border px-4 py-2">{artist.location}</td>
              <td className="border px-4 py-2">{artist.priceRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
