import axiosInstance from 'api/config';

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance.get('/todos');

    return data.todos;
  } catch (error) {
    return error;
  }
};

export const addTodo = async (todo: string) => {
  try {
    const { data } = await axiosInstance.post('/todos', { name: todo });

    return data.todos;
  } catch (error) {
    return error;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    return axiosInstance.delete(`/todos/${id}`);
  } catch (error) {
    return error;
  }
};

export const updateTodo = async (todo) => {
  try {
    const { id, ...todoData } = todo;

    return axiosInstance.patch(`/todos/${id}`, todoData);
  } catch (error) {
    return error;
  }
};
