import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  target?: string;
}

/**
 * Button 컴포넌트
 * 재사용 가능한 버튼 컴포넌트임
 */
export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 text-white focus:ring-purple-400 dark:focus:ring-purple-300",
    secondary:
      "bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 text-purple-800 dark:text-purple-200 focus:ring-purple-300 dark:focus:ring-purple-900",
    outline:
      "border-2 border-purple-600 dark:border-purple-400 text-purple-700 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-950 focus:ring-purple-400 dark:focus:ring-purple-500",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    ),
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick}>
      {children}
    </motion.button>
  );
}
