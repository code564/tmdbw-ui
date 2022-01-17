import './MoviesList.css';
import MovieInfo from '../MovieInfo/MovieInfo';
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment } from 'react';
import { getSimilarMoviesThunk } from '../../redux/thunks';
import { selectFetchingAction } from '../../redux/selector';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';

const MoviesList = (props) => {

    const fetchingAction = useSelector(selectFetchingAction);
    const dispatch = useDispatch();
    const getSimilarMovies = (id, name) => {
        dispatch(getSimilarMoviesThunk(id, name));
    }

    return (
        <Fragment key="movies-list-fragment">
            <h1>{fetchingAction}</h1>
            {props.isLoading && <CircularProgress />}
            {!props.isLoading && props.movies && (
                <div className="movies-list">
                    {props.movies && props.movies.length > 0 ? (
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 3 }}>
                            {props.movies.map((movie) => (
                            <Grid item /* xs={2} sm={2} md={2} */ key={movie.id}>
                                <MovieInfo onClick={() => getSimilarMovies(movie.id, movie.name)} key={movie.id} movie={movie} />
                            </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <h1>No matching movies found!</h1>
                    )}
                </div>
            )}
        </Fragment>
    )
    /* return (
        <Fragment key="movies-list-fragment">
            <h1>{fetchingAction}</h1>
            {props.isLoading && <CircularProgress />}
            {!props.isLoading && props.movies && (
                <div className="movies-list">
                    {props.movies && props.movies.length > 0 ? (
                        props.movies.map((movie) => (
                            <MovieInfo onClick={() => getSimilarMovies(movie.id, movie.name)} key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <h1>No matching movies found!</h1>
                    )}
                </div>
            )}
        </Fragment>
    ) */
}

export default MoviesList;