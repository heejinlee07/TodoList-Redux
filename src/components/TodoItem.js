import React from "react";

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <div>
      <li>
        {todo.name}
        <span onClick={() => deleteTodo(todo.id)}>X</span>
      </li>
    </div>
  );
}
