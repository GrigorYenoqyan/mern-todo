import { useMutation } from '@tanstack/react-query';
import { updateTodo } from 'api';
import useStore from 'store';

const useUpdateTodos = () => {
  const { updateTodo: editTodo } = useStore();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateTodo,
    onMutate: (variables) => editTodo(variables),
  });

  return {
    updateTodo: mutate,
    isLoading,
  };
};

export default useUpdateTodos;
