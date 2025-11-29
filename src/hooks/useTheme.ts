import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import type { ThemeContextType } from '../types/theme'

/**
 * useTheme 훅
 * 테마 컨텍스트를 사용하기 위한 커스텀 훅
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  
  return context
}

