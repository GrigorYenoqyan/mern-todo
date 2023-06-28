import features from 'utils/features';
import useAddTodo from './useAddTodo';
import useDeleteTodo from './useDeleteTodo';
import useTodosWithRest from './useTodos';
import useUpdateTodo from './useUpdateTodo';

import useTodosWithApollo from './useTodosApollo';

const useTodos = features.GRPAHQL_ENABLED
  ? useTodosWithApollo
  : useTodosWithRest;

export { useAddTodo, useDeleteTodo, useTodos, useUpdateTodo };
