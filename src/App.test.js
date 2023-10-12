import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const count = screen.getByTestId("Inc")
  expect(count).toBeInTheDocument();
  fireEvent.click(count)
 
});
