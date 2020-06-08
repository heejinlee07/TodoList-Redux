import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { api } from "../api/todosApi";
import { EDIT_TODO, DELETE_TODO } from "../modules/todoReducer";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState("");

  const deleteTodo = async (id) => {
    try {
      const { data } = await api.delete(`todos/${id}`);
      dispatch({ type: DELETE_TODO, id: data.id });
    } catch (e) {
      console.log("something wrong");
    }
  };

  const editTodo = async (id) => {
    try {
      const { data } = await api.put(`todos/${id}`, { name: editInput });
      dispatch({ type: EDIT_TODO, payload: data });
      console.log(data);
    } catch (e) {
      console.log("something wrong");
    }
  };

  return (
    <div>
      <li>
        {todo.name}{" "}
        <span style={{ color: "red", cursor: "pointer" }} onClick={() => deleteTodo(todo.id)}>
          X
        </span>{" "}
        {!editMode && (
          <>
            <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setEditMode(true)}>
              Edit
            </span>
          </>
        )}
      </li>
      {editMode && (
        <div>
          <input
            value={editInput}
            placeholder="수정할 내용을 입력하세요"
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button
            onClick={() => {
              editTodo(todo.id);
              setEditMode(false);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
