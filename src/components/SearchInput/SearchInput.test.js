import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

test('is movie title input and search button is in the search input', () => {
	render(
		<SearchInput />
	);

	expect(screen.getByLabelText('Movie Title')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
});
