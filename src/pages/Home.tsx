import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SkillBadge from '../components/ui/SkillBadge';
import { mockSkills } from '../utils/mockData';

/**
 * Home 페이지
 * 메인 홈 페이지입니다.
 * Hero, Intro, Skills 섹션을 포함합니다.
 */
export default function Home() {
  // 기술 스택을 카테고리별로 분류
  const skillsByCategory = {
    frontend: mockSkills.filter((skill) => skill.category === 'frontend'),
    backend: mockSkills.filter((skill) => skill.category === 'backend'),
    tools: mockSkills.filter((skill) => skill.category === 'tools'),
  };

  return (
    <div className="min-h-screen">
      {/* Hero 섹션 */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20 md:py-32"
          >
            {/* 이름 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            >
              안녕하세요!
            </motion.h1>

            {/* 직업 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-4xl text-primary-600 dark:text-primary-400 font-semibold mb-6"
            >
              프론트엔드 개발자
            </motion.p>

            {/* 짧은 소개 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            >
              사용자 경험을 중시하며, 현대적인 웹 기술로 의미 있는 서비스를
              만드는 개발자입니다.
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  프로젝트 보기
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  연락하기
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Intro 섹션 */}
      <Section id="intro" title="소개" subtitle="About Me">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              안녕하세요! 저는 프론트엔드 개발을 사랑하는 개발자입니다.
              사용자에게 최고의 경험을 제공하는 것을 목표로 하며, 지속적으로
              학습하고 성장하고 있습니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              React, TypeScript, 그리고 다양한 현대적인 웹 기술을 활용하여
              깔끔하고 효율적인 코드를 작성하는 것을 즐깁니다. 또한 협업을
              통해 더 나은 솔루션을 만들어가는 것을 중요하게 생각합니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              현재는 새로운 기술 스택을 배우고, 오픈소스 프로젝트에 기여하며,
              개인 프로젝트를 통해 실력을 향상시키고 있습니다.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Skills 섹션 */}
      <Section
        id="skills"
        title="기술 스택"
        subtitle="Skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <Container>
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillsByCategory.frontend.map((skill, index) => (
                <SkillBadge key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillsByCategory.backend.map((skill, index) => (
                <SkillBadge
                  key={skill.id}
                  skill={skill}
                  index={skillsByCategory.frontend.length + index}
                />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillsByCategory.tools.map((skill, index) => (
                <SkillBadge
                  key={skill.id}
                  skill={skill}
                  index={
                    skillsByCategory.frontend.length +
                    skillsByCategory.backend.length +
                    index
                  }
                />
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}

