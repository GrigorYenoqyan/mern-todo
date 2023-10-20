import { useQuery, gql } from '@apollo/client';
import useStore from 'store';
import { Todo } from 'types';

type Hook = () => {
  todos: Todo[];
  isLoading: boolean;
};

const GET_TODOS = gql`
  query getTodos {
    todos {
      name
      done
      id
    }
  }
`;

const useTodos: Hook = () => {
  const { todos, setTodos } = useStore();

  const { loading } = useQuery(GET_TODOS, {
    onCompleted: (data) => setTodos(data.todos),
  });

  return {
    todos,
    isLoading: loading,
  };
};

export default useTodos;
