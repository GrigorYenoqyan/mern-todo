import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from 'api';

const useDeleteTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteTodo,

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  return {
    deleteTodo: mutate,
    isLoading,
  };
};

export default useDeleteTodos;
