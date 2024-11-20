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

test('clicking + increments the count', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');

  fireEvent.click(incrementButton); // First click
  expect(countElement.textContent).toBe('1');

  fireEvent.click(incrementButton); // Second click
  expect(countElement.textContent).toBe('2');
});

test('clicking - decrements the count', () => {
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');

  fireEvent.click(decrementButton); // First click
  expect(countElement.textContent).toBe('-1');

  fireEvent.click(decrementButton); // Second click
  expect(countElement.textContent).toBe('-2');
});

test('increments multiple times correctly', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);

  expect(countElement.textContent).toBe('3'); // 0 + 1 + 1 + 1 = 3
});

test('decrements multiple times correctly', () => {
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');

  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);

  expect(countElement.textContent).toBe('-2'); // 0 - 1 - 1 = -2
});

test('count does not break on multiple operations', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  const decrementButton = screen.getByText('-');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton); // Extra decrement
  expect(countElement.textContent).toBe('-1');
});
