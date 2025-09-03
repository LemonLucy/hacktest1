# 멀티에이전트 사용 가이드

## 에이전트별 역할 및 사용법

### 1. 기획자 에이전트
```bash
# 요구사항 분석
q chat --agent product-manager "사용자 스토리를 작성해줘"

# 기능 명세서 조회
q chat --agent product-manager "Notion에서 기능 명세서 확인해줘"
```

### 2. 풀스택 개발자 에이전트  
```bash
# 코딩 컨벤션 확인
q chat --agent fullstack-developer "JavaScript 코딩 컨벤션 알려줘"

# 코드 리뷰 요청
q chat --agent fullstack-developer "이 코드 리뷰해줘: [코드]"
```

### 3. 클라우드 엔지니어 에이전트
```bash
# AWS 인프라 설계
q chat --agent cloud-engineer "이 앱을 위한 AWS 아키텍처 설계해줘"

# CI/CD 파이프라인 구축
q chat --agent cloud-engineer "GitHub Actions 워크플로우 만들어줘"
```

### 4. QA 엔지니어 에이전트
```bash
# 테스트 케이스 작성
q chat --agent qa-engineer "로그인 기능 테스트 케이스 작성해줘"

# 버그 리포트 작성
q chat --agent qa-engineer "이 버그를 Notion에 리포트해줘"
```

## 협업 워크플로우

1. **기획자**: 요구사항 분석 → Notion에 문서화
2. **풀스택 개발자**: 컨벤션 확인 → 코드 개발
3. **클라우드 엔지니어**: 인프라 구축 → 배포 환경 설정
4. **QA 엔지니어**: 테스트 수행 → 품질 검증

## Notion 연동 활용

- 코딩 컨벤션 실시간 참조
- 프로젝트 문서 자동 업데이트
- 팀 회의록 및 결정사항 기록
- 버그 트래킹 및 이슈 관리
