import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos, updateTodo } from "api";

const useUpdateTodos = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateTodo,

    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),

    // OR

    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // const previousTodos = queryClient.getQueryData(["todos"]);

      queryClient.setQueryData(["todos"], (old) =>
        old.map((item) => (item.id === newTodo.id ? newTodo : item))
      );

      // return { previousTodos };
    },

    // onError: (err, newTodo, context) => {
    //   queryClient.setQueryData(["todos"], context?.previousTodos);
    // },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    updateTodo: mutate,
    isLoading,
  };
};

export default useUpdateTodos;
