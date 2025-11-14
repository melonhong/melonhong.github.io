import { useEffect, useRef, useState } from 'react';

/**
 * 요소가 뷰포트에 들어왔는지 감지하는 커스텀 훅
 * 스크롤 애니메이션에 활용됩니다.
 * 
 * @param threshold - 요소가 얼마나 보여야 트리거될지 (0-1)
 * @param rootMargin - 뷰포트 마진 설정
 * @returns ref와 isVisible 상태
 */
export function useScrollAnimation(
  threshold: number = 0.1,
  rootMargin: string = '0px'
) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번만 실행하려면 observer를 disconnect할 수 있습니다
          // observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

