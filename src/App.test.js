import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'

test('renders app container', () => {
	const renderedContainer = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	const div = renderedContainer.container.querySelector("div");
	expect(div.className).toContain('MuiContainer-root');
});
