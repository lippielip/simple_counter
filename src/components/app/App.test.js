import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';

test('should render the App', () => {
	const { getByAltText } = render(<App />);
	const linkElement = getByAltText(/Loading/i);
	expect(linkElement).toBeInTheDocument();
});
