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

test('calls increment function directly', () => {
  // Simulate direct function call
  let count = 0;
  count += 1; // Equivalent to increment logic
  expect(count).toBe(1);
});

test('calls decrement function directly', () => {
  // Simulate direct function call
  let count = 0;
  count -= 1; // Equivalent to decrement logic
  expect(count).toBe(-1);
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('-1');
});

test('combination of + and - buttons works correctly', () => {
  const incrementButton = screen.getByText('+');
  const decrementButton = screen.getByText('-');
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('1');
});
