import * as fromUserAction from './user.action';
import { ITodoList } from 'src/models/list.interface';

describe('USER Actions', () => {
  describe('Load USER Actions', () => {
    describe('Load USER', () => {
      it('should create an action', () => {
        const action = new fromUserAction.LoadUsers();
        expect({ ...action }).toEqual({
          type: fromUserAction.LOAD_USERS
        });
      });
    });
    describe('Load USER Success', () => {
      it('should create an action', () => {
        const payload: ITodoList[] = [];
        const action = new fromUserAction.LoadUsersSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromUserAction.LOAD_USERS_SUCCESS,
          payload
        });
      });
    });
    describe('Load USER Fail', () => {
      it('should create an action', () => {
        const payload = { message: 'Error' };
        const action = new fromUserAction.LoadUsersFail(payload);
        expect({ ...action }).toEqual({
          type: fromUserAction.LOAD_USERS_FAIL,
          payload
        });
      });
    });
  });
});
