const { Client } = require('@notionhq/client');
require('dotenv').config();

class NotionMCPServer {
  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_API_TOKEN,
    });
  }

  async createPage(title, content) {
    try {
      const response = await this.notion.pages.create({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID,
        },
        properties: {
          Name: {
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
}

module.exports = NotionMCPServer;
