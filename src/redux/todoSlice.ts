import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  task: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ task: string }>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        task: action.payload.task,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
