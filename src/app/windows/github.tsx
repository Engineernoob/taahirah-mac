"use client";

export default function GitHubWindow() {
  const repositories = [
    {
      name: "FERN",
      description:
        "Full-stack reinforcement learning agent for software systems.",
      url: "https://github.com/Engineernoob/fern",
    },
    {
      name: "Cortex",
      description:
        "Local RAG workspace for context-aware knowledge organization.",
      url: "https://github.com/Engineernoob/cortex",
    },
    {
      name: "VillaCard",
      description: "AI concierge and property management dashboard.",
      url: "https://github.com/Engineernoob/villacard",
    },
    {
      name: "Cue",
      description: "Offline AI copilot for coding interviews and meetings.",
      url: "https://github.com/Engineernoob/cue",
    },
    {
      name: "SlowRead",
      description: "Minimal reading app for focused, intentional learning.",
      url: "https://github.com/taahirah/slowread",
    },

    {
      name: "Quantum",
      description: "Quantum randomness experiment and visualization framework.",
      url: "https://github.com/Engineernoob/quantum",
      language: "Python",
      stars: 0,
    },
    {
      name: "NotchPod",
      description:
        "Retro 3D cassette-style music player and mood playlist engine.",
      url: "https://github.com/Engineernoob/notchpod",
    },
    {
      name: "Ada",
      description:
        "AI assistant and model orchestrator built on local inference.",
      url: "https://github.com/Engineernoob/ada",
      language: "Python",
    },
  ];

  const openRepo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5] overflow-auto"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">GitHub Repositories</h2>
        <p className="text-[10px] text-gray-800 text-center">
          Click a repository to open it in your browser.
        </p>
      </div>

      {repositories.map((repo) => (
        <div
          key={repo.name}
          onClick={() => openRepo(repo.url)}
          className="border border-black p-2 mb-2 bg-white cursor-pointer hover:bg-[#C0C0C0]"
        >
          <h3 className="font-bold text-[11px] mb-1">{repo.name}</h3>
          <p className="text-[10px] mb-1">{repo.description}</p>
          <div className="flex justify-between text-[10px]">
            <span>
              <strong>Lang:</strong> {repo.language}
            </span>
            <span>
              <strong>★</strong> {repo.stars}
            </span>
          </div>
        </div>
      ))}

      <div className="border-t border-black mt-3 pt-1 text-center text-[10px]">
        Total Repositories: {repositories.length}
      </div>
    </div>
  );
}
