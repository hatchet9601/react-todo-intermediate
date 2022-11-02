import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TODO {
  id: string | number;
  uid: string;
  title: string;
  date: any;
  detail: string;
  status: string;
}

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: Array(),
  },

  reducers: {
    addTodos: (state, action) => {
      state.todos = action.payload;
    },
    updateTodos: (state, action: PayloadAction<TODO>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    changeTitle: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
      state.todos = newTodos;
    },
    changeDate: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.date = action.payload.date;
        }
        return todo;
      });
      state.todos = newTodos;
    },
    changeDetail: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.detail = action.payload.detail;
        }
        return todo;
      });
      state.todos = newTodos;
    },
    changeStatus: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = action.payload.status;
        }
        return todo;
      });
      state.todos = newTodos;
    },
  },
});

export const {
  addTodos,
  updateTodos,
  deleteTodos,
  changeTitle,
  changeDate,
  changeDetail,
  changeStatus,
} = todosSlice.actions;

export const Todos = (state: RootState) => state.todo.todos;
export const TodosMaxIndex = (state: RootState) =>
  state.todo.todos.length > 0 ? state.todo.todos.length : 0;

export default todosSlice.reducer;
