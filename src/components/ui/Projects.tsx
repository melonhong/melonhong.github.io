import { useState } from "react";
import type { Project } from "../../types/portfolio";
import { ProjectDetailModal } from "./ProjectDetailModal";

/**
 * Projects 컴포넌트 (신규 UX)
 * 프로젝트 목록을 그리드 카드로 표시, 클릭시 상세 모달
 */
export function Projects({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-light-heading dark:text-dark-heading mr-4">
            <span className="text-light-primary dark:text-[#d8b4fe] font-mono text-xl mr-2">
              03.
            </span>{" "}
            Where I&apos;ve Built
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer group flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-light-primary/20 dark:bg-dark-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-light-primary dark:text-[#d8b4fe] mb-2 block font-bold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-light-heading dark:text-dark-heading group-hover:text-light-primary dark:group-hover:text-[#d8b4fe] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="w-5 h-5 text-gray-400 group-hover:text-light-primary dark:group-hover:text-[#d8b4fe] transition-colors">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
                <p className="text-light-text dark:text-dark-text text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-1 rounded bg-gray-100 dark:bg-black/30 text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-gray-100 dark:bg-black/30 text-gray-600 dark:text-gray-300">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 모달 */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
