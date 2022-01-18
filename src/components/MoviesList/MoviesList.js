import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';
import MovieExtractModal from './MovieExtractModal';
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment, useState } from 'react';
import { getSimilarMoviesThunk, getMovieWikipediaExtract } from '../../redux/thunks';
import { selectFetchingAction,
    selectWikipediaExtractName,
    selectWikipediaExtractContent,
    selectWikipediaExtractIsLoading } from '../../redux/selector';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';

const MoviesList = (props) => {

    const [movieExtractModalIsOpen, setMovieExtractModalIsOpen] = useState(false);
    const fetchingAction = useSelector(selectFetchingAction);
    const wikipediaExtractContent = useSelector(selectWikipediaExtractContent);
    const wikipediaExtractName = useSelector(selectWikipediaExtractName);
    const wikipediaExtractIsLoading = useSelector(selectWikipediaExtractIsLoading);
    const dispatch = useDispatch();

    const getSimilarMovies = (id, name) => {
        dispatch(getSimilarMoviesThunk(id, name));
    }

    const getWikipediaExtract = (name) => {
        setMovieExtractModalIsOpen(true);
        dispatch(getMovieWikipediaExtract(name));
    }

    const onMovieExtractModalClose = () => {
        setMovieExtractModalIsOpen(false);
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
                            <Grid item key={movie.id}>
                                <MovieCard
                                    onSimilarClick={() => getSimilarMovies(movie.id, movie.name)}
                                    onTitleClick={() => getWikipediaExtract(movie.name)}
                                    key={movie.id}
                                    movie={movie}
                                />
                            </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <h2>No matching movies found!</h2>
                    )}
                </div>
            )}
            {<MovieExtractModal
                open={movieExtractModalIsOpen}
                handleClose={onMovieExtractModalClose}
                name={wikipediaExtractName}
                content={wikipediaExtractContent}
                isLoading={wikipediaExtractIsLoading}
            />}
        </Fragment>
    )
}

export default MoviesList;