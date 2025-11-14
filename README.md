# 포트폴리오 웹사이트

Vite + React + TypeScript 기반의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **빌드 도구**: Vite
- **프레임워크**: React 18
- **언어**: TypeScript
- **라우팅**: react-router-dom v6
- **스타일링**: TailwindCSS
- **애니메이션**: Framer Motion
- **코드 품질**: ESLint + Prettier

## 기능

- 🏠 **Home**: Hero 섹션, 소개, 기술 스택
- 📁 **Projects**: 프로젝트 목록 (카드 UI)
- 👤 **About**: 자기소개 및 타임라인
- 📧 **Contact**: 연락 폼 및 소셜 링크
- 🎨 **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- ✨ **애니메이션**: 부드러운 스크롤 애니메이션
- 🔍 **SEO 최적화**: 메타 태그 설정

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버는 `http://localhost:5173`에서 실행됩니다.

### 빌드

```bash
npm run build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

### 프리뷰

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── assets/          # 이미지, 아이콘 등
├── components/      # 재사용 가능한 컴포넌트
│   ├── common/      # 공통 컴포넌트
│   ├── layout/      # 레이아웃 컴포넌트
│   └── ui/          # UI 특화 컴포넌트
├── pages/           # 페이지 컴포넌트
├── hooks/           # 커스텀 훅
├── types/           # TypeScript 타입 정의
├── utils/           # 유틸리티 함수
├── App.tsx          # 메인 앱 컴포넌트
└── main.tsx         # 진입점
```

## 커스터마이징

### 프로젝트 데이터 수정

`src/utils/mockData.ts` 파일에서 프로젝트 및 기술 스택 데이터를 수정할 수 있습니다.

### 소셜 링크 수정

`src/utils/constants.ts` 파일에서 소셜 링크 URL을 수정할 수 있습니다.

### 색상 테마 수정

`tailwind.config.js` 파일에서 색상 팔레트를 수정할 수 있습니다.

### SEO 메타 태그 수정

`index.html` 파일에서 메타 태그를 수정할 수 있습니다.

## 코드 품질

### 린트

```bash
npm run lint
```

### 포맷팅

```bash
npm run format
```

## 라이센스

MIT License

