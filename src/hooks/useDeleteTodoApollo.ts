import { gql, useMutation } from '@apollo/client';
import useStore from 'store';

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

const useDeleteTodo = () => {
  const { deleteTodo: removeTodo } = useStore();

  const [mutate, { loading }] = useMutation(DELETE_TODO, {
    onCompleted: ({ deleteTodo: id }) => removeTodo(id),
  });

  return {
    deleteTodo: (id: number) => mutate({ variables: { id } }),
    isLoading: loading,
  };
};

export default useDeleteTodo;
