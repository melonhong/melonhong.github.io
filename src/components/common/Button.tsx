import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

/**
 * Button 컴포넌트
 * 재사용 가능한 버튼 컴포넌트입니다.
 * 
 * @param variant - 버튼 스타일 변형 ('primary' | 'secondary' | 'outline')
 * @param size - 버튼 크기 ('sm' | 'md' | 'lg')
 * @param children - 버튼 내용
 * @param onClick - 클릭 이벤트 핸들러
 * @param className - 추가 클래스명
 * @param type - 버튼 타입 (기본값: 'button')
 */
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  // 버튼 스타일 클래스 결정
  const variantClasses = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
    outline:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  };

  // 버튼 크기 클래스 결정
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={cn(
        'rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        disabled && 'opacity-50 cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </motion.button>
  );
}

