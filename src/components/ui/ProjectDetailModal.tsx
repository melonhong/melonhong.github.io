import type { Project } from "../../types/portfolio";
import { Button } from "../common/Button";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}
/**
 * ProjectDetailModal 컴포넌트 (카드 클릭→모달)
 */
export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-dark-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative animate-fadeIn">
        <button className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-900 dark:hover:text-gray-100" onClick={onClose} aria-label="닫기">
          ×
        </button>
        <div className="relative h-64 w-full mb-4">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
        </div>
        <span className="text-light-primary dark:text-[#d8b4fe] font-mono text-sm mb-2 font-bold">{project.category}</span>
        <h2 className="text-3xl font-bold mb-2 text-light-heading dark:text-[#d8b4fe]">{project.title}</h2>
        <div className="mb-6 mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-[#d8b4fe]/20 text-purple-800 dark:text-[#d8b4fe] text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="prose dark:prose-invert max-w-none text-light-text dark:text-dark-text leading-relaxed whitespace-pre-wrap mb-8">
          {project.fullDescription}
        </div>
        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.githubUrl && (
            <Button href={project.githubUrl} target="_blank" variant="outline" size="sm" className="dark:text-[#d8b4fe] border-light-primary dark:border-[#d8b4fe]">GitHub</Button>
          )}
          {project.demoUrl && (
            <Button href={project.demoUrl} target="_blank" size="sm" className="dark:text-[#d8b4fe] border-light-primary dark:border-[#d8b4fe]">Demo</Button>
          )}
        </div>
      </div>
    </div>
  );
}
