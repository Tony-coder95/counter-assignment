import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter, { increment, decrement } from '../components/Counter';

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
  let count = 0; // Simulated state
  count = increment(count);
  expect(count).toBe(1);
});

test('calls decrement function directly', () => {
  let count = 0; // Simulated state
  count = decrement(count);
  expect(count).toBe(-1);
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
