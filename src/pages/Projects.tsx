import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import ProjectCard from '../components/ui/ProjectCard';
import { mockProjects } from '../utils/mockData';

/**
 * Projects 페이지
 * 프로젝트 목록을 카드 형태로 표시합니다.
 */
export default function Projects() {
  return (
    <div className="min-h-screen">
      <Section title="프로젝트" subtitle="Projects">
        <Container>
          {/* 프로젝트 그리드 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mockProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* 프로젝트가 없을 때 */}
          {mockProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                아직 등록된 프로젝트가 없습니다.
              </p>
            </motion.div>
          )}
        </Container>
      </Section>
    </div>
  );
}

