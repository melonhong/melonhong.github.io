# 포트폴리오 웹사이트

Vite + React + TypeScript 기반의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Vite**: 빠른 개발 서버와 빌드 도구
- **React 18**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **TailwindCSS**: 유틸리티 기반 CSS 프레임워크
- **Framer Motion**: 애니메이션 라이브러리

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── types/           # 타입 정의
├── utils/           # 유틸리티 함수
├── hooks/           # 커스텀 훅
├── contexts/        # Context API
├── components/      # 컴포넌트
│   ├── common/      # 공통 컴포넌트
│   ├── layout/      # 레이아웃 컴포넌트
│   └── ui/          # UI 컴포넌트
├── pages/           # 페이지 컴포넌트
├── data/            # 데이터
├── App.tsx          # 메인 앱 컴포넌트
└── main.tsx         # 진입점
```

## 커스터마이징

포트폴리오 데이터를 수정하려면 `src/data/portfolioData.ts` 파일을 편집하세요.

## 라이선스

MIT

