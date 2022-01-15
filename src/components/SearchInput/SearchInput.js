import './SearchInput.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const handleEnter = (event, searchAction) => {
  if (event.key === 'Enter') {
    searchAction(event);
  }
}

const SearchInput = (props) => {
    return ([
      <TextField
        id="outlined-basic"
        key="movie-search-input"
        label="Movie Title"
        variant="outlined"
        onChange={props.onChange}
        onKeyDown={(evt) => handleEnter(evt, props.searchAction)}
        value={props.searchKeyword}
      />,
      <Button
        key="movie-search-button"
        variant="contained"
        onClick={props.searchAction}
      >
        Search
      </Button>
    ]);
}

export default SearchInput;