# Notion MCP 사용 규칙

## 허용된 Notion 페이지 ID
- 코딩 컨벤션 페이지: `{CODING_CONVENTION_PAGE_ID}`
- 프로젝트 문서 페이지: `{PROJECT_DOCS_PAGE_ID}`
- 팀 회의록 페이지: `{MEETING_NOTES_PAGE_ID}`

## MCP 사용 규칙
1. **ID 검증**: MCP 호출 시 대상 ID가 허용 집합에 포함되는지 항상 검증
2. **읽기 우선**: 쓰기 작업 전 1회 읽기 조회로 권한/대상 일치 확인
3. **접근 제한**: 외부/비허용 리소스 요청 시 정중히 거부하고 허용 범위 안내
4. **에러 처리**: 403/404 에러 시 재시도 금지, 허용 범위 재안내
5. **인증 방식**: 브라우저 OAuth 금지, API 토큰 + MCP만 사용

## 코딩 컨벤션 참조 방법
```bash
# Notion 페이지에서 컨벤션 조회
q chat --agent fullstack-developer "코딩 컨벤션 확인해줘"

# 특정 언어 컨벤션 조회  
q chat --agent fullstack-developer "JavaScript 네이밍 컨벤션 알려줘"
```
