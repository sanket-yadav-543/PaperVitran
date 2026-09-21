import React from "react";

const About = () => {
  const creators = [
    {
      name: "Sujit Kumar",
      role: "Full Stack Developer & Creator",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      bio: "Passionate about building digital solutions that simplify education and help students prepare smarter.",
      portfolio: "https://sujitportfolio.work",
    },
   
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 md:px-12 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-[#4FD1C5] mb-4 tracking-wide">
          About 
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          PaperVitran is a platform created to help students access previous year question papers
          and study materials easily. Our mission is to make exam preparation smarter, more organized,
          and accessible for every learner.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-[#1a1c23] rounded-2xl p-10 border border-gray-800 shadow-lg hover:shadow-[0_0_25px_#4FD1C5]/20 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-[#4FD1C5] mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To empower students with free, structured access to previous year exam papers
            and academic resources — helping them practice effectively and build confidence.
          </p>
        </div>
        <div className="bg-[#1a1c23] rounded-2xl p-10 border border-gray-800 shadow-lg hover:shadow-[0_0_25px_#4FD1C5]/20 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-[#4FD1C5] mb-4">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            To become India’s most trusted student resource hub — ensuring that quality learning
            materials and question papers are always just one click away.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#E2B714] mb-12 tracking-wide">
          Meet the Creators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {creators.map((person, index) => (
            <div
              key={index}
              className="bg-[#1a1c23] p-8 rounded-2xl border border-gray-800 shadow-md hover:shadow-[0_0_25px_#4FD1C5]/20 transition-all duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-[#4FD1C5] shadow-md"
              />
              <h3 className="text-xl font-semibold text-[#4FD1C5] mb-1">
                {person.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{person.role}</p>
              <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                {person.bio}
              </p>
              <a
                href={person.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-[#4FD1C5] to-blue-500 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                Portfolio
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-500 mt-20 text-sm">
        © {new Date().getFullYear()} PaperVitran. All rights reserved.
      </p>
    </div>
  );
};

export default About;
