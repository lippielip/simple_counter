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
	const { getByLabelText } = render(<Button count={42} writeData={null} state={null} />);
	const linkElement = getByLabelText(/42/i);
	expect(linkElement).toBeInTheDocument();
});
