import { useState } from "react";

export default function Object_file_input() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          display: "block",
          marginBottom: "8px",
          fontSize: "16px",
        }}
      >
        Select a file:
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          backgroundColor: "#fff",
          width: "100%",
          marginBottom: "12px",
        }}
      />

      {selectedFile && (
        <div
          style={{
            fontSize: "14px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <p>
            <strong>File:</strong> {selectedFile.name}
          </p>

          <p>
            <strong>Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}
    </div>
  );
}
