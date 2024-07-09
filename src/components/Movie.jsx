import React from "react";

const Movie = ({ poster_path, title, vote_average }) => {
  const IMAGE = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container">
      <div>
        <img className="img" src={IMAGE + poster_path} />
        <p id="title">
          {title} {vote_average}
        </p>
      </div>
    </div>
  );
};

export default Movie;
