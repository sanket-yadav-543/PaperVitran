import React, { useState, useEffect } from "react";

const PDFViewer = ({ branch = "ece", semester = "1" }) => {
  const [files, setFiles] = useState([]);
  const [currentPdf, setCurrentPdf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(`http://localhost:3000/paper/${branch}/${semester}`);
        const data = await res.json();
        if (data.files) setFiles(data.files);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchFiles();
  }, [branch, semester]);

  const containerStyle = {
    minHeight: "100vh",
    background: "#1f2937",
    color: "#f9fafb",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  };

  const fileItemStyle = {
    background: "#374151",
    padding: 12,
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  };

  const buttonStyle = (bg = "#2563eb") => ({
    background: bg,
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
  });

  const iframeStyle = {
    width: "100%",
    height: "80vh",
    border: "1px solid #4b5563",
    borderRadius: 8,
    background: "#111827",
  };

  if (loading) return <div style={containerStyle}>Loading files...</div>;

  if (!currentPdf) {
    return (
      <div style={containerStyle}>
        <h2>PDF List</h2>
        {files.map((file, idx) => {
          // Extract fileId for proxy
          const fileId = file.download.split("id=")[1].split("&")[0];
          return (
            <div key={idx} style={fileItemStyle}>
              <span>{file.name}</span>
              <button style={buttonStyle()} onClick={() => setCurrentPdf(fileId)}>
                View
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: 10 }}>
        <a href={`http://localhost:3000/api/file/${currentPdf}`} download>
          <button style={buttonStyle("#16a34a")}>Download</button>
        </a>
        <button
          onClick={() => setCurrentPdf(null)}
          style={buttonStyle("#dc2626")}
        >
          Close
        </button>
      </div>
    <iframe
  src={`http://localhost:3000/api/file/1AcEJdokhEqfVLq_zsU0aGUzR3LTCQ7Zh`}
  style={{ width: "100%", height: "80vh", border: "none" }}
  title="PDF Viewer"
/>
    </div>
  );
};

export default PDFViewer;
