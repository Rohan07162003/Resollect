import React from "react";

const Head: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/resollectimg.png"
          alt="Resollect Logo"
          className="h-12"
        />
      </div>

      {/* Right Section: User Profile & Actions */}
      <div className="flex items-center space-x-4">
        <img
          src="/defaultuser2.png"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col text-left">
          <span className="font-medium">Rohan</span>
          <span className="text-sm text-gray-500">rohanpandya07@gmail.com</span>
        </div>
      </div>
    </header>
  );
};

export default Head;
