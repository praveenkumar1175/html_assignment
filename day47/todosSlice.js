import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",

  initialState: {
    list: [],
  },

  reducers: {

    addTodo: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggleTodo: (state, action) => {

      const todo = state.list.find(
        (item) => item.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;