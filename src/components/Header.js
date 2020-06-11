import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

export default function Header() {
  return (
    <>
      <h1>welcome</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">
          <Button>홈으로</Button>
        </Link>
        <Link to="/todolist">
          <Button>todolist</Button>
        </Link>
        <Link to="/movie">
          <Button>movielist</Button>
        </Link>
        <Link to="/search">
          <Button>search movie</Button>
        </Link>
      </div>
    </>
  );
}

// link를 쓰려면 Route에서 정의가 되어있어야함.
