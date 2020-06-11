import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Button from "./Button/Button";

import { api } from "../utils/movieApi";
import { API_KEY } from "../utils/movieKey";

import "./MovieList.css";
import { SET_LOADING, HAS_ERROR, SET_DATA } from "../modules/movieReducer";
import { useSelector, useDispatch } from "react-redux";

//상수니까 대문자로 표현. key를 보기 좋게 정리.
const MovieList = () => {
  // const [movies, setMovies] = useState([]);
  const [type, setType] = useState("now_playing");

  const status = useSelector((state) => state.status);
  const movies = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovieList() {
      if (movies && movies.length > 0) return;

      dispatch({ type: SET_LOADING });

      try {
        const { data } = await api.get(`/movie/${type}?api_key=${API_KEY}`);
        console.log("data: 객체", data);
        console.log("results: 배열", data.results);
        dispatch({ type: SET_DATA, payload: data.results });
        /**
         * 비구조화할당하기 이전에 일단 const data와 같이 변수에 할당한 후
         * console에 찍어본다. 그리고 비구조화할당을 한다.
         * 비구조화할당하는 이유? 비구조화할당을 하지 않고 const data로 할당하고, console에 찍어보면
         * 아래와 같이 axios가 주는 데이터 객체를 볼 수 있다.
         * Object {data: Object, status: 200, statusText: "", headers: Object, config: Object…}
         * 여기서는 data.data.results의 정보가 필요하기 때문에,
         * 비구조화할당을 해서 꺼내오면 코드 중복을 줄일 수 있다.
         */
      } catch (e) {
        dispatch({ type: HAS_ERROR });
      }
    }
    getMovieList();
  }, [type, dispatch, movies]);

  //[] 들어가는 것은 그 안에 있는 것이 바뀔떄만 실행되는 것.바뀌는 값이 있다면 넣어준다.
  // https://ko.reactjs.org/docs/hooks-effect.html
  // getMovieList를 왜 여기서 호출해야하는지?
  //키워드: useEffct, async, await로 검색.
  //useEffect는 async-awita함수를 쓸 수 없음. 그래서 안에 만들어 놓고,
  //호출을 동시에 실행.혹은 즉시실행함수를 사용해도 된다.
  return (
    <div className="MovieList">
      {status === "loading" && <h1>Now Loading...</h1>}
      {status === "error" && <h1>Error Occured...</h1>}
      <div className="MovieListButtonGroup">
        <Button onClick={() => setType("now_playing")}>최신순으로 보기</Button>
        <Button onClick={() => setType("popular")}>인기순으로 보기</Button>
      </div>
      <div className="MovieListTotal">
        {status === "completed" && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
