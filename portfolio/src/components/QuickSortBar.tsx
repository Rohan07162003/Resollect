import React from "react";

interface QuickSortBarProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

const QuickSortBar: React.FC<QuickSortBarProps> = ({ sortOption, setSortOption }) => {
  // Extended Sorting & Region Filtering Options
  const options = [
    { label: "Highest Loan", value: "loanDesc" },
    { label: "Lowest Loan", value: "loanAsc" },
    { label: "Highest DPD", value: "dpdDesc" },
    { label: "Lowest DPD", value: "dpdAsc" },
    { label: "North", value: "North" },
    { label: "East", value: "East" },
    { label: "West", value: "West" },
    { label: "South", value: "South" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`px-3 py-1 rounded border transition-colors ${
            sortOption === opt.value
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => setSortOption(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default QuickSortBar;
