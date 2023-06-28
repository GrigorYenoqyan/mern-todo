import { useMutation } from '@tanstack/react-query';
import { deleteTodo } from 'api';
import useStore from 'store';

const useDeleteTodos = () => {
  const { deleteTodo: removeTodo } = useStore();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteTodo,
    onMutate: (variables) => removeTodo(variables),
  });

  return {
    deleteTodo: mutate,
    isLoading,
  };
};

export default useDeleteTodos;
