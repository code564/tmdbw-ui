import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import MoviesList from './components/MoviesList/MoviesList';
import { fetchMoviesThunk, searchMoviesThunk } from './redux/thunks';
import { selectMoviesList, selectMoviesIsLoading, selectMoviesError } from './redux/selector';

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch()
  const moviesList = useSelector(selectMoviesList);
  const moviesIsLoading = useSelector(selectMoviesIsLoading);
  const moviesError = useSelector(selectMoviesError);

  useEffect(() => {
    dispatch(fetchMoviesThunk())
  },[])

  const filter = (e) => {
    const keyword = e.target.value;
    setName(keyword);
    if (keyword.length)
      dispatch(searchMoviesThunk(keyword));
    else
      dispatch(fetchMoviesThunk())
  }

  return (
    <div className="container">
      <SearchInput
        name={name}
        filter={filter}
      />
      <MoviesList movies={moviesList} />
    </div>
  );
}

export default App;