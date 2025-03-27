import React from "react";
import { FiHome, FiBell, FiFileText, FiUpload, FiUsers } from "react-icons/fi";
import { MdGavel } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white w-64 border-r border-gray-300 flex flex-col h-screen">
      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`flex items-center p-2 rounded ${
                  item.active
                    ? "text-white bg-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

type MenuItem = {
  href: string;
  icon: React.ReactNode; 
  label: string;
  active?: boolean;
};

const menuItems: MenuItem[] = [
  { href: "#dashboard", icon: <FiHome />, label: "Dashboard" },
  { href: "#portfolio", icon: <FiFileText />, label: "Portfolio", active: true },
  { href: "#notifications", icon: <FiBell />, label: "Notifications" },
  { href: "#notices", icon: <FiFileText />, label: "Notices" },
  { href: "#auction", icon: <MdGavel />, label: "Auction" },
  { href: "#data-upload", icon: <FiUpload />, label: "Data Upload" },
  { href: "#control-panel", icon: <RiUserSettingsLine />, label: "Control Panel" },
  { href: "#user-management", icon: <FiUsers />, label: "User Management" },
  { href: "#permissions", icon: <FiUsers />, label: "Permissions" },
];
