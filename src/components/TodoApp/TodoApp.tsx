import * as React from 'react';
import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';

const TodoApp: React.FC = () => {
  return (
    <section
      data-qa="todoAppSection"
      className="mx-auto flex h-screen w-1/2 flex-col"
    >
      <TodoInput />
      <TodoList />
    </section>
  );
};

export default TodoApp;
