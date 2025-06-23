import artists from "../../data/artists.json";
import Table from "@/components/Table";

export default function Dashboard() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
      <Table data={artists} />
    </section>
  );
}
