import { useEffect, useState } from 'react';

/**
 * 미디어 쿼리를 감지하는 커스텀 훅
 * 반응형 디자인에서 화면 크기에 따라 다른 동작을 할 때 사용합니다.
 * 
 * @param query - 미디어 쿼리 문자열 (예: '(min-width: 768px)')
 * @returns 쿼리 조건을 만족하는지 여부
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // 초기값 설정
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // 리스너 등록
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

