const { Client } = require('@notionhq/client');
require('dotenv').config();

class NotionMCPServer {
  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_API_TOKEN,
    });
  }

  // 페이지 내용 읽기
  async getPage(pageId) {
    try {
      const page = await this.notion.pages.retrieve({ page_id: pageId });
      const blocks = await this.notion.blocks.children.list({ block_id: pageId });
      
      return {
        page: page,
        content: blocks.results
      };
    } catch (error) {
      console.error('Error getting page:', error);
      throw error;
    }
  }

  // 새 페이지 생성 (부모 페이지 하위에)
  async createPage(parentPageId, title, content) {
    try {
      const response = await this.notion.pages.create({
        parent: {
          page_id: parentPageId,
        },
        properties: {
          title: {
            title: [
              {
                text: {
                  content: title,
                },
              },
            ],
          },
        },
        children: [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: content,
                  },
                },
              ],
            },
          },
        ],
      });
      return response;
    } catch (error) {
      console.error('Error creating page:', error);
      throw error;
    }
  }

  // 페이지 검색
  async searchPages(query) {
    try {
      const response = await this.notion.search({
        query: query,
        filter: {
          property: 'object',
          value: 'page'
        }
      });
      return response.results;
    } catch (error) {
      console.error('Error searching pages:', error);
      throw error;
    }
  }

  // 페이지에 블록 추가
  async addBlockToPage(pageId, blockType, content) {
    try {
      const response = await this.notion.blocks.children.append({
        block_id: pageId,
        children: [
          {
            object: 'block',
            type: blockType,
            [blockType]: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: content,
                  },
                },
              ],
            },
          },
        ],
      });
      return response;
    } catch (error) {
      console.error('Error adding block:', error);
      throw error;
    }
  }
}

module.exports = NotionMCPServer;
