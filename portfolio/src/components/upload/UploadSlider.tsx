import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@mui/material";
import { toast } from "react-toastify";

interface UploadSliderProps {
  open: boolean;
  handleClose: () => void;
  onSubmit: (data: UploadData) => void;
}

interface UploadData {
  documentName: string;
  documentType: string;
  documentRemarks: string;
  file: File;
}

const UploadSlider: React.FC<UploadSliderProps> = ({ open, handleClose, onSubmit }) => {
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentRemarks, setDocumentRemarks] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!file) {
      console.error("File is required.");
      return;
    }

    const uploadData: UploadData = { documentName, documentType, documentRemarks, file };
    onSubmit(uploadData);
    toast.success("Uploaded Successfully!", { position: "top-right" });

    setDocumentName("");
    setDocumentType("");
    setDocumentRemarks("");
    setFile(null);

    handleClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? "0%" : "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 z-50"
    >
      <h2 className="text-lg font-semibold mb-4">Upload Document</h2>
      <FormControl fullWidth margin="normal">
        <InputLabel>Document Name</InputLabel>
        <Select value={documentName} onChange={(e) => setDocumentName(e.target.value)}>
          <MenuItem value="Aadhaar Card">Aadhaar Card</MenuItem>
          <MenuItem value="PAN Card">PAN Card</MenuItem>
          <MenuItem value="Driving License">Driving License</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Document Type</InputLabel>
        <Select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
          <MenuItem value="ID Proof">ID Proof</MenuItem>
          <MenuItem value="Address Proof">Address Proof</MenuItem>
          <MenuItem value="Financial">Financial</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        margin="normal"
        label="Document Remarks"
        value={documentRemarks}
        onChange={(e) => setDocumentRemarks(e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <label className="inline-block bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
          Select File
          <input type="file" onChange={handleFileChange} className="hidden" required />
        </label>
        {file ? <p className="text-sm mt-2">{file.name}</p> : <p className="text-sm text-red-500 mt-2">No file chosen yet</p>}
      </FormControl>
      <div className="flex justify-between mt-4">
        <Button onClick={handleClose} color="inherit">Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={!file}>Submit</Button>
      </div>
    </motion.div>
  );
};

export default UploadSlider;
