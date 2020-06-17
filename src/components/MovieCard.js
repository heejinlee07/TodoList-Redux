import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { title, vote_count, poster_path, id } = movie;
  console.log("info", movie);
  return (
    <div className="Card">
      <Link to={`/movie/${id}`}>{title}</Link>
      <span>
        <span>👍{vote_count}</span>
      </span>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} className="CardImage" alt="movie" />
    </div>
  );
};

export default MovieCard;
