/**
 * 유틸리티 함수 모음
 */

/**
 * 클래스명을 조건부로 합치는 헬퍼 함수
 * @param classes - 클래스명 배열 또는 객체
 * @returns 합쳐진 클래스명 문자열
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 이메일 유효성 검사
 * @param email - 검사할 이메일 주소
 * @returns 유효한 이메일인지 여부
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 스크롤을 부드럽게 이동시키는 함수
 * @param elementId - 이동할 요소의 ID
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

