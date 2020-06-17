import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
import { useDispatch } from "react-redux";
import { MOVIE_SET_LANGUAGE } from "../modules/movieReducer";
import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="title">
        <h1>use Redux Practice</h1>
      </div>
      <div className="langButtonStyle">
        <span className="langButton" onClick={() => dispatch({ type: MOVIE_SET_LANGUAGE, payload: "ko-KR" })}>
          한국어
        </span>
        <span className="langButton" onClick={() => dispatch({ type: MOVIE_SET_LANGUAGE, payload: "en-ER" })}>
          영어
        </span>
      </div>
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
