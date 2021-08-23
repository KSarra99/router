import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();

  console.log(id);

  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(movies.find((elt) => elt.id === Number(id)));
  }, []);
  return (
    <div className="desc">
      <h3>{movie.Description}</h3>
      <h2 className="trailer"> Movie Official Trailer</h2>
      <iframe
        width="560"
        height="315"
        src={movie.Trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetails;
