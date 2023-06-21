import * as React from 'react';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Checkbox, Input, List, Modal, Space, Spin } from 'antd';
import useDeleteTodo from 'hooks/useDeleteTodo';
import useTodos from 'hooks/useTodos';
import useUpdateTodo from 'hooks/useUpdateTodo';

const TodoList: React.FC = () => {
  const [currentTodo, setCurrentTodo] = useState({});
  const { todos, isLoading } = useTodos();
  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();

  const queryClient = useQueryClient();

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleEditValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTodo({ ...currentTodo, name: e.target.value });
  };

  const handleEditClick = (todo) => {
    setCurrentTodo(todo);
  };

  const handleCancelEdit = () => {
    setCurrentTodo({});
  };

  const handleEditTodo = (e) => {
    console.log(e.key);
    if (!e.key || e.key === 'Enter') {
      queryClient.setQueryData(['todos'], (old) =>
        old.map((item) => (item.id === currentTodo.id ? currentTodo : item))
      );

      updateTodo(currentTodo);
      setCurrentTodo({});
    }
  };

  const handleCompleteTodo = ({ id, name, done }) => {
    queryClient.setQueryData(['todos'], (old) =>
      old.map((item) => (item.id === id ? { id, name, done } : item))
    );

    updateTodo({ id, name, done: !done });
  };

  return isLoading ? (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  ) : (
    <>
      <List
        dataSource={todos}
        itemLayout="horizontal"
        renderItem={(todo) => (
          <List.Item
            actions={[
              <a key="edit" onClick={() => handleEditClick(todo)}>
                Edit
              </a>,
              <a key="delete" onClick={() => handleDelete(todo.id)}>
                Delete
              </a>,
            ]}
          >
            <Checkbox
              checked={todo.done}
              onChange={() => handleCompleteTodo(todo)}
            >
              {todo.name}
            </Checkbox>
          </List.Item>
        )}
        size="large"
      />
      <Modal
        cancelButtonProps={{ disabled: !currentTodo.name }}
        open={currentTodo.id}
        title="Edit todo"
        onOk={handleEditTodo}
        onCancel={handleCancelEdit}
      >
        <Input
          onKeyDown={handleEditTodo}
          placeholder="Todo title"
          value={currentTodo.name}
          onChange={handleEditValueChange}
        />
      </Modal>
    </>
  );
};

export default TodoList;
