import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

const handleEnter = (event, searchAction) => {
	if (event.key === 'Enter') {
		searchAction(event);
	}
}

const SearchInput = (props) => {
	return (
		<Grid container paddingTop="25px" spacing={2}>
			<Grid item xs={10}>
				<TextField
					id="outlined-basic"
					key="movie-search-input"
					label="Movie Title"
					variant="outlined"
					size="small"
					onChange={props.onChange}
					onKeyDown={(evt) => handleEnter(evt, props.searchAction)}
					value={props.searchKeyword}
					fullWidth
				/>
			</Grid>
			<Grid item xs={2}>
				<Button
					key="movie-search-button"
					variant="contained"
					startIcon={<SearchIcon />}
					onClick={props.searchAction}
					fullWidth
				>Search</Button>
			</Grid>
		</Grid>
	)
}

export default SearchInput;