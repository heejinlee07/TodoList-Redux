import React from "react";
import TodoList from "./components/TodoList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";
import MovieProfile from "./components/MovieProfile";

export default function App() {
  return (
    //BrowserRouter로 라우터 선언
    <BrowserRouter>
      <Header />
      {/* Switch는 child 요소를 읽고,
      그 중 해당되는 route를 화면에 렌더링 
      path에 매칭되는 첫번째 자식 route를 렌더링.
      따라서 '순서'가 아주 중요하다.
      */}
      <Switch>
        {/* Route는 렌더링 단위. path에 매칭되는 route렌더링 */}
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/about/:name">
          <About />
        </Route>
        <Route path="/todolist">
          <TodoList />
        </Route>
        <Route exact path="/movie">
          <MovieList />
        </Route>
        <Route path="/movie/:movieId">
          <MovieProfile />
        </Route>
        <Route path="/search">
          <SearchMovie />
        </Route>
      </Switch>
      <hr />
      <Footer />
      {/* Switch 밖에 있는 header와 footer는 router와 상관없이
      렌더링. 따라서 재사용. */}
    </BrowserRouter>
  );
}

/**
 * Route: 주소 선언
 * Link: 페이지 이동
 */

/**
 * NOTE:
 * route가 렌더되는 방법
 * 1. children문법사용
 *  <Route path="/about">
 *    <About />
 *  </Route>
 * 2. component props로 전달
 * 3. render prop로 전달
 * 4. children prop로 전달
 *
 * FIXME:
 * 2~4의 방법을사용하면 {match, location, history}의
 * 세가지 prop을 자동으로 전달받음.
 * 그러나 이는 react hook이 나오기 이전에 자주 쓰던 방법
 */
