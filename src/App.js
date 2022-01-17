import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import MoviesList from './components/MoviesList/MoviesList';
import MoviesSnackbar from './components/MoviesSnackbar/MoviesSnackbar';
import { fetchMoviesThunk, searchMoviesThunk } from './redux/thunks';
import { selectMoviesList, selectMoviesIsLoading, selectMoviesError } from './redux/selector';
import Container from '@mui/material/Container';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [snackbarReady, setSnackbarReady] = useState(true);
  const dispatch = useDispatch()
  const moviesList = useSelector(selectMoviesList);
  const moviesIsLoading = useSelector(selectMoviesIsLoading);
  const moviesError = useSelector(selectMoviesError);

  useEffect(() => {
    dispatch(fetchMoviesThunk())
  },[dispatch])

  const searchMovies = () => {
    if (searchKeyword.length)
      dispatch(searchMoviesThunk(searchKeyword));
    else
      dispatch(fetchMoviesThunk())
    setSnackbarReady(true);
  }

  const handleSearchInputChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  }

  const handleSnackbarClose = () => {
    setSnackbarReady(false);
  }

  return (
    <Container maxWidth="lg">
      <SearchInput
        searchKeyword={searchKeyword}
        onChange={handleSearchInputChange}
        searchAction={searchMovies}
      />
      <MoviesList
        isLoading={moviesIsLoading}
        moviesError={moviesError}
        movies={moviesList}
      />
      {moviesError && (
        <MoviesSnackbar
          open={snackbarReady}
          onClose={handleSnackbarClose}
          message={moviesError}
        />
      )}
    </Container>
  );
}

export default App;