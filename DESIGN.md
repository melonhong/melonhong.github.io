# 포트폴리오 웹사이트 설계 문서

## 1. 프로젝트 개요

Vite + React + TypeScript 기반의 개인 포트폴리오 웹사이트입니다.
세련된 디자인과 부드러운 애니메이션을 통해 사용자 경험을 향상시킵니다.

---

## 2. 기술 스택

- **빌드 도구**: Vite
- **프레임워크**: React 18
- **언어**: TypeScript
- **라우팅**: react-router-dom v6
- **스타일링**: TailwindCSS
- **애니메이션**: Framer Motion
- **코드 품질**: ESLint + Prettier

---

## 3. 폴더 구조

```
melonhong.github.io/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # 이미지, 아이콘 등 정적 파일
│   │   ├── images/
│   │   └── icons/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── common/          # 공통 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Loading.tsx
│   │   ├── layout/          # 레이아웃 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── ui/              # UI 특화 컴포넌트
│   │       ├── ProjectCard.tsx
│   │       ├── SkillBadge.tsx
│   │       ├── TimelineItem.tsx
│   │       └── ContactForm.tsx
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── hooks/               # 커스텀 훅
│   │   ├── useScrollAnimation.ts
│   │   └── useMediaQuery.ts
│   ├── types/               # TypeScript 타입 정의
│   │   ├── index.ts
│   │   ├── project.ts
│   │   └── skill.ts
│   ├── utils/               # 유틸리티 함수
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── App.tsx              # 메인 앱 컴포넌트
│   ├── main.tsx             # 진입점
│   └── index.css            # 전역 스타일
├── .eslintrc.cjs            # ESLint 설정
├── .prettierrc              # Prettier 설정
├── tailwind.config.js       # TailwindCSS 설정
├── tsconfig.json            # TypeScript 설정
├── vite.config.ts           # Vite 설정
├── package.json
└── README.md
```

---

## 4. 페이지 구성

### 4.1 Home 페이지 (`/`)
- **Hero 섹션**
  - 이름, 직업, 짧은 소개
  - CTA 버튼 (Projects 보기, Contact 하기)
  - 부드러운 페이드인 애니메이션
  
- **Intro 섹션**
  - 간단한 자기소개
  - 주요 기술 스택 요약
  - 스크롤 트리거 애니메이션
  
- **Skills 섹션**
  - 기술 스택을 카테고리별로 표시
  - 호버 효과 및 애니메이션
  - 프로그레스 바 또는 배지 형태

### 4.2 Projects 페이지 (`/projects`)
- **프로젝트 그리드 레이아웃**
  - 카드 형태의 프로젝트 목록
  - 각 카드: 이미지, 제목, 설명, 기술 스택, 링크
  - 호버 시 확대 및 그림자 효과
  
- **필터링 기능** (선택사항)
  - 기술 스택별 필터링

### 4.3 About 페이지 (`/about`)
- **자기소개 섹션**
  - 프로필 이미지
  - 상세한 자기소개
  - 현재 관심사
  
- **타임라인 섹션**
  - 교육 경력
  - 경력 사항
  - 주요 활동
  
- **스크롤 애니메이션 적용**

### 4.4 Contact 페이지 (`/contact`)
- **연락 폼**
  - 이름, 이메일, 제목, 메시지 필드
  - 폼 검증
  - 제출 시 애니메이션 피드백
  
- **소셜 링크**
  - GitHub, LinkedIn, Email 등
  - 아이콘 버튼 형태

---

## 5. 컴포넌트 설계

### 5.1 공통 컴포넌트 (common/)

#### Button
```typescript
Props:
- variant: 'primary' | 'secondary' | 'outline'
- size: 'sm' | 'md' | 'lg'
- children: ReactNode
- onClick?: () => void
- className?: string
```

#### Card
```typescript
Props:
- children: ReactNode
- className?: string
- hover?: boolean
```

#### Section
```typescript
Props:
- id?: string
- title?: string
- subtitle?: string
- children: ReactNode
- className?: string
```

#### Container
```typescript
Props:
- children: ReactNode
- className?: string
- maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
```

### 5.2 레이아웃 컴포넌트 (layout/)

#### Header
- 로고/이름
- 네비게이션 메뉴 (모바일 반응형)
- 스크롤 시 헤더 고정 옵션

#### Footer
- 저작권 정보
- 소셜 링크

#### Navigation
- 모바일 햄버거 메뉴
- 데스크톱 가로 메뉴
- 활성 페이지 하이라이트

### 5.3 UI 컴포넌트 (ui/)

#### ProjectCard
```typescript
Props:
- project: Project
- index?: number
```

#### SkillBadge
```typescript
Props:
- name: string
- level?: number
- icon?: string
```

#### TimelineItem
```typescript
Props:
- date: string
- title: string
- description: string
- position?: 'left' | 'right'
```

#### ContactForm
- 폼 상태 관리
- 검증 로직
- 제출 핸들러

---

## 6. 타입 정의

### Project
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
```

### Skill
```typescript
interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level?: number; // 1-5
  icon?: string;
}
```

---

## 7. 스타일 가이드

### 색상 팔레트
- Primary: 인디고/블루 계열 (#6366f1, #4f46e5)
- Secondary: 회색 계열 (#64748b, #475569)
- Background: 다크/라이트 모드 지원
- Accent: 포인트 컬러

### 타이포그래피
- Heading: 굵은 폰트
- Body: 가독성 높은 폰트
- Code: Monospace 폰트

### 간격
- TailwindCSS 기본 간격 사용
- 일관된 padding/margin 적용

---

## 8. 애니메이션 전략

### Framer Motion 사용
- **페이지 전환**: fade, slide 애니메이션
- **스크롤 애니메이션**: viewport 진입 시 fadeInUp
- **호버 효과**: scale, shadow 변화
- **로딩**: 부드러운 스켈레톤 로딩

### 성능 최적화
- `will-change` 속성 활용
- `transform`, `opacity` 위주로 애니메이션
- GPU 가속 활용

---

## 9. 반응형 디자인

### 브레이크포인트
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 주요 고려사항
- 모바일 퍼스트 접근
- 터치 친화적 UI
- 햄버거 메뉴 (모바일)
- 그리드 레이아웃 조정

---

## 10. SEO 최적화

### 메타 태그
- title, description
- Open Graph 태그
- Twitter Cards
- favicon 설정

### 구조화된 데이터
- JSON-LD 스키마 (선택사항)

---

## 11. 코드 품질

### ESLint 규칙
- React Hooks 규칙
- TypeScript 엄격 모드
- 접근성 규칙

### Prettier 설정
- 2 space indentation
- Single quotes
- Trailing comma
- Semicolon 사용

### 주석 정책
- 복잡한 로직에만 주석
- 함수/컴포넌트 JSDoc 주석
- 초보자 친화적 설명

---

## 12. 구현 단계

1. 프로젝트 초기화 및 설정
2. 기본 폴더 구조 생성
3. 공통 컴포넌트 구현
4. 레이아웃 컴포넌트 구현
5. 페이지 컴포넌트 구현 (순서: Home → Projects → About → Contact)
6. 라우팅 설정
7. 애니메이션 적용
8. 반응형 최적화
9. SEO 메타 태그 추가
10. 최종 테스트 및 문서화

---

이 설계 문서를 기반으로 단계별 구현을 진행합니다.

