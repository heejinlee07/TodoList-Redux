import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { api } from "../utils/todosApi";
import { SET_LOADING, SET_DATA, HAS_ERROR, ADD_TODO } from "../modules/todoReducer";

export default function TodoList() {
  const [value, setValue] = useState("");

  const todos = useSelector(({ todos }) => todos.todos);
  const status = useSelector(({ todos }) => todos.status);

  // 액션을 디스패치
  const dispatch = useDispatch();

  useEffect(() => {
    const setData = async () => {
      dispatch({ type: SET_LOADING });

      try {
        const { data } = await api.get("/todos");
        dispatch({ type: SET_DATA, payload: data });
        console.log(data);
      } catch (e) {
        dispatch({ type: HAS_ERROR });
      }
    };
    setData();
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Simple Todolist</h2>
        <input value={value} placeholder="할 일을 입력하세요" onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={async () => {
            const { data } = await api.post("/todos", { name: value });
            dispatch({ type: ADD_TODO, payload: data });
            setValue("");
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {status === "loading" && <div>now loading...</div>}
        {status === "error" && <div>has error...</div>}
        {status === "completed" && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
}

/**
 * Router 이동시에는 해당하지 않는 컴포넌트는 언마운트 되기 때문에
 * 데이터를 보존하기 위해 redux를 사용했다.
 */
