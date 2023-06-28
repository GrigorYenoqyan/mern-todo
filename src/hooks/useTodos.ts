import { useQuery } from '@tanstack/react-query';
import { getTodos } from 'api';
import useStore from 'store';

const useTodos = () => {
  const { todos, setTodos } = useStore();

  const { isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    onSuccess: (data) => setTodos(data),
  });

  return {
    todos,
    isLoading,
  };
};

export default useTodos;
