import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { api } from "../api/todosApi";

export default function TodoList() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("idle");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const setData = async () => {
      setStatus("loading");

      try {
        const { data } = await api.get("/todos");
        setTodos(data);
        setStatus("completed");
      } catch (e) {
        setStatus("error");
      }
    };
    setData();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const { data } = await api.delete(`/todos/${id}`);
      setTodos((todos) => todos.filter((todo) => todo.id !== data.id));
      setStatus("completed");
    } catch (e) {
      console.log("something wrong");
    }
  };

  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={async () => {
            const { data } = await api.post("/todos", { name: value });
            setTodos([...todos, data]);
            setValue("");
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {status === "loading" && <div>now loading...</div>}
        {status === "error" && <div>has error...</div>}
        {status === "completed" && todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
      </ul>
    </div>
  );
}
