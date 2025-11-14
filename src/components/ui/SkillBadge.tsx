import { motion } from 'framer-motion';
import { Skill } from '../../types';

/**
 * SkillBadge 컴포넌트
 * 기술 스택을 배지 형태로 표시합니다.
 * 
 * @param skill - 기술 스택 정보
 * @param index - 배지 인덱스 (애니메이션 딜레이용)
 */
interface SkillBadgeProps {
  skill: Skill;
  index?: number;
}

export default function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  // 카테고리별 색상 클래스
  const categoryColors = {
    frontend: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    backend: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    tools: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    other: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`
        px-4 py-2 rounded-lg font-medium text-sm shadow-md
        ${categoryColors[skill.category]}
        transition-all duration-200 cursor-default
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <span>{skill.name}</span>
        {/* 숙련도 레벨 표시 (선택사항) */}
        {skill.level && (
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < skill.level!
                    ? 'bg-current opacity-100'
                    : 'bg-current opacity-20'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

