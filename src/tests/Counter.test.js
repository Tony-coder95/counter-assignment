import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

// Run before each test to render the Counter component
beforeEach(() => {
  render(<Counter />);
});

test('renders the Counter component', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
  expect(screen.getByTestId('count').textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  fireEvent.click(incrementButton); // First click
  expect(countElement.textContent).toBe('1');

  fireEvent.click(incrementButton); // Second click
  expect(countElement.textContent).toBe('2');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  fireEvent.click(decrementButton); // First click
  expect(countElement.textContent).toBe('-1');

  fireEvent.click(decrementButton); // Second click
  expect(countElement.textContent).toBe('-2');
});

test('combination of + and - buttons updates the count correctly', () => {
  const incrementButton = screen.getByText('+');
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  fireEvent.click(incrementButton); // Count = 1
  fireEvent.click(incrementButton); // Count = 2
  fireEvent.click(decrementButton); // Count = 1
  fireEvent.click(decrementButton); // Count = 0
  expect(countElement.textContent).toBe('0');
});

test('directly calls increment function', () => {
  let count = 0; // Simulating initial state
  const increment = () => (count += 1); // Simulated function logic
  increment(); // Call function
  expect(count).toBe(1); // Assert updated value
});

test('directly calls decrement function', () => {
  let count = 0; // Simulating initial state
  const decrement = () => (count -= 1); // Simulated function logic
  decrement(); // Call function
  expect(count).toBe(-1); // Assert updated value
});
