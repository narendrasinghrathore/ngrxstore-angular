import { TestBed, async, inject } from '@angular/core/testing';

import { TodoExistGuard } from './todo-exist.guard';

describe('TodoExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoExistGuard]
    });
  });

  it('should ...', inject([TodoExistGuard], (guard: TodoExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
