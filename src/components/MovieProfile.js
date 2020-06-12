import React, { useEffect } from "react";
import { API_KEY } from "../utils/movieKey";
import { api } from "../utils/movieApi";
import { useParams, useHistory } from "react-router-dom";

import { MOVIE_SET_LOADING, MOVIE_HAS_ERROR, MOVIE_SET_PROFILE_DATA } from "../modules/movieReducer";
import { useSelector, useDispatch } from "react-redux";

import Button from "./Button/Button";
import "./MovieProfile.css";

const MovieProfile = () => {
  const { movieId } = useParams();
  const history = useHistory();
  console.log("실행됨?");
  const dispatch = useDispatch();
  const movie = useSelector(({ movies }) => movies.movie);
  const status = useSelector(({ movies }) => movies.status);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function getMovieList(id) {
      // if (movie && movie.id === parseInt(movieId, 10)) return;

      dispatch({ type: MOVIE_SET_LOADING });

      try {
        const { data } = await api.get(`/movie/${movieId}?api_key=${API_KEY}`);
        console.log("상세페이지 객체", data);
        console.log("상세페이지 배열", data.data);
        console.log("상세페이지 id", data.id);
        dispatch({ type: MOVIE_SET_PROFILE_DATA, payload: data });
      } catch (e) {
        dispatch({ type: MOVIE_HAS_ERROR });
      }
    }
    getMovieList();
  }, [movieId, dispatch]);
  /**
   * Title, Overview, Genres, release_date, poster_path
   */
  return (
    <div className="MovieProfile">
      {status === "loading" && <h1>Now Loading...</h1>}
      {status === "error" && <h1>Error Occured...</h1>}
      {status === "completed" && movie && (
        <>
          <div>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className="CardImage" alt="movie" />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <div>
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id} className="MovieGenreTag">
                    {genre.name}
                  </span>
                ))}
            </div>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <Button onClick={() => history.goBack()}>뒤로 가기</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieProfile;
