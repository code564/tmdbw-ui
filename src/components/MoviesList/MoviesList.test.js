import { render, screen } from '@testing-library/react';
import MoviesList from './MoviesList';
import { Provider } from 'react-redux'
import store from '../../redux/store'

test('is list grid root not in dom when there are no movies', () => {
	render(
        <Provider store={store}>
            <MoviesList movies={[]} />
        </Provider>
	);

    expect(screen.queryByText('MuiGrid-root')).toBeNull()
});

test('is list element visible when movies found', () => {
	const foundMovies = [
        {
            id: "1",
            name: "Test Movie 1",
            overview: "Test Movie 1 overview",
            genres: [
                {
                    name: "Test genre"
                }
            ],
            score: 9.5,
            img: {
                url: null
            }
        }
    ];
    
    render(
        <Provider store={store}>
            <MoviesList movies={foundMovies} />
        </Provider>
	);

    expect(screen.getByText('Test Movie 1')).toBeInTheDocument();
});
