import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo text', () => {
  const todo = { text: 'Test Todo', done: false };
  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />);
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});
