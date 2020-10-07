import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Loader', () => {
	const { getByAltText } = render(<App />);
	const linkElement = getByAltText(/Loading/i);
	expect(linkElement).toBeInTheDocument();
});
