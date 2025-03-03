"use client";
import { useQuery } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = ({ servers: initialData }) => {
  const [selectedServer, setSelectedServer] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const router = useRouter();

  const { data: servers, isPending: loading } = useQuery({
    queryKey: ["servers"],
    queryFn: async () => {
      const res = await fetch("/api/servers");
      const data = await res.json();
      return data;
    },
    initialData
  });

  const filteredServers = servers?.filter((server) =>
    statusFilter === "All" ? true : server?.status === statusFilter
  );

  const sortedServers = [filteredServers].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "responseTime")
      return (a.responseTime || Infinity) - (b.responseTime || Infinity);
    return 0;
  });

  const handleSignOut = async () => {
    await signOut().finally(() => {
      router.push("/login");
    });
  };

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold mb-4'>Server Status Dashboard</h1>
        <button onClick={handleSignOut} className='bg-red-500 text-white p-2 px-4 rounded-md'>
          Sign out
        </button>
      </div>

      {/* Loading State */}
      {loading ? (
        <p>Loading servers...</p>
      ) : (
        <>
          {/* Filter & Sort Controls */}
          <div className='mb-4 flex space-x-4'>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className='p-2 border rounded'
            >
              <option value='All'>All</option>
              <option value='Up'>Up</option>
              <option value='Down'>Down</option>
              <option value='Degraded'>Degraded</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='p-2 border rounded'
            >
              <option value='name'>Sort by Name</option>
              <option value='responseTime'>Sort by Response Time</option>
            </select>
          </div>

          {/* Server List */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {sortedServers[0].map((server) => {
              return (
                <div
                  key={server?.id}
                  className='p-4 border rounded cursor-pointer hover:shadow-lg'
                  onClick={() => setSelectedServer(server)}
                >
                  <h2 className='text-lg font-semibold'>{server?.name}</h2>
                  <p className='text-gray-500'>{server?.ip}</p>
                  <span
                    className={`px-2 py-1 text-white rounded ${
                      server?.status === "Up"
                        ? "bg-green-500"
                        : server?.status === "Down"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {server?.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Server Details Modal */}
          {selectedServer && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6'>
              <div className='bg-white p-6 rounded-lg w-96 shadow-lg'>
                <h2 className='text-xl font-bold'>{selectedServer.name}</h2>
                <p>
                  <strong>IP:</strong> {selectedServer.ip}
                </p>
                <p>
                  <strong>Status:</strong> {selectedServer.status}
                </p>
                <p>
                  <strong>Response Time:</strong>{" "}
                  {selectedServer.responseTime ? `${selectedServer.responseTime}ms` : "N/A"}
                </p>
                <p>
                  <strong>Uptime:</strong> {selectedServer.uptime}
                </p>
                <button
                  onClick={() => setSelectedServer(null)}
                  className='mt-4 bg-gray-500 text-white px-4 py-2 rounded'
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
