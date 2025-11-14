/**
 * 개발 및 데모용 목 데이터
 * 실제 프로젝트에서는 API에서 가져오거나 별도 파일로 관리하세요.
 */
import { Project, Skill } from '../types';

// 샘플 프로젝트 데이터
export const mockProjects: Project[] = [
  {
    id: '1',
    title: '포트폴리오 웹사이트',
    description: 'React와 TypeScript로 구현한 개인 포트폴리오 웹사이트입니다.',
    longDescription: '현대적인 디자인과 부드러운 애니메이션을 적용한 포트폴리오 웹사이트입니다. 반응형 디자인으로 모든 디바이스에서 최적의 경험을 제공합니다.',
    image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    featured: true,
  },
  {
    id: '2',
    title: 'E-Commerce 플랫폼',
    description: '온라인 쇼핑몰을 위한 풀스택 웹 애플리케이션입니다.',
    longDescription: '상품 관리, 장바구니, 결제 시스템 등을 포함한 완전한 이커머스 솔루션입니다.',
    image: 'https://via.placeholder.com/600x400?text=E-Commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
  },
  {
    id: '3',
    title: '날씨 앱',
    description: '실시간 날씨 정보를 제공하는 웹 애플리케이션입니다.',
    image: 'https://via.placeholder.com/600x400?text=Weather+App',
    technologies: ['React', 'TypeScript', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weatherapp.example.com',
  },
];

// 샘플 기술 스택 데이터
export const mockSkills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', category: 'frontend', level: 5 },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 4 },
  { id: '3', name: 'JavaScript', category: 'frontend', level: 5 },
  { id: '4', name: 'HTML/CSS', category: 'frontend', level: 5 },
  { id: '5', name: 'TailwindCSS', category: 'frontend', level: 4 },
  { id: '6', name: 'Vue.js', category: 'frontend', level: 3 },
  
  // Backend
  { id: '7', name: 'Node.js', category: 'backend', level: 4 },
  { id: '8', name: 'Express', category: 'backend', level: 4 },
  { id: '9', name: 'Python', category: 'backend', level: 3 },
  { id: '10', name: 'MongoDB', category: 'backend', level: 3 },
  { id: '11', name: 'PostgreSQL', category: 'backend', level: 3 },
  
  // Tools
  { id: '12', name: 'Git', category: 'tools', level: 4 },
  { id: '13', name: 'Docker', category: 'tools', level: 3 },
  { id: '14', name: 'VS Code', category: 'tools', level: 5 },
  { id: '15', name: 'Figma', category: 'tools', level: 3 },
];

