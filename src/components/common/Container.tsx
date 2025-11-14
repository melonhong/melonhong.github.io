import { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

/**
 * Container 컴포넌트
 * 콘텐츠를 중앙 정렬하고 최대 너비를 제한하는 컨테이너입니다.
 * 
 * @param children - 컨테이너 내용
 * @param className - 추가 클래스명
 * @param maxWidth - 최대 너비 ('sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full')
 */
interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export default function Container({
  children,
  className,
  maxWidth = 'xl',
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
}

