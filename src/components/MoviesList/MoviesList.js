import './MoviesList.css';
import MovieInfo from '../MovieInfo/MovieInfo';
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment } from 'react';

const MoviesList = (props) => {
    return (
        <Fragment key="movies-list-fragment">
            {props.isLoading && <CircularProgress />}
            {!props.isLoading && props.movies && (
                <div className="movies-list">
                    {props.movies && props.movies.length > 0 ? (
                        props.movies.map((movie) => (
                            <MovieInfo key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <h1>No matching movies found!</h1>
                    )}
                </div>
            )}
        </Fragment>
    )
}

export default MoviesList;