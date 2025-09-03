const NotionMCPServer = require('./src/mcp-server');

async function testNotionConnection() {
  const server = new NotionMCPServer();
  const pageId = process.env.NOTION_PAGE_ID || '25e297c28958804abb0fde8fbb13a362';
  
  try {
    console.log('Testing Notion connection...');
    
    // 페이지 읽기 테스트
    const pageData = await server.getPage(pageId);
    console.log('✅ Page retrieved successfully!');
    console.log('Page title:', pageData.page.properties?.title?.title?.[0]?.text?.content || 'No title');
    
    // 페이지에 블록 추가 테스트
    await server.addBlockToPage(pageId, 'paragraph', `MCP 서버 테스트 - ${new Date().toLocaleString()}`);
    console.log('✅ Block added successfully!');
    
    // 페이지 검색 테스트
    const searchResults = await server.searchPages('MCP');
    console.log('✅ Search completed!');
    console.log(`Found ${searchResults.length} pages`);
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testNotionConnection();
