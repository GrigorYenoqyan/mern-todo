import * as React from 'react';
import TodoInput from 'components/TodoInput/TodoInput';
import TodoList from 'components/TodoList/TodoList';

const TodoApp: React.FC = () => {
  return (
    <section className="mx-auto w-1/2">
      <TodoInput />
      <TodoList />
    </section>
  );
};

export default TodoApp;
