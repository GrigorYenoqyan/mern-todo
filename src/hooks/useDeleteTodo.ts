import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, getTodos } from "api";

const useDeleteTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteTodo,

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),

    // OR

    // onMutate: async (newTodo) => {
    //   await queryClient.cancelQueries({ queryKey: ["todos"] });

    //   const previousTodos = queryClient.getQueryData(["todos"]);

    //   queryClient.setQueryData(["todos"], (old) => [...old, newTodo]);

    //   return { previousTodos };
    // },

    // onError: (err, newTodo, context) => {
    //   queryClient.setQueryData(["todos"], context?.previousTodos);
    // },

    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },
  });

  return {
    deleteTodo: mutate,
    isLoading,
  };
};

export default useDeleteTodos;
