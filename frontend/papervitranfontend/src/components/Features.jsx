import React from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Previous Year Papers",
      desc: "Access semester‑wise previous year question papers to practice and score better in exams.",
      topColor: "bg-blue-300",
      buttonAction: () => navigate("/materials"),
      buttonText: "View PYQs",
      imgSrc: "https://tse3.mm.bing.net/th/id/OIP.6anuGpdII4syf6fqMvTH-wHaH6?pid=Api&P=0&h=180",
      topText: "PYQ"
    },
  ];

  return (
    <section className="bg-[#0d1117] py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-red-500">
        Explore Resources
      </h2>

      <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#1a1c23] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between"
          >
            {/* Top colored section with image as big square */}
            <div
              className={`h-48 flex items-center justify-center ${feature.topColor}`}
            >
              {feature.imgSrc ? (
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="h-36 w-36 object-cover rounded-lg shadow-lg"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <span className="text-white text-4xl font-bold opacity-80">
                  {feature.topText}
                </span>
              )}
            </div>

            {/* Bottom content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>

              <button
                onClick={feature.buttonAction}
                className="mt-6 px-4 py-2 w-max bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition"
              >
                {feature.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Features;
