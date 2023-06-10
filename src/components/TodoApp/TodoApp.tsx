import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import useTodos from "hooks/useTodos";
import { Input } from "antd";
import TodoInput from "components/TodoInput/TodoInput";
import TodoList from "components/TodoList/TodoList";

const TodoApp: React.FC = ({}) => {
  const { todos, isLoading } = useTodos();

  return (
    <section style={{ width: "60%", margin: "auto" }}>
      <TodoInput />
      {/* {todos.map((todo) => (
        <p key={todo.id}>{todo.name}</p>
      ))} */}
      <TodoList />
    </section>
  );
};

export default TodoApp;
