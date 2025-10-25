import { useOSStore } from '../store/useOSStore';

export default function ProjectsWindow() {
  const { openWindow } = useOSStore();

  const projects = [
    { id: 'cue', title: 'Cue', description: 'Real-time collaborative editing platform', language: 'Go', link: 'https://github.com/taahirah/cue' },
    { id: 'fern', title: 'Fern', description: 'Data visualization library', language: 'TypeScript', link: 'https://github.com/taahirah/fern' },
    { id: 'villacard', title: 'VillaCard', description: 'AI-powered villa booking concierge', language: 'JavaScript', link: 'https://github.com/taahirah/villacard' },
    { id: 'cortex', title: 'Cortex', description: 'AI-powered code analysis tool', language: 'Python', link: 'https://github.com/taahirah/cortex' },
    { id: 'slowread', title: 'SlowRead', description: 'Intentional reading app (Blinkist-style)', language: 'React', link: 'https://github.com/taahirah/slowread' },
    { id: 'pixelfin', title: 'PixelFin', description: 'Pixel-art finance tracker', language: 'WebGL', link: 'https://github.com/taahirah/pixelfin' },
    { id: 'quantum', title: 'Quantum', description: 'Quantum simulation framework', language: 'Python', link: 'https://github.com/taahirah/quantum' },
    { id: 'notchpod', title: 'NotchPod', description: 'Retro cassette-style podcast player', language: 'Node.js', link: 'https://github.com/taahirah/notchpod' },
    { id: 'ada', title: 'Ada', description: 'Machine learning optimizer', language: 'Python', link: 'https://github.com/taahirah/ada' },
  ];

  const openProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) openWindow(projectId, project.title);
  };

  const openRepo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5] h-full overflow-auto"
      style={{ fontFamily: 'Chicago, sans-serif' }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">Projects Folder</h2>
        <p className="text-[9px] text-center">
          Double-click a project to open its window or view details below.
        </p>
      </div>

      {/* Folder grid */}
      <div className="grid grid-cols-3 gap-3 p-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="text-center cursor-pointer"
            onDoubleClick={() => openProject(project.id)}
          >
            <div className="w-14 h-14 mx-auto border border-black bg-white flex items-center justify-center mb-1">
              <span className="text-[10px] font-bold">[*]</span>
            </div>
            <p className="text-[9px] font-mono truncate">{project.title}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-black mt-4 pt-2">
        <h3 className="font-bold mb-1 text-[11px]">Project Details</h3>
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project.id} className="border border-black bg-white p-2 text-[9px]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-[10px]">{project.title}</div>
                  <div>{project.description}</div>
                  <div className="mt-1 border border-black px-1 inline-block bg-white">
                    {project.language}
                  </div>
                </div>
                <button
                  onClick={() => openRepo(project.link)}
                  className="text-[9px] underline cursor-pointer hover:bg-black hover:text-white"
                >
                  View Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black mt-3 pt-1 text-center text-[9px]">
        <p>End of Projects Folder</p>
      </div>
    </div>
  );
}
