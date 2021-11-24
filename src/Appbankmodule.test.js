import { render, screen } from '@testing-library/react';
import Appbankmodule from './Appbankmodule';

test('renders learn react link', () => {
  render(<Appbankmodule />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
