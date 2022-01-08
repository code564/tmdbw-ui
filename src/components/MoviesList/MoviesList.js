import './MoviesList.css';
import MovieInfo from '../MovieInfo/MovieInfo';

const MoviesList = ({movies}) => {
    return (
        <div className="movies-list">
            {movies && movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieInfo key={movie.id} movie={movie} />
                ))
            ) : (
                <h1>No matching movies found!</h1>
            )}
        </div>
    );
}

export default MoviesList;