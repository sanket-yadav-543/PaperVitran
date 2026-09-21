import React, { useState } from "react";
import axiosClient from "../utils/axiosClient";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const Material = () => {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [type, setType] = useState("");
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [comingSoon, setComingSoon] = useState(false);

  const handleFetch = async () => {
    if (!branch || !semester || !type) {
      setError("⚠️ Please select all fields");
      return;
    }
    setError("");
    setComingSoon(false);
    setLoading(true);
    setPapers([]);

    try {
      const res = await axiosClient.get(`/paper/${branch}/${semester}?type=${type}`);
      
      if (res.data.message === "Coming soon...") {
        setComingSoon(true);
      } else if (res.data.files) {
        setPapers(res.data.files);
      } else if (res.data.error) {
        setError(res.data.error);
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewPaper = (pdfUrl) => window.open(pdfUrl, "_blank", "noopener,noreferrer");
  const handleDownloadPaper = (pdfUrl, fileName) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName || "paper.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPapers = papers.filter(file =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 md:px-12 pt-16 pb-24">
      
      {/* Header */}
      <div className="text-center mb-16">
        {/* <h1 className="text-5xl font-extrabold text-[#4FD1C5] mb-3">PYQS</h1> */}
        
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto mb-12 bg-[#111]/80 backdrop-blur-md p-10 rounded-3xl border border-gray-800 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Branch</label>
            <select value={branch} onChange={(e) => setBranch(e.target.value)}
              className="w-full bg-black/60 border border-gray-600 rounded-xl p-3 text-white focus:ring-2 focus:ring-pink-500">
              <option value="">-- Select Branch --</option>
              <option value="ece">ECE</option>
              <option value="cse">CSE</option>
              <option value="me">ME</option>
              <option value="mining">MINING</option>
              <option value="chemical">CHEMICAL</option>
              <option value="civil">CIVIL</option>
              <option value="it">IT</option>
              <option value="metallurgy">METALLURGY</option>
              <option value="production">PRODUCTION</option>
              <option value="cyber">CYBER</option>
               <option value="electrical">electrical</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Semester</label>
            <select value={semester} onChange={(e) => setSemester(e.target.value)}
              className="w-full bg-black/60 border border-gray-600 rounded-xl p-3 text-white focus:ring-2 focus:ring-pink-500">
              <option value="">-- Select Semester --</option>
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>Semester {n}</option>)}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Exam Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}
              className="w-full bg-black/60 border border-gray-600 rounded-xl p-3 text-white focus:ring-2 focus:ring-pink-500">
              <option value="">-- Select Exam Type --</option>
              <option value="midsem">Mid Sem</option>
              <option value="endsem">End Sem</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button onClick={handleFetch} disabled={loading}
            className="px-10 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50">
            {loading ? "Loading..." : "Show Papers"}
          </button>
        </div>

        {error && <p className="text-red-400 mt-5 text-center font-medium">{error}</p>}
      </div>

      {/* Search */}
      {papers.length > 0 && (
        <div className="max-w-2xl mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/>
          <input type="text" placeholder="Search paper by name..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 pl-12 rounded-xl bg-[#111] text-white border border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none"/>
        </div>
      )}

      {/* Papers Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {loading && <p className="text-center col-span-full py-20 text-gray-400 text-lg">Loading papers...</p>}

        {!loading && filteredPapers.length > 0 && filteredPapers.map((file, i) => (
          <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            className="bg-[#1a1c23] p-6 rounded-2xl border border-gray-800 shadow-md flex flex-col items-center text-center hover:shadow-pink-400/20 hover:-translate-y-1 transition-all duration-300">
            <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" className="w-20 h-20 mb-5"/>
            <h3 className="text-base font-semibold text-pink-400 truncate w-full">{file.name}</h3>
            <p className="text-gray-400 text-sm mt-1 mb-5">{type === "midsem" ? "Mid Sem" : "End Sem"} • Sem {file.semester}</p>
            <div className="flex gap-2 w-full">
              <button onClick={() => handleViewPaper(file.view)} className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-500">View</button>
              <button onClick={() => handleDownloadPaper(file.download, file.name)} className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-500">Download</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Modal */}
      {comingSoon && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] rounded-3xl p-10 text-center max-w-sm mx-4 shadow-xl border border-gray-700">
            <h2 className="text-3xl font-bold text-red-500 mb-4">Coming Soon 🚀</h2>
            <p className="text-gray-400 mb-6">We are adding papers for this selection soon. Stay tuned!</p>
            <button onClick={() => setComingSoon(false)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition">
              Close
            </button>
          </div>
        </div>
      )}

      {/* No search results */}
      {!loading && papers.length > 0 && filteredPapers.length === 0 && (
        <p className="text-center col-span-full py-12 text-gray-400">No matching papers found. Try another search.</p>
      )}

    </div>
  );
};

export default Material;
