import React, { useState, useEffect } from "react";
import { api } from "../utils/movieApi";
import { API_KEY } from "../utils/movieKey";
import MovieCard from "./MovieCard";

import "./SearchMovie.css";

const SearchMovie = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    async function getMovieList() {
      setLoading(true);
      // console.log(value); 를 찍어보면 바뀌는 내용을 알 수 있다.
      // dependency array에 의존성이 등록되어 있기 때문이다.
      try {
        const { data } = await api.get(`/search/movie?api_key=${API_KEY}&query=${value}`);
        //쿼리와 api키는 반드시 필요
        // console.log(data.results);
        setMovies(data.results);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }

    if (value !== "") {
      getMovieList();
    }
  }, [value]);

  //value가 바뀔때마다 useEffect실행.
  return (
    <div className="SearchMovie">
      <input placeholder="검색할 영화 이름을 넣어주세요" value={value} onChange={(e) => setValue(e.target.value)} />
      {value === "" && <h1>값을 입력해 주세요</h1>}
      {isLoading && <h1>Now Loading...</h1>}
      {hasError && <h1>Error Occured...</h1>}
      <div className="SearchMovieList">
        {!isLoading && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        {/* key를 쓰는 이유 : 재조정문제 방지,  */}
      </div>
    </div>
  );
};

export default SearchMovie;
