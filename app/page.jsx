import Dashboard from "@/components/Dashboard";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/servers");
  const servers = await res.json();

  return (
    <main>
      <Dashboard servers={servers} />
    </main>
  );
}
