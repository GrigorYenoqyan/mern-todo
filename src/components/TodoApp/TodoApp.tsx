import * as React from 'react';
import TodoInput from 'components/TodoInput/TodoInput';
import TodoList from 'components/TodoList/TodoList';

const TodoApp: React.FC = () => {
  return (
    <section style={{ width: '60%', margin: 'auto' }}>
      <TodoInput />
      <TodoList />
    </section>
  );
};

export default TodoApp;
