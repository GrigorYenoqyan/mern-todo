import { useQuery, gql } from '@apollo/client';
import useStore from 'store';

const GET_TODOS = gql`
  query getTodos {
    getTodos {
      name
      done
      id
    }
  }
`;

const useTodos = () => {
  const { todos, setTodos } = useStore();

  const { loading } = useQuery(GET_TODOS, {
    onCompleted: (data) => setTodos(data.getTodos),
  });

  return {
    todos,
    isLoading: loading,
  };
};

export default useTodos;
