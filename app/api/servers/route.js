import { NextResponse } from "next/server";

export async function GET() {
  const servers = [
    {
      id: 1,
      name: "Server A",
      ip: "192.168.1.1",
      status: "Up",
      responseTime: 120,
      uptime: "99.9%",
    },
    {
      id: 2,
      name: "Server B",
      ip: "192.168.1.2",
      status: "Down",
      responseTime: null,
      uptime: "0%",
    },
    {
      id: 3,
      name: "Server C",
      ip: "192.168.1.3",
      status: "Degraded",
      responseTime: 300,
      uptime: "87.5%",
    },
    {
      id: 4,
      name: "Server D",
      ip: "192.168.1.4",
      status: "Up",
      responseTime: 80,
      uptime: "99.5%",
    },
  ];

  return NextResponse.json(servers);
}
