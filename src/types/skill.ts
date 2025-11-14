/**
 * 기술 스택 카테고리
 */
export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other';

/**
 * 기술 스택 정보를 나타내는 타입
 */
export interface Skill {
  /** 기술 스택 고유 ID */
  id: string;
  /** 기술 스택 이름 */
  name: string;
  /** 기술 스택 카테고리 */
  category: SkillCategory;
  /** 숙련도 레벨 (1-5, 선택사항) */
  level?: number;
  /** 아이콘 URL 또는 클래스명 (선택사항) */
  icon?: string;
}

