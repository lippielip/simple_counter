import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';
import Loader from './loader';

test('should render the Loader', () => {
	const { getByAltText } = render(<Loader />);
	const linkElement = getByAltText(/Loading/i);
	expect(linkElement).toBeInTheDocument();
});

test('should render the Form group', () => {
	const { getByText } = render(<Button count={42} writeData={null} state={null} />);
	const linkElement = getByText(/42/i);
	expect(linkElement).toBeInTheDocument();
});
