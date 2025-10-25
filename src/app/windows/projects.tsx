import { useOSStore } from '../store/useOSStore';

export default function ProjectsWindow() {
  const { openWindow } = useOSStore();

  const projects = [
    {
      id: 'cue',
      title: 'Cue',
      description: 'Real-time collaborative editing platform',
      icon: '📝',
      language: 'Go',
      link: 'https://github.com/taahirah/cue'
    },
    {
      id: 'fern',
      title: 'Fern',
      description: 'A modern data visualization library',
      icon: '🌿', 
      language: 'TypeScript',
      link: 'https://github.com/taahirah/fern'
    },
    {
      id: 'villacard',
      title: 'VillaCard',
      description: 'Smart home automation system',
      icon: '🏠',
      language: 'JavaScript', 
      link: 'https://github.com/taahirah/villacard'
    },
    {
      id: 'cortex',
      title: 'Cortex',
      description: 'AI-powered code analysis tool',
      icon: '🧠',
      language: 'Python',
      link: 'https://github.com/taahirah/cortex'
    },
    {
      id: 'slowread',
      title: 'SlowRead',
      description: 'Speed reading comprehension app',
      icon: '📚',
      language: 'React',
      link: 'https://github.com/taahirah/slowread'
    },
    {
      id: 'pixelfin',
      title: 'PixelFin',
      description: 'Digital art creation suite',
      icon: '🎨',
      language: 'WebGL',
      link: 'https://github.com/taahirah/pixelfin'
    },
    {
      id: 'quantum',
      title: 'Quantum',
      description: 'Quantum computing simulation framework',
      icon: '⚛️',
      language: 'Python',
      link: 'https://github.com/taahirah/quantum'
    },
    {
      id: 'notchpod',
      title: 'NotchPod',
      description: 'Podcast management platform',
      icon: '🎧',
      language: 'Node.js',
      link: 'https://github.com/taahirah/notchpod'
    },
    {
      id: 'ada',
      title: 'Ada',
      description: 'Machine learning model optimizer',
      icon: '🤖',
      language: 'Python',
      link: 'https://github.com/taahirah/ada'
    }
  ];

  const openProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      openWindow(projectId, project.title);
    }
  };

  const openRepo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="p-4 h-full overflow-auto bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-1">Projects Folder</h2>
        <p className="text-xs text-gray-600">Double-click a project to view details, or click link to open repo</p>
      </div>
      
      {/* System 7 style folder view */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {projects.map((project) => (
          <div key={project.id} className="text-center">
            <div 
              className="mb-1 cursor-pointer hover:opacity-80 transition-opacity"
              onDoubleClick={() => openProject(project.id)}
            >
              <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center text-2xl bg-white border-2 border-black">
                {project.icon}
              </div>
              <p className="text-xs font-mono truncate">{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* List view */}
      <div className="mt-6 border-t-2 border-black pt-4">
        <h3 className="text-sm font-bold mb-2">Project Details</h3>
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project.id} className="border border-black p-2 text-xs">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-2">
                  <span className="text-lg">{project.icon}</span>
                  <div>
                    <div className="font-bold">{project.title}</div>
                    <div className="text-gray-600">{project.description}</div>
                    <span className="bg-black text-white px-1 py-0.5 mt-1 inline-block">
                      {project.language}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => openRepo(project.link)}
                  className="text-xs text-blue-600 hover:text-blue-800 underline"
                >
                  View Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
