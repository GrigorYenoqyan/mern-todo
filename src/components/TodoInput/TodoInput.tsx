import * as React from 'react';
import { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import { useAddTodo } from 'hooks';

const TodoInput: React.FC = () => {
  const [value, setValue] = useState('');
  const { addTodo, isLoading } = useAddTodo();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (!e.key || e.key === 'Enter') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <section>
      <Row gutter={10}>
        <Col span={20}>
          <Input
            placeholder="Add Todo"
            value={value}
            onChange={handleValueChange}
            onKeyDown={handleAddTodo}
          />
        </Col>
        <Col span={2}>
          <Button
            disabled={isLoading || !value}
            type="primary"
            onClick={handleAddTodo}
          >
            Add todo
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default TodoInput;
