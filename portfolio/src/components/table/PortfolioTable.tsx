import React, { useMemo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows as allRows } from "../../data";

type PortfolioTableProps = {
  searchTerm: string;
  filterActive: boolean;
  displayedColumns: GridColDef[];
  advancedFilters?: { field: string; value: string }[];
  sortOption: string;
};

const PortfolioTable: React.FC<PortfolioTableProps> = ({
  searchTerm,
  filterActive,
  displayedColumns,
  advancedFilters = [],
  sortOption,
}) => {
  const parseAmount = (amount: string): number => {
    return parseFloat(amount.replace(/[^\d.-]/g, "")) || 0;
  };

  const filteredRows = useMemo(() => {
    let temp = [...allRows];

    if (searchTerm) {
      temp = temp.filter((row) =>
        row.loanNo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterActive) {
      temp = temp.filter((row) => row.currentDPD > 90);
    }

    advancedFilters.forEach((filter) => {
      switch (filter.field) {
        case "loanType":
          temp = temp.filter((row) => row.loanType === filter.value);
          break;
        case "region":
          temp = temp.filter((row) => row.region === filter.value);
          break;
        case "dpdMin":
          temp = temp.filter(
            (row) => row.currentDPD >= parseInt(filter.value, 10)
          );
          break;
        case "dpdMax":
          temp = temp.filter(
            (row) => row.currentDPD <= parseInt(filter.value, 10)
          );
          break;
      }
    });

    if (["North", "East", "West", "South"].includes(sortOption)) {
      temp = temp.filter((row) => row.region === sortOption);
    }

    switch (sortOption) {
      case "loanDesc":
        temp.sort(
          (a, b) => parseAmount(b.sanctionAmount) - parseAmount(a.sanctionAmount)
        );
        break;
      case "loanAsc":
        temp.sort(
          (a, b) => parseAmount(a.sanctionAmount) - parseAmount(b.sanctionAmount)
        );
        break;
      case "dpdDesc":
        temp.sort((a, b) => b.currentDPD - a.currentDPD);
        break;
      case "dpdAsc":
        temp.sort((a, b) => a.currentDPD - b.currentDPD);
        break;
    }

    return temp;
  }, [searchTerm, filterActive, advancedFilters, sortOption]);

  return (
    <div style={{ height: 500, width: "100%", backgroundColor: "#fff" }}>
      <DataGrid
        rows={filteredRows}
        columns={displayedColumns}
        pageSizeOptions={[5, 10]}
        sx={{
          "& .MuiDataGrid-cell": {
            fontSize: "0.8rem",
            whiteSpace: "normal",
            wordBreak: "break-word",
          },
          "& .MuiDataGrid-columnHeaders": {
            fontSize: "0.85rem",
          },
        }}
      />
    </div>
  );
};

export default PortfolioTable;
