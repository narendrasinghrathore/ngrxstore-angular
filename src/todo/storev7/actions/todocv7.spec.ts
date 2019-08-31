import * as fromTodoActions from './todov7.actions';
import { ITodoList } from 'src/models/list.interface';

describe('Todo Actions', () => {
  describe('Load Todos Actions', () => {
    describe('Load Todos', () => {
      it('should create an action', () => {
        const action = new fromTodoActions.LoadTodos();
        expect({ ...action }).toEqual({
          type: fromTodoActions.LOAD_TODOS
        });
      });
    });
    describe('Load Todos Success', () => {
      it('should create an action', () => {
        const payload: ITodoList[] = [];
        const action = new fromTodoActions.LoadTodosSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromTodoActions.LOAD_TODOS_SUCCESS,
          payload
        });
      });
    });
    describe('Load Todos Fail', () => {
      it('should create an action', () => {
        const payload = { message: 'Error' };
        const action = new fromTodoActions.LoadTodosFail(payload);
        expect({ ...action }).toEqual({
          type: fromTodoActions.LOAD_TODOS_FAIL,
          payload
        });
      });
    });
  });
});
