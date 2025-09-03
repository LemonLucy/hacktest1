// 할일 관리 앱 - 멀티에이전트 협업 예제
class TodoApp {
  constructor() {
    this.todos = [];
    this.init();
  }

  init() {
    this.renderTodos();
    this.bindEvents();
  }

  addTodo(text) {
    const todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(todo);
    this.renderTodos();
  }

  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.renderTodos();
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.renderTodos();
  }

  renderTodos() {
    const container = document.getElementById('todo-list');
    if (!container) return;

    container.innerHTML = this.todos.map(todo => `
      <div class="todo-item ${todo.completed ? 'completed' : ''}">
        <input type="checkbox" ${todo.completed ? 'checked' : ''} 
               onchange="app.toggleTodo(${todo.id})">
        <span>${todo.text}</span>
        <button onclick="app.deleteTodo(${todo.id})">삭제</button>
      </div>
    `).join('');
  }

  bindEvents() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    
    if (form && input) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value.trim()) {
          this.addTodo(input.value);
          input.value = '';
        }
      });
    }
  }
}

// 앱 초기화
const app = new TodoApp();
