import { TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import * as fromRootReducers from '../../../app/storev7/reducers';
import * as fromFeatureReducers from '../../storev7/reducers';
import * as fromFeatureActions from '../actions/todov7.actions';
import * as fromFeatureSelectors from './todov7.selectors';
import { ITodoList } from 'src/models/list.interface';

describe('Todo Selectors', () => {
  let store: Store<fromFeatureReducers.TodoAppState>;

  const todos: ITodoList[] = [
    {
      id: 1,
      userId: 1,
      timestamp: 234234234,
      title: 'Hi'
    }
  ];

  const entities = {
    1: todos[0]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRootReducers.reducers,
          [fromFeatureReducers.storeName]: combineReducers(
            fromFeatureReducers.reducers
          )
        })
      ]
    });
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('Get todo entities', () => {
    it('should return todo as entities', () => {
      let result;

      store.select(fromFeatureSelectors.getAllTodoEntites).subscribe(val => {
        result = val;
      });

      expect(result).toEqual({});

      store.dispatch(new fromFeatureActions.LoadTodosSuccess(todos));

      expect(result).toEqual(entities);
    });
  });

  describe('Get selected todo from router action', () => {
    it('should return todo as entities', () => {
      let result;

      store.dispatch(new fromFeatureActions.LoadTodosSuccess(todos));

      store.dispatch({
        type: '@ngrx/router-store/request',
        payload: {
          routerState: {
            url: '/todo/list',
            queryParams: {},
            params: {}
          },
          event: {
            id: 8,
            url: '/todo/crud/1',
            navigationTrigger: 'imperative',
            restoredState: null
          }
        }
      });

      store.select(fromFeatureSelectors.getSelectedTodo).subscribe(val => {
        result = val;
      });

      expect(result).toEqual(entities[1]);
    });
  });
});
