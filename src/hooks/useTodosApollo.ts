import { useQuery, gql } from '@apollo/client';
import useStore from 'store';
import { Todo } from 'types';

type Hook = () => {
  todos: Todo[];
  isLoading: boolean;
};

const GET_TODOS = gql`
  query getTodos {
    getTodos {
      name
      done
      id
    }
  }
`;

const useTodos: Hook = () => {
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
