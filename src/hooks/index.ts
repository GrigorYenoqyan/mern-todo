import features from 'utils/features';
import useTodosWithRest from './useTodos';
import useTodosWithApollo from './useTodosApollo';
import useAddTodoWithRest from './useAddTodo';
import useAddTodoWithApollo from './useAddTodoApollo';
import useDeleteTodoWithRest from './useDeleteTodo';
import useDeleteTodoWithApollo from './useDeleteTodoApollo';
import useUpdateTodoWithRest from './useUpdateTodo';
import useUpdateTodoWithApollo from './useUpdateTodoApollo';

const useTodos = features.GRPAHQL_ENABLED
  ? useTodosWithApollo
  : useTodosWithRest;

const useAddTodo = features.GRPAHQL_ENABLED
  ? useAddTodoWithApollo
  : useAddTodoWithRest;

const useDeleteTodo = features.GRPAHQL_ENABLED
  ? useDeleteTodoWithApollo
  : useDeleteTodoWithRest;

const useUpdateTodo = features.GRPAHQL_ENABLED
  ? useUpdateTodoWithApollo
  : useUpdateTodoWithRest;

export { useTodos, useAddTodo, useDeleteTodo, useUpdateTodo };
