import { render } from 'utils/test-utils';
import React from 'react';
import TodoApp from 'components/TodoApp';

jest.mock('components/TodoInput', () => 'todo-input');
jest.mock('components/TodoList', () => 'todo-list');

describe('TodoApp', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<TodoApp />);

    expect(getByTestId('todoAppSection')).toBeInTheDocument();
  });
});
