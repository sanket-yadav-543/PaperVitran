import React from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Brain, Target } from "lucide-react";

const Games = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: "Quiz Challenge",
      desc: "Test your knowledge with fun topic-based quizzes.",
      icon: <Brain size={40} className="text-yellow-400" />,
      color: "from-yellow-400 to-orange-500",
      route: "/quiz",
    },
    {
      id: 2,
      title: "Memory Match",
      desc: "Sharpen your focus and improve memory with matching cards.",
      icon: <Gamepad2 size={40} className="text-pink-400" />,
      color: "from-pink-400 to-purple-500",
      route: "/memory",
    },
    {
      id: 3,
      title: "Typing Speed Test",
      desc: "See how fast you can type and improve your typing skills.",
      icon: <Target size={40} className="text-cyan-400" />,
      color: "from-cyan-400 to-blue-500",
      route: "/typing",
    },
  ];

  return (
    <section className="bg-[#0d1117] py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-red-500">
        Play & Learn
      </h2>

      <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#1a1c23] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-between text-center"
          >
            <div className="bg-gradient-to-r rounded-full p-4 mb-4 flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
            >
              {game.icon}
            </div>

            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {game.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{game.desc}</p>

            <button
              onClick={() => navigate(game.route)}
              className={`px-5 py-2 rounded-lg bg-gradient-to-r ${game.color} text-white hover:opacity-90 transition`}
            >
              Play Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
