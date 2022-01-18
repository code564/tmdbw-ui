import './MovieCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import MovieGenres from './MovieGenres';

const overviewShortened = (overview) => {
	return `${overview.substring(0, 200)} ...`;
}

const MovieInfo = (props) => {
	return (
		<Card sx={{ width: 270 }} >
			<CardMedia
				component="img"
				image={props.movie.img.url}
				alt={props.movie.name}
			/>
			<CardContent>
				<Typography className="movie-name" onClick={props.onTitleClick} gutterBottom variant="h7" component="div">
					{props.movie.name}
				</Typography>
				<Typography variant="body2" align="justify" className="movie-overview">
					{overviewShortened(props.movie.overview)}
				</Typography>
				<MovieGenres genres={props.movie.genres} />
				<Rating readOnly defaultValue={props.movie.score} max={10} />
			</CardContent>
			<CardActions>
				<Button
					size="small"
					onClick={props.onSimilarClick}>
					Similar movies
            </Button>
			</CardActions>
		</Card>
	);
}

export default MovieInfo;