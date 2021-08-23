import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";

const MovieList = ({films}) => {
    return (
        <div>
            <Link to="/add"><Button className="Addme">Add Movie</Button></Link>
        <div className="movie-list">
            {films.map(
            (elt) => <MovieCard movie={elt}/>
         )}   
        </div>
        </div>
    )
}

export default MovieList
