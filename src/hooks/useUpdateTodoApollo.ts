import { gql, useMutation } from '@apollo/client';
import useStore from 'store';
import { Todo } from 'types';

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $todo: UpdateTodo) {
    updateTodo(id: $id, todo: $todo) {
      id
      name
      done
      __typename
    }
  }
`;

const useUpdateTodo = () => {
  const { updateTodo: editTodo } = useStore();

  const [mutate, { loading }] = useMutation(UPDATE_TODO, {
    onCompleted: ({ id, name, done }) => {
      editTodo({ id, name, done });
    },
  });

  return {
    updateTodo: ({ id, name, done }: Todo) =>
      mutate({
        variables: { id, todo: { name, done } },
        optimisticResponse: {
          updateTodo: {
            id,
            name,
            done,
            __typename: 'Todo',
          },
        },
      }),
    isLoading: loading,
  };
};

export default useUpdateTodo;
