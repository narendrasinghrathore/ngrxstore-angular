import * as fromReducers from './todov7.reducers';
import * as fromActions from '../actions/todov7.actions';
import { ITodoList } from 'src/models/list.interface';

describe('TodoRedcuers', () => {
  describe('undefined action', () => {
    it('should return default state', () => {
      const { initialStateTodo } = fromReducers;
      const action = {} as any;
      const state = fromReducers.reducer(undefined, action);
      expect(state).toBe(initialStateTodo);
    });
  });

  describe('Load Todo Action', () => {
    it('should set loading to true', () => {
      const action = new fromActions.LoadTodos();
      const state = fromReducers.reducer(undefined, action);
      expect(state.loading).toEqual(true);
    });
  });

  describe('Load Todo Success Action', () => {
    it('should map array to entities', () => {
      const todos: ITodoList[] = [
        {
          id: 1,
          timestamp: 12323423,
          title: 'Hi',
          userId: 1
        },
        {
          id: 2,
          timestamp: 12323423,
          title: 'Hi',
          userId: 1
        }
      ];
      const entities = {
        1: todos[0],
        2: todos[1]
      };
      const { initialStateTodo } = fromReducers;
      const action = new fromActions.LoadTodosSuccess(todos);
      const state = fromReducers.reducer(initialStateTodo, action);
      expect(state.entites).toEqual(entities);
      expect(state.loading).toEqual(false);
      expect(state.loaded).toEqual(true);
    });
  });
});
