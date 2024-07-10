import React from "react";

const Movie = ({ poster_path, title, vote_average,overview }) => {
  const IMAGE = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container">
        <img className="img" src={IMAGE + poster_path} />
        <div className="details">
        <p id="title">
          {title} {vote_average}
        </p>
      </div>
      <div className="overview">{overview}</div>
    </div>
  );
};

export default Movie;
