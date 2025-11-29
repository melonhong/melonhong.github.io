/**
 * 클래스명 병합 유틸리티 함수
 * 조건부 클래스명을 쉽게 병합할 수 있도록 함
 */

type ClassValue = string | number | boolean | undefined | null

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}

