import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

/**
 * Card 컴포넌트
 * 재사용 가능한 카드 컨테이너 컴포넌트입니다.
 * 
 * @param children - 카드 내용
 * @param className - 추가 클래스명
 * @param hover - 호버 효과 활성화 여부
 * @param delay - 애니메이션 딜레이 (초)
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className,
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={cn(
        'bg-white rounded-xl shadow-md overflow-hidden',
        hover && 'transition-shadow duration-300 hover:shadow-xl',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

