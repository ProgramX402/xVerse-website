"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Mail,
  BarChart2,
  LogOut,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-[#001f4d] text-white fixed top-0 left-0 transition-all duration-300 shadow-xl
      ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
        <h1 className={`text-xl font-bold transition-all ${!isOpen && "hidden"}`}>
          xVerse Admin
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-gray-300 transition"
        >
          ☰
        </button>
      </div>

      {/* Navigation */}
      <ul className="mt-6 flex flex-col space-y-3 px-4">
        <SidebarItem icon={<LayoutDashboard />} label="Overview" open={isOpen} />
        <SidebarItem icon={<BarChart2 />} label="Newsletter" open={isOpen} />
        <SidebarItem icon={<Mail />} label="Messages" open={isOpen} />
        <SidebarItem icon={<Users />} label="Admins" open={isOpen} />
        <SidebarItem icon={<Settings />} label="Settings" open={isOpen} />
      </ul>

      {/* Logout */}
      <div className="absolute bottom-6 left-0 w-full px-4">
        <SidebarItem icon={<LogOut />} label="Logout" open={isOpen} />
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  open,
}: {
  icon: any;
  label: string;
  open: boolean;
}) {
  return (
    <li
      className="flex items-center space-x-3 px-3 py-3 hover:bg-white/10 rounded-lg cursor-pointer transition-all"
    >
      <span className="text-xl">{icon}</span>
      {open && <span className="text-sm font-medium">{label}</span>}
    </li>
  );
}
