import { makeAutoObservable } from "mobx";

interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

class Todo {
  todos: ITodo[] = [
    { id: 1, title: "Go to shop", complete: false },
    { id: 2, title: "Watch news", complete: false },
    { id: 3, title: "Like a post", complete: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log("remove");
  }
  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    console.log("complete");
  }
  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => (this.todos = [...this.todos, ...json]));
  }
}

export default new Todo();
