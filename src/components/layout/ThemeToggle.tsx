import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark'
      : true
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="relative">
      <input
        id="theme-toggle"
        type="checkbox"
        className="toggle-checkbox hidden"
        checked={isDark}
        onChange={() => setIsDark(v => !v)}
        aria-label="다크모드 토글"
      />
      <label
        htmlFor="theme-toggle"
        className="toggle-label block cursor-pointer w-[50px] h-[26px] bg-purple-200 dark:bg-gray-700 rounded-full transition relative shadow-inner"
        style={{ boxShadow: 'inset 0 5px 16px rgba(0,0,0,.15)' }}
      >
        <span
          className="absolute left-[5px] top-[5px] text-yellow-400 text-sm transition-opacity duration-200"
          style={{ opacity: isDark ? 1 : 0 }}
        >
          <i className="fa-solid fa-sun"></i>
        </span>
        <span
          className="absolute right-[6px] top-[5px] text-purple-400 text-sm transition-opacity duration-200"
          style={{ opacity: isDark ? 0 : 1 }}
        >
          <i className="fa-solid fa-moon"></i>
        </span>
        <span
          className={`absolute top-[3px] left-[3px] w-[20px] h-[20px] rounded-full transition-all duration-300 shadow-md bg-gradient-to-b from-yellow-300 to-yellow-500 dark:from-gray-400 dark:to-gray-700`}
          style={
            isDark
              ? { left: '27px', background: 'linear-gradient(180deg,#777,#3a3a3a)' }
              : { left: '3px', background: 'linear-gradient(180deg,#ffebc1,#ffe18c)' }
          }
        ></span>
      </label>
    </div>
  );
}
