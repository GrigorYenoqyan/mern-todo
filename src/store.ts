import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  todos: [],
  setTodos: (todos) => set((store) => ({ todos })),
  addTodo: (todo) =>
    set((store) => ({
      todos: [...store.todos, todo],
    })),
  updateTodo: (updatedTodo) =>
    set((store) => ({
      todos: store.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    })),

  deleteTodo: (id) =>
    set((store) => ({
      todos: store.todos.filter((todo) => todo.id !== id),
    })),
});

const useStore = create(devtools(store));

export default useStore;
