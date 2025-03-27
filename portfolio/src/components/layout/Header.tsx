import React, { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-300 flex items-center px-4">
      <h1 className="text-xl font-bold">Portfolio Manager</h1>
      <div className="ml-auto">{children}</div>
    </header>
  );
};

export default Header;
