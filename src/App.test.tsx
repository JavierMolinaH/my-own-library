import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './App';

test('renders learn react link', () => {
  const { getByText } = render(<MyComponent text={'Hello world'} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
