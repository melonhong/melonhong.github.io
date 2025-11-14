# AGENTS.md

이 문서는 AI Agent가 따라야 할 관행들을 작성한 문서입니다.

## 프로젝트 개요

Vite + React + TypeScript 기반의 개인 포트폴리오 웹사이트 프로젝트입니다.

---

## 작업 접근 방식

### 설계 우선 원칙

- 작업 전 `DESIGN.md` 작성
- 폴더 구조 명확히 정의
- 타입 정의 먼저 작성

### 단계별 진행

- TODO 리스트 작성
- 순차적으로 처리
- 진행 상황 추적

### 파일 생성 순서

1. 타입 정의 (`types/`)
2. 유틸리티 함수 (`utils/`)
3. 커스텀 훅 (`hooks/`)
4. 공통 컴포넌트 (`components/common/`)
5. 레이아웃 컴포넌트 (`components/layout/`)
6. UI 컴포넌트 (`components/ui/`)
7. 페이지 컴포넌트 (`pages/`)
8. 메인 앱 파일 (`App.tsx`, `main.tsx`)

---

## 주석 스타일 가이드

### 기본 원칙

1. **음슴체 사용**: "입니다" → "임", "합니다" → "함", "됩니다" → "됨"
2. **마침표 제거**: 주석 끝에 마침표 사용하지 않음
3. **간결하고 명확하게**: 핵심 내용만 포함

### JSDoc 형식

```typescript
/**
 * 컴포넌트 이름
 * 컴포넌트에 대한 간단한 설명
 *
 * @param prop1 - prop1 설명
 * @param prop2 - prop2 설명
 */
```

### 좋은 예 / 나쁜 예

```typescript
// 좋은 예
/**
 * Button 컴포넌트
 * 재사용 가능한 버튼 컴포넌트임
 */

// 나쁜 예
/**
 * Button 컴포넌트입니다.
 * 재사용 가능한 버튼 컴포넌트입니다.
 */
```

---

## 코딩 스타일

### 네이밍 컨벤션

- **컴포넌트**: PascalCase (파일명과 일치)
- **함수/변수**: camelCase (동사로 시작)
- **상수**: UPPER_SNAKE_CASE
- **타입/인터페이스**: PascalCase (Interface는 Props 접미사)

### import 순서

1. React 관련
2. 라이브러리
3. 타입 (`types/`)
4. 유틸리티 (`utils/`)
5. 훅 (`hooks/`)
6. 컴포넌트 (`components/`)
7. 상대 경로

### 컴포넌트 내부 순서

1. Props 정의
2. Hooks (useState, useEffect 등)
3. 변수/상수
4. 함수
5. return

### 타입 정의

- **명시적 타입 지정**: `const count: number = 0`
- **interface vs type**: 객체 구조는 interface, 유니온 타입은 type

---

## 파일 구조 가이드

- **`types/`**: TypeScript 타입 정의만 (도메인별 파일 분리)
- **`utils/`**: 순수 함수만 (사이드 이펙트 없음)
- **`hooks/`**: 커스텀 훅 (`use`로 시작)
- **`components/common/`**: 기본 재사용 컴포넌트
- **`components/layout/`**: 레이아웃 컴포넌트 (Header, Footer)
- **`components/ui/`**: UI 특화 컴포넌트
- **`pages/`**: 페이지 컴포넌트

---

## 상태 관리

- **로컬 상태**: `useState` 사용
- **전역 상태**: Context API + 로컬 스토리지
- **Context 패턴**: Provider와 커스텀 훅으로 분리

---

## 스타일링 가이드

### TailwindCSS

**클래스명 순서**: 레이아웃 → 위치 → 크기 → 색상 → 효과 → 상태

**조건부 클래스**: `cn()` 유틸리티 함수 사용

**다크모드**: 모든 색상에 `dark:` 변형 제공

---

## 애니메이션 가이드

### Framer Motion

- **기본 패턴**: `initial`, `animate`, `transition`
- **스크롤 애니메이션**: `whileInView`, `viewport`
- **호버 효과**: `whileHover`, `whileTap`

---

## 에러 처리

- **Optional Chaining**: `data?.property?.subProperty`
- **타입 가드**: `typeof` 사용
- **에러 경계**: 명확한 에러 메시지
- **폼 검증**: 실시간 피드백 제공

---

## 성능 최적화

- **메모이제이션**: `useMemo`, `useCallback`
- **코드 스플리팅**: 라우트별, 동적 import
- **이미지 최적화**: 리사이징, lazy loading, WebP

---

## 접근성 (A11y)

- **시맨틱 HTML**: 적절한 태그 사용
- **ARIA 레이블**: `aria-label`, `aria-expanded` 등
- **키보드 네비게이션**: 모든 인터랙티브 요소 접근 가능

---

## 작업 체크리스트

- [ ] 설계 문서 작성/확인
- [ ] TODO 리스트 작성
- [ ] 타입 정의 먼저 작성
- [ ] 주석 음슴체 작성
- [ ] 마침표 제거 확인
- [ ] 타입 안정성 확인
- [ ] 반응형 디자인 고려
- [ ] 접근성 고려
- [ ] 에러 처리 확인
- [ ] 린터 실행

---

## 주의사항

1. **주석에 마침표 사용 금지**
2. **음슴체 일관되게 사용**
3. **설계 없이 코드 작성 금지**
4. **타입 정의 없이 컴포넌트 작성 금지**
5. **재사용 가능성 항상 고려**
6. **사용자 경험 우선**

---

## 참고 문서

- `DESIGN.md`: 프로젝트 설계 문서
- `CUSTOMIZATION.md`: 커스터마이징 가이드
- `README.md`: 프로젝트 README

---

_이 문서는 AI Agent가 따라야 할 작업 관행과 스타일 가이드를 정리한 문서입니다._
