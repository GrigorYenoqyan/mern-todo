import { gql, useMutation } from '@apollo/client';
import useStore from 'store';

const ADD_TODO = gql`
  mutation AddTodo($name: String!) {
    createTodo(name: $name) {
      id
      name
      done
    }
  }
`;

const useAddTodo = () => {
  const { addTodo: addNewTodo } = useStore();

  const [mutate, { loading }] = useMutation(ADD_TODO, {
    onCompleted: ({ createTodo: { id, name, done } }) => {
      addNewTodo({ id, name, done });
    },
  });

  return {
    addTodo: (name: string) => mutate({ variables: { name } }),
    isLoading: loading,
  };
};

export default useAddTodo;
