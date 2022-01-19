import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

test('is movie card contains movie title and overview', () => {
    const movie = {
        id: "1",
        name: "Test Movie 1",
        overview: "Test Movie overview",
        genres: [
            {
                name: "Test genre"
            }
        ],
        score: 9.5,
        img: {
            url: null
        }
    };

	render(
        <MovieCard movie={movie} />
	);

    expect(screen.getByText('Test Movie 1')).toBeInTheDocument();
    expect(screen.getByText(/Test Movie overview/)).toBeInTheDocument();
});
