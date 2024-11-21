import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

let container;

beforeEach(() => {
  container = render(<Counter />);
});

test('renders counter message', () => {
  expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByText('-1')).toBeInTheDocument();
});
