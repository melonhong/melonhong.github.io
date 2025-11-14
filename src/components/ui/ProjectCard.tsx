import { motion } from 'framer-motion';
import { Project } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';

/**
 * ProjectCard 컴포넌트
 * 프로젝트 정보를 카드 형태로 표시합니다.
 * 
 * @param project - 프로젝트 정보
 * @param index - 카드 인덱스 (애니메이션 딜레이용)
 */
interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Card delay={index * 0.1} className="h-full flex flex-col">
      {/* 프로젝트 이미지 */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* 피처드 배지 */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* 프로젝트 정보 */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>

        {/* 기술 스택 태그 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 링크 버튼 */}
        <div className="flex space-x-3 mt-auto">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

