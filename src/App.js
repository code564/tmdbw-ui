import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import MoviesList from './components/MoviesList/MoviesList';
import { fetchMovies, searchMovies } from './redux/actions';

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies())
  },[])

  const filter = (e) => {
    const keyword = e.target.value;
    setName(keyword);
    dispatch(searchMovies(keyword));
  }

  return (
    <div className="container">
      <SearchInput
        name={name}
        filter={filter}
      />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;