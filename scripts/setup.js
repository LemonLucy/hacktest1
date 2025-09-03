#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Q Developer 해커톤 프로젝트 설정 시작...\n');

// MCP 설정 파일 복사
const mcpConfigSource = path.join(__dirname, '../config/mcp.json');
const mcpConfigTarget = path.join(process.env.HOME, '.aws/mcp.json');

try {
  // .aws 디렉토리 생성
  const awsDir = path.dirname(mcpConfigTarget);
  if (!fs.existsSync(awsDir)) {
    fs.mkdirSync(awsDir, { recursive: true });
    console.log('✅ .aws 디렉토리 생성됨');
  }

  // MCP 설정 복사
  if (fs.existsSync(mcpConfigSource)) {
    const config = fs.readFileSync(mcpConfigSource, 'utf8');
    fs.writeFileSync(mcpConfigTarget, config);
    console.log('✅ MCP 설정 파일 복사됨');
  }

  // 에이전트 설정 디렉토리 생성
  const agentDir = path.join(process.env.HOME, '.aws/amazonq/cli-agents');
  if (!fs.existsSync(agentDir)) {
    fs.mkdirSync(agentDir, { recursive: true });
    console.log('✅ 에이전트 설정 디렉토리 생성됨');
  }

  // 규칙 디렉토리 생성
  const rulesDir = path.join(process.env.HOME, '.aws/amazonq/rules');
  if (!fs.existsSync(rulesDir)) {
    fs.mkdirSync(rulesDir, { recursive: true });
    console.log('✅ 규칙 디렉토리 생성됨');
  }

  console.log('\n🎉 설정 완료!');
  console.log('\n다음 단계:');
  console.log('1. Notion API 토큰 생성: https://www.notion.so/profile/integrations');
  console.log('2. 설정 파일에서 {NOTION_API_TOKEN} 교체');
  console.log('3. npm run dev 실행하여 개발 서버 시작');

} catch (error) {
  console.error('❌ 설정 중 오류 발생:', error.message);
  process.exit(1);
}
