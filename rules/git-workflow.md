# Git 워크플로우 규칙

## 브랜치 전략
- `main`: 프로덕션 브랜치
- `develop`: 개발 통합 브랜치  
- `feature/*`: 기능 개발 브랜치
- `hotfix/*`: 긴급 수정 브랜치

## 커밋 메시지 컨벤션
```
type(scope): subject

body

footer
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드
- `chore`: 빌드/설정 변경

### 예시
```
feat(auth): 사용자 로그인 기능 추가

- JWT 토큰 기반 인증 구현
- 로그인 API 엔드포인트 추가
- 프론트엔드 로그인 폼 구현

Closes #123
```

## PR 규칙
1. 기능 완료 후 `develop` 브랜치로 PR 생성
2. 최소 1명 이상의 코드 리뷰 필수
3. CI/CD 파이프라인 통과 후 머지
4. Notion 컨벤션 준수 여부 확인
