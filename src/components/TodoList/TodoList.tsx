import * as React from 'react';
import { useState } from 'react';
import { Button, Checkbox, Input, List, Modal, Space, Spin } from 'antd';
import { useDeleteTodo, useTodos, useUpdateTodo } from 'hooks';
import { Todo } from 'types';
import { usePanelContext } from 'components/PanelContext';

const TodoList: React.FC = () => {
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
  const { todos, isLoading } = useTodos();
  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();
  console.log('TodoList');
  const { content, setContent } = usePanelContext();

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleEditValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTodo({ ...(currentTodo as Todo), name: e.target.value });
  };

  const handleEditClick = (todo: Todo) => {
    setCurrentTodo(todo);
  };

  const handleCancelEdit = () => {
    setCurrentTodo(null);
  };

  const handleEditTodo = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (e.type !== 'keydown' || (e as React.KeyboardEvent).key === 'Enter') {
      updateTodo(currentTodo);
      setCurrentTodo(null);
    }
  };

  const handleCompleteTodo = ({ id, name, done }: Todo) => {
    updateTodo({ id, name, done: !done });
    setContent('dsa');
  };

  return isLoading ? (
    <section className="flex h-screen w-full justify-center">
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </section>
  ) : (
    <>
      <List
        dataSource={todos}
        itemLayout="horizontal"
        renderItem={(todo: Todo) => (
          <List.Item
            actions={[
              <Button
                type="link"
                key="edit"
                onClick={() => handleEditClick(todo)}
              >
                Edit
              </Button>,
              <Button
                type="link"
                key="delete"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </Button>,
            ]}
          >
            <Checkbox
              className={todo.done ? 'text-gray-500 line-through' : ''}
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
        cancelButtonProps={{ disabled: !currentTodo?.name }}
        open={!!currentTodo?.id}
        title="Edit todo"
        onOk={handleEditTodo}
        onCancel={handleCancelEdit}
      >
        <Input
          onKeyDown={handleEditTodo}
          placeholder="Todo title"
          value={currentTodo?.name}
          onChange={handleEditValueChange}
        />
      </Modal>
    </>
  );
};

export default TodoList;
