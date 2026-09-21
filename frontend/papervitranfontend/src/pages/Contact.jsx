import React, { useState } from "react";
import { Mail } from "lucide-react";
import axios from "axios"; // for sending form data to your backend

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Example using backend endpoint '/api/contact'
      await axios.post("/api/contact", { name, email, message });
      setSuccess("Thank you! Your feedback has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Failed to send feedback. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 md:px-12 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-pink-400 mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Have questions, suggestions, or feedback? Fill out the form below and we'll get back to you.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-[#1a1c23] p-10 rounded-3xl border border-gray-800 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#111] border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#111] border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full p-4 rounded-xl bg-[#111] border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Write your message..."
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-400">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Feedback"}
          </button>
        </form>
      </div>

      {/* Footer Email */}
      <div className="text-center mt-12 text-gray-400 flex flex-col items-center gap-2">
        <Mail className="inline-block mb-1" size={20} />
        <p>Email us at: <span className="text-pink-400">papervitran@gmail.com</span></p>
      </div>
    </div>
  );
};

export default Contact;
