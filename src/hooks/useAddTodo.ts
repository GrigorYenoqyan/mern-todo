import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from 'api';

const useAddTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: addTodo,

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  return {
    addTodo: mutate,
    isLoading,
  };
};

export default useAddTodos;
