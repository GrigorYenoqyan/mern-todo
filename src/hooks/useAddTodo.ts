import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos } from "api";

const useAddTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: addTodo,

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
    addTodo: mutate,
    isLoading,
  };
};

export default useAddTodos;
