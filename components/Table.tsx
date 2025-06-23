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
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Name</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Location</th>
          <th className="border p-2">Price Range</th>
        </tr>
      </thead>
      <tbody>
        {data.map((artist) => (
          <tr key={artist.id} className="text-center">
            <td className="border p-2">{artist.name}</td>
            <td className="border p-2">{artist.category}</td>
            <td className="border p-2">{artist.location}</td>
            <td className="border p-2">{artist.priceRange}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
