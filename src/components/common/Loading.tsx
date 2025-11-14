/**
 * Loading 컴포넌트
 * 로딩 상태를 표시하는 스피너입니다.
 * 
 * @param size - 로딩 스피너 크기 ('sm' | 'md' | 'lg')
 * @param className - 추가 클래스명
 */
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Loading({ size = 'md', className = '' }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-primary-200 border-t-primary-600 rounded-full animate-spin`}
      />
    </div>
  );
}

