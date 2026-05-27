import { useState } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addTodo,
  toggleTodo,
} from "./todosSlice";

function Todos() {

  const [text, setText] = useState("");

  const todos = useSelector(
    (state) => state.todos.list
  );

  const dispatch = useDispatch();

  function handleAddTodo() {

    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  }

  return (
    <div>

      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAddTodo}
        style={{ marginLeft: "10px" }}
      >
        Add Todo
      </button>

      <ul>

        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Todos;