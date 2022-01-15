import './MovieInfo.css';

const MovieInfo = ({movie}) => {
    return (
        <li className="user">
            <span key="id" className="user-id">{movie.id}</span>
            <span key="name" className="user-name">{movie.name}</span>
            <span key="user-age" className="user-age">{movie.score}</span>
        </li>
    );
}

export default MovieInfo;