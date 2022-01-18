import './MovieGenres.css';
import Chip from '@mui/material/Chip';

const MovieGenres = (props) => {
    return (
        <div className="movie-genres">
            {props.genres.map((genre) => {
                return (<Chip label={genre.name} key={genre.name} size="small" />)
            })}
        </div>
    )
}

export default MovieGenres;
