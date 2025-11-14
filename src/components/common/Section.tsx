import { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

/**
 * Section 컴포넌트
 * 페이지의 섹션을 감싸는 컨테이너입니다.
 * 
 * @param id - 섹션 ID (액션으로 이동할 때 사용)
 * @param title - 섹션 제목
 * @param subtitle - 섹션 부제목
 * @param children - 섹션 내용
 * @param className - 추가 클래스명
 */
interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4">
        {/* 제목 영역 */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* 섹션 내용 */}
        {children}
      </div>
    </section>
  );
}

