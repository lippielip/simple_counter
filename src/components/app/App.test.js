import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../utils/loader';

test('renders Loader', () => {
	const { getByAltText } = render(<Loader />);
	const linkElement = getByAltText(/Loading/i);
	expect(linkElement).toBeInTheDocument();
});
