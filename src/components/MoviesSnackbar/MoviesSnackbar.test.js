import { render, screen } from '@testing-library/react';
import MoviesSnackbar from './MoviesSnackbar';

test('is snackbar visible when its in opened state', () => {
	render(
		<MoviesSnackbar open={true} message="This is a test" />
	);

	expect(screen.getByText('This is a test')).toBeInTheDocument();
});

test('is snackbar not visible when its in closed state', () => {
	render(
		<MoviesSnackbar open={false} message="This is a test" />
	);

	expect(screen.queryByText('This is a test')).toBeNull()
});
