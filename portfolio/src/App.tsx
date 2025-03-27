import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PortfolioTable from "./components/table/PortfolioTable";
import ColumnSelector from "./components/ColumnSelector";
import QuickSortBar from "./components/QuickSortBar";
import Head from "./components/layout/Head";
import UploadSlider from "./components/upload/UploadSlider";
import { columns as allColumns } from "./data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Column {
  field: string;
  headerName: string;
  flex: number;
}
interface UploadData {
  file: File;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(
    allColumns.map((col) => col.field)
  );
  const [sortOption, setSortOption] = useState<string>("");
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showUploadSlider, setShowUploadSlider] = useState<boolean>(false);

  const displayedColumns: Column[] = allColumns.filter((col) =>
    selectedColumns.includes(col.field)
  );

  const handleReset = () => {
    setSearchTerm("");
    setFilterActive(false);
    setSelectedColumns(allColumns.map((col) => col.field));
    setSortOption("");
  };
  const handleUploadSubmit = (uploadData: UploadData) => {
    console.log("Uploaded Data:", uploadData);
    setShowUploadSlider(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Head />
      {/* Header */}
      <div className="flex-none border-b border-gray-300">
        <Header>
          {/* Mobile Menu Icon */}
          <button
            onClick={() => setShowSidebar(true)}
            className="block md:hidden ml-4 p-2"
          >
            <FiMenu size={24} />
          </button>
        </Header>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Desktop) */}
        <div className="hidden md:block md:w-64">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div className="w-64 bg-white border-r border-gray-300">
              <Sidebar />
              <div className="p-2">
                <button
                  onClick={() => setShowSidebar(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
                >
                  Close
                </button>
              </div>
            </div>
            <div
              className="flex-1 bg-black opacity-50"
              onClick={() => setShowSidebar(false)}
            ></div>
          </div>
        )}

        {/* Page Content */}
        <div className="flex-1 md:ml-2 md:mr-2 p-4 md:p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Portfolio</h2>

          {/* Sorting Bar */}
          <div className="mb-4">
            <QuickSortBar
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>

          {/* Search & Filter Buttons */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <input
              type="text"
              placeholder="Search Loan Number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded mb-2 md:mb-0 md:w-1/3"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Select Columns
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Reset
              </button>
              <button
                onClick={() => setShowUploadSlider(true)} // Opens the UploadSlider
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Upload
              </button>
            </div>
          </div>

          {/* Data Table */}
          <PortfolioTable
            searchTerm={searchTerm}
            filterActive={filterActive}
            displayedColumns={displayedColumns}
            sortOption={sortOption}
            advancedFilters={[]}
          />

          {/* Modals */}
          <ColumnSelector
            open={selectOpen}
            handleClose={() => setSelectOpen(false)}
            selected={selectedColumns}
            setSelected={setSelectedColumns}
          />
        </div>
      </div>
      <UploadSlider
        open={showUploadSlider}
        handleClose={() => setShowUploadSlider(false)}
        onSubmit={handleUploadSubmit}
      />
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
