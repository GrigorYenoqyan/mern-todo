import { useQuery } from "@tanstack/react-query";
import { getTodos } from "api";

const useTodos = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return {
    todos: data,
    isLoading,
  };
};

export default useTodos;
