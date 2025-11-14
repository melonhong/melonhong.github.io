import { motion } from 'framer-motion';

/**
 * TimelineItem 컴포넌트
 * 타임라인 항목을 표시합니다.
 * 
 * @param date - 날짜 또는 기간
 * @param title - 제목
 * @param description - 설명
 * @param position - 타임라인 위치 ('left' | 'right', 선택사항)
 * @param index - 항목 인덱스 (애니메이션 딜레이용)
 */
interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  position?: 'left' | 'right';
  index?: number;
}

export default function TimelineItem({
  date,
  title,
  description,
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-primary-300 dark:border-primary-700"
    >
      {/* 타임라인 점 */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-600 rounded-full border-2 border-white dark:border-gray-900" />

      {/* 날짜 */}
      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
        {date}
      </span>

      {/* 제목 */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
        {title}
      </h3>

      {/* 설명 */}
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

