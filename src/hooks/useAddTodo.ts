import { useMutation } from '@tanstack/react-query';
import { addTodo } from 'api';
import useStore from 'store';

const useAddTodo = () => {
  const { addTodo: addNewTodo } = useStore();

  const { mutate, isLoading } = useMutation({
    mutationFn: addTodo,
    onSuccess: (data) => addNewTodo(data.todo),
  });

  return {
    addTodo: mutate,
    isLoading,
  };
};

export default useAddTodo;
