import { TodoEffectsService } from './todo.effects';
import { UserEffectService } from './user.effect';

export const effects: any[] = [TodoEffectsService, UserEffectService];

export * from './todo.effects';
export * from './user.effect';
