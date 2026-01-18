export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="card shadow-md">
      <p className="text-sm opacity-70">{title}</p>
      <h3 className="text-2xl font-bold accent mt-2">{value}</h3>
    </div>
  );
}
