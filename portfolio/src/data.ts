
export const columns = [
    { field: "loanNo", headerName: "Loan No.", flex: 1 },
    { field: "loanType", headerName: "Loan Type", flex: 1 },
    { field: "borrower", headerName: "Borrower", flex: 1 },
    { field: "borrowerAddress", headerName: "Borrower Address", flex: 1 },
    { field: "coBorrowerName", headerName: "Co-Borrower 1 Name", flex: 1 },
    { field: "coBorrowerAddress", headerName: "Co-Borrower 1 Address", flex: 1 },
    { field: "currentDPD", headerName: "Current DPD", flex: 1 },
    { field: "sanctionAmount", headerName: "Sanction Amount", flex: 1 },
    { field: "region", headerName: "Region", flex: 1 }
  ];
  
  const generateLoanNo = (num: number): string =>
    `L28U${(num + 3240).toString().padStart(4, "0")}`;
  
  const randomFrom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  
  const coBorrowerFirstNames = [
    "Ravi", "Kunal", "Neha", "Pooja", "Amit", "Sneha"
  ];
  const coBorrowerLastNames = [
    "Malhotra", "Joshi", "Chopra", "Kapoor", "Bose", "Desai"
  ];
  const streets = [
    "Sunset Boulevard", "Broadway", "Hillcrest Avenue", "Greenwood Lane", "Victoria Street"
  ];
  
  const regions = ["North", "South", "East", "West"];
  const loanTypes = ["Home Loan", "Car Loan", "Personal Loan"];
  
  export const rows = Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    const loanType = randomFrom(loanTypes);
    const region = randomFrom(regions);
    const currentDPD = Math.floor(Math.random() * 121);
    const sanctionValue = Math.floor(Math.random() * 4000000) + 1000000;
  
    const coBorrowerName = `${randomFrom(coBorrowerFirstNames)} ${randomFrom(coBorrowerLastNames)}`;
    const coBorrowerAddress = `${Math.floor(Math.random() * 1000)} ${randomFrom(streets)}, City ${id}`;
  
    return {
      id,
      loanNo: generateLoanNo(i),
      loanType,
      borrower: `Borrower ${id}`,
      borrowerAddress: `${id * 10} Sunset Boulevard, City ${id}`,
      coBorrowerName,
      coBorrowerAddress,
      currentDPD,
      sanctionAmount: `₹ ${sanctionValue.toLocaleString()}`,
      region
    };
  });
  