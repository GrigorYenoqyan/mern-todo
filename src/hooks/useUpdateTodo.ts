import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from 'api';

const useUpdateTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateTodo,

    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      queryClient.setQueryData(['todos'], (old) =>
        old.map((item) => (item.id === newTodo.id ? newTodo : item))
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    updateTodo: mutate,
    isLoading,
  };
};

export default useUpdateTodos;
