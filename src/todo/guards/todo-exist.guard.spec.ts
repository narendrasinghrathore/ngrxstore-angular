import { TestBed } from '@angular/core/testing';

import { TodoExistGuard } from './todo-exist.guard';
import { StoreModule } from '@ngrx/store';

describe('TodoExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [TodoExistGuard]
    });
  });

  it('should ...', () => {
    const guard: TodoExistGuard = TestBed.get(TodoExistGuard);
    expect(guard).toBeTruthy();
  });
});
