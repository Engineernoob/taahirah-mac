export default function GitHubWindow() {
  const repositories = [
    {
      name: 'fern',
      description: 'A modern data visualization library',
      url: 'https://github.com/taahirah/fern',
      language: 'TypeScript',
      stars: 149
    },
    {
      name: 'cortex',
      description: 'AI-powered code analysis tool',
      url: 'https://github.com/taahirah/cortex',
      language: 'Python',
      stars: 89
    },
    {
      name: 'villacard',
      description: 'Smart home automation system',
      url: 'https://github.com/taahirah/villacard',
      language: 'JavaScript',
      stars: 234
    },
    {
      name: 'cue',
      description: 'Real-time collaborative editing platform',
      url: 'https://github.com/taahirah/cue',
      language: 'Go',
      stars: 567
    },
    {
      name: 'slowread',
      description: 'Speed reading comprehension app',
      url: 'https://github.com/taahirah/slowread',
      language: 'React',
      stars: 123
    },
    {
      name: 'pixelfin',
      description: 'Digital art creation suite',
      url: 'https://github.com/taahirah/pixelfin',
      language: 'WebGL',
      stars: 456
    },
    {
      name: 'quantum',
      description: 'Quantum computing simulation framework',
      url: 'https://github.com/taahirah/quantum',
      language: 'Python',
      stars: 789
    },
    {
      name: 'notchpod',
      description: 'Podcast management platform',
      url: 'https://github.com/taahirah/notchpod',
      language: 'Node.js',
      stars: 345
    },
    {
      name: 'ada',
      description: 'Machine learning model optimizer',
      url: 'https://github.com/taahirah/ada',
      language: 'Python',
      stars: 678
    }
  ];

  const openRepo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="p-4 h-full overflow-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">GitHub Repositories</h2>
        <p className="text-sm text-gray-600">Click on any repository to view it on GitHub</p>
      </div>
      
      <div className="space-y-3">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="border-2 border-black p-3 hover:bg-gray-100 cursor-pointer transition-colors"
            onClick={() => openRepo(repo.url)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-1">{repo.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{repo.description}</p>
                <div className="flex items-center space-x-4 text-xs">
                  <span className="bg-black text-white px-1 py-0.5">{repo.language}</span>
                  <span className="flex items-center">
                    ⭐ {repo.stars}
                  </span>
                </div>
              </div>
              <div className="ml-4">
                <span className="text-xs text-blue-600 hover:text-blue-800">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 border-t-2 border-black pt-4">
        <p className="text-xs text-gray-500">
          Total repositories: {repositories.length}
        </p>
      </div>
    </div>
  );
}
