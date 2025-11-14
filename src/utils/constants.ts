/**
 * 프로젝트 전역 상수 정의
 */

// 네비게이션 메뉴 항목
export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const;

// 소셜 링크 정보
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  email: 'mailto:your.email@example.com',
} as const;

// 애니메이션 설정
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

// 스크롤 애니메이션 설정
export const SCROLL_ANIMATION = {
  once: true, // 애니메이션을 한 번만 실행
  margin: '-100px', // 뷰포트에서 얼마나 일찍 트리거할지
} as const;

