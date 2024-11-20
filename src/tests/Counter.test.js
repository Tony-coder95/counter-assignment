import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count').textContent).toBe('0');
});

test('renders increment and decrement buttons', () => {
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
});

test('calls increment function when + button is clicked', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe('1');
});

test('calls decrement function when - button is clicked', () => {
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('-1');
});

test('increments and decrements work together properly', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  const decrementButton = screen.getByText('-');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('1'); // 0 + 1 + 1 - 1 = 1
});

test('calls increment function multiple times', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);

  expect(countElement.textContent).toBe('3'); // 0 + 1 + 1 + 1 = 3
});

test('calls decrement function multiple times', () => {
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');

  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);

  expect(countElement.textContent).toBe('-2'); // 0 - 1 - 1 = -2
});
