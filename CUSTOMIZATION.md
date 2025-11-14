# 커스터마이징 가이드

이 문서는 포트폴리오 웹사이트를 커스터마이징하는 방법을 설명합니다.

## 1. 개인 정보 수정

### 이름 및 소개
- `src/pages/Home.tsx` - Hero 섹션의 이름, 직업, 소개 텍스트
- `src/pages/About.tsx` - 상세 자기소개 및 관심사

### 프로필 이미지
- `src/pages/About.tsx` - 프로필 이미지 경로를 수정하세요
- 이미지는 `src/assets/images/` 폴더에 저장하세요

## 2. 프로젝트 데이터 수정

`src/utils/mockData.ts` 파일을 열어서 프로젝트 데이터를 수정하세요:

```typescript
export const mockProjects: Project[] = [
  {
    id: '1',
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    image: '/path/to/image.jpg', // 이미지 경로
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://live-demo.com',
    featured: true, // 추천 프로젝트로 표시
  },
  // ... 더 많은 프로젝트
];
```

## 3. 기술 스택 수정

`src/utils/mockData.ts` 파일에서 기술 스택 데이터를 수정하세요:

```typescript
export const mockSkills: Skill[] = [
  {
    id: '1',
    name: 'React',
    category: 'frontend', // 'frontend' | 'backend' | 'tools' | 'other'
    level: 5, // 1-5 (선택사항)
  },
  // ... 더 많은 기술 스택
];
```

## 4. 소셜 링크 수정

`src/utils/constants.ts` 파일에서 소셜 링크를 수정하세요:

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  email: 'mailto:your.email@example.com',
} as const;
```

## 5. 색상 테마 수정

`tailwind.config.js` 파일에서 색상 팔레트를 수정하세요:

```javascript
colors: {
  primary: {
    50: '#eef2ff',
    // ... 색상 커스터마이징
    900: '#312e81',
  },
},
```

## 6. SEO 메타 태그 수정

`index.html` 파일을 열어서 메타 태그를 수정하세요:

```html
<title>Portfolio | Your Name</title>
<meta name="description" content="개인 포트폴리오 웹사이트 - 개발자 포트폴리오" />
<meta name="keywords" content="포트폴리오, 개발자, 웹 개발, React, TypeScript" />
<meta name="author" content="Your Name" />
```

## 7. 타임라인 데이터 수정

`src/pages/About.tsx` 파일에서 타임라인 데이터를 수정하세요:

```typescript
const timelineData = [
  {
    date: '2023 - 현재',
    title: '직업/학력',
    description: '설명',
  },
  // ... 더 많은 타임라인 항목
];
```

## 8. 연락 폼 기능 추가

현재 연락 폼은 시뮬레이션만 합니다. 실제 이메일 전송 기능을 추가하려면:

1. 백엔드 API 엔드포인트 생성
2. `src/components/ui/ContactForm.tsx`의 `handleSubmit` 함수 수정

예시:
```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    // 성공 처리
  } catch (error) {
    // 에러 처리
  }
};
```

## 9. 이미지 추가 방법

1. `src/assets/images/` 폴더에 이미지 저장
2. 프로젝트 데이터에서 이미지 경로 지정:
   ```typescript
   image: '/src/assets/images/project-image.jpg'
   ```
   또는
   ```typescript
   import projectImage from '@/assets/images/project-image.jpg';
   // ...
   image: projectImage
   ```

## 10. 폰트 변경

`index.html`의 Google Fonts 링크를 수정하거나, `tailwind.config.js`에서 폰트 패밀리를 변경하세요.

## 추가 커스터마이징

더 많은 커스터마이징이 필요하면:
- 컴포넌트 스타일: 각 컴포넌트 파일의 className 수정
- 애니메이션: Framer Motion 설정 수정
- 레이아웃: `src/components/layout/` 폴더의 컴포넌트 수정

