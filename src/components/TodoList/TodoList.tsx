import * as React from "react";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useTodos from "hooks/useTodos";
import { Checkbox, Input, List, Modal } from "antd";
import TodoInput from "components/TodoInput/TodoInput";
import useDeleteTodo from "hooks/useDeleteTodo";
import useUpdateTodo from "hooks/useUpdateTodo";

const TodoList: React.FC = () => {
  const [currentTodo, setCurrentTodo] = useState({});
  const { todos, isLoading } = useTodos();
  const { deleteTodo } = useDeleteTodo();
  // const [editedValue, setEditedValue] = useState("");
  const { updateTodo } = useUpdateTodo();

  // const currentTodo = todos.find((todo) => todo.id === editId).name;

  const queryClient = useQueryClient();

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleEditValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTodo({ ...currentTodo, name: e.target.value });
  };

  // const handleAddTodo = () => {
  //   addTodo(value);
  //   setValue("");
  // };

  const handleEditClick = (todo) => {
    setCurrentTodo(todo);
  };

  const handleCancelEdit = () => {
    setCurrentTodo({});
  };

  const handleEditTodo = () => {
    queryClient.setQueryData(["todos"], (old) =>
      old.map((item) => (item.id === currentTodo.id ? currentTodo : item))
    );

    updateTodo(currentTodo);
    setCurrentTodo({});
  };

  const handleCompleteTodo = ({ id, name, done }) => {
    queryClient.setQueryData(["todos"], (old) =>
      old.map((item) => (item.id === id ? { id, name, done } : item))
    );

    updateTodo({ id, name, done: !done });
  };

  return (
    <>
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <a key="edit" onClick={() => handleEditClick(todo)}>
                Edit
              </a>,
              <a onClick={() => handleDelete(todo.id)} key="delete">
                Delete
              </a>,
            ]}
          >
            <Checkbox
              onChange={() => handleCompleteTodo(todo)}
              checked={todo.done}
            >
              {todo.name}
            </Checkbox>
          </List.Item>
        )}
      />
      <Modal
        title="Edit todo"
        open={currentTodo.id}
        onOk={handleEditTodo}
        // confirmLoading={confirmLoading}
        onCancel={handleCancelEdit}
      >
        <Input
          placeholder="Todo title"
          value={currentTodo.name}
          onChange={handleEditValueChange}
        />
      </Modal>
    </>
  );
};

export default TodoList;
