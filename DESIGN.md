# DESIGN.md

포트폴리오 웹사이트 설계 문서

## 프로젝트 개요

Vite + React + TypeScript 기반의 개인 포트폴리오 웹사이트

## 주요 기능

1. **Hero 섹션**: 이름, 직업, 간단한 소개
2. **About 섹션**: 자기소개 및 경력
3. **Skills 섹션**: 기술 스택 표시
4. **Projects 섹션**: 프로젝트 목록 및 상세 정보
5. **Contact 섹션**: 연락처 정보
6. **다크모드**: 테마 전환 기능

## 폴더 구조

```
src/
├── types/           # 타입 정의
│   ├── portfolio.ts
│   └── theme.ts
├── utils/           # 유틸리티 함수
│   └── cn.ts
├── hooks/           # 커스텀 훅
│   └── useTheme.ts
├── components/
│   ├── common/      # 공통 컴포넌트
│   │   └── Button.tsx
│   ├── layout/      # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/          # UI 컴포넌트
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── pages/
│   └── Home.tsx
├── contexts/
│   └── ThemeContext.tsx
├── App.tsx
└── main.tsx
```

## 디자인 컨셉

- **모던하고 미니멀한 디자인**
- **반응형 레이아웃** (모바일, 태블릿, 데스크톱)
- **부드러운 스크롤 애니메이션** (Framer Motion)
- **다크모드 지원**
- **접근성 고려** (시맨틱 HTML, ARIA 레이블)

## 기술 스택

- **빌드 도구**: Vite
- **프레임워크**: React 18
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **애니메이션**: Framer Motion
- **상태 관리**: Context API + LocalStorage

## 페이지 구조

```
Home
├── Header (네비게이션, 다크모드 토글)
├── Hero (메인 섹션)
├── About (소개)
├── Skills (기술 스택)
├── Projects (프로젝트)
├── Contact (연락처)
└── Footer (저작권 정보)
```

## 데이터 구조

### Portfolio 데이터

- 이름, 직업, 소개
- 기술 스택 목록
- 프로젝트 목록 (제목, 설명, 기술, 링크)
- 연락처 정보

### Theme 상태

- 다크모드 on/off
- 로컬 스토리지에 저장

## 애니메이션 계획

- Hero 섹션: 페이드인 + 슬라이드업
- 섹션 전환: 스크롤 시 페이드인
- 버튼 호버: 스케일 효과
- 프로젝트 카드: 호버 시 그림자 강화
