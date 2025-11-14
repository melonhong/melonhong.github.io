import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/**
 * 테마 타입 정의
 */
type Theme = 'light' | 'dark';

/**
 * ThemeContext의 타입 정의
 */
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

/**
 * ThemeContext 생성
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider 컴포넌트
 * 다크모드/라이트모드 상태를 관리하고 로컬 스토리지에 저장합니다.
 * 
 * @param children - 자식 컴포넌트
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // 로컬 스토리지에서 테마 설정 불러오기 (없으면 시스템 설정 사용)
  const getInitialTheme = (): Theme => {
    // 로컬 스토리지에서 테마 확인
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    // 시스템 설정 확인
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // 기본값은 라이트 모드
    return 'light';
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // 테마 변경 함수
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    updateDocumentClass(newTheme);
  };

  // 테마 토글 함수
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // HTML 문서에 다크모드 클래스 추가/제거
  const updateDocumentClass = (currentTheme: Theme) => {
    const root = document.documentElement;
    if (currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // 테마 변경 시 HTML 문서에 다크모드 클래스 적용/제거
  useEffect(() => {
    updateDocumentClass(theme);
  }, [theme]);

  // 시스템 테마 변경 감지 (선택사항)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // 로컬 스토리지에 사용자가 직접 설정한 테마가 없을 때만 시스템 설정 적용
      const storedTheme = localStorage.getItem('theme');
      if (!storedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // 최신 브라우저 지원
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // 구형 브라우저 지원
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * ThemeContext를 사용하는 커스텀 훅
 * 
 * @returns ThemeContext의 값
 * @throws Error - ThemeProvider 외부에서 사용 시 에러 발생
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

