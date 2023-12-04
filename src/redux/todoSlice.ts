import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  task: string;
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'), // Mengambil dari localStorage saat inisialisasi
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ task: string }>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        task: action.payload.task,
        createdAt: new Date().toLocaleString(),
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
