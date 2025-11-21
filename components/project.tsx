// components/ProjectDialog.tsx
import Image from "next/image";

interface ProjectDialogProps {
  project: {
    title: string;
    img: string;
    subtitle: string;
    description: string;
    tags: string[];
    link: string;
    date?: string;
    techstack?: string[];
  } , 
  close : () => void;
}

export default function ProjectDialog({ project , close }: ProjectDialogProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-lg z-50">
      <div className="bg-white text-black rounded-2xl shadow-2xl max-w-3xl w-[90%] p-6">
        <button
            className="absolute top-4 right-4 text-gray-400 hover:text-black text-4xl cursor-pointer font-bold"
            aria-label="Close"
            onClick={() => {
                close();
            }}
            >
            ×
            </button>
        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {project.date}
          </p>
        </div>
        <p className="text-gray-9800 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-black text-white border border-gray-700 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-300">
          <div className="flex gap-3">
            {project.techstack?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-gray-800 border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-lg"
            >
              View Project ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
