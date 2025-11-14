/**
 * 프로젝트 정보를 나타내는 타입
 */
export interface Project {
  /** 프로젝트 고유 ID */
  id: string;
  /** 프로젝트 제목 */
  title: string;
  /** 프로젝트 간단한 설명 */
  description: string;
  /** 프로젝트 상세 설명 (선택사항) */
  longDescription?: string;
  /** 프로젝트 이미지 URL */
  image: string;
  /** 사용된 기술 스택 목록 */
  technologies: string[];
  /** GitHub 저장소 URL (선택사항) */
  githubUrl?: string;
  /** 라이브 데모 URL (선택사항) */
  liveUrl?: string;
  /** 추천 프로젝트 여부 */
  featured?: boolean;
}

