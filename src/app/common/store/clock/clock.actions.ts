import { Action } from '@ngrx/store';
import { type } from '../type-cache.util';

export const ActionTypes = {
	ADD_HOUR: type('[Clock] Add Hour'),
	ADD_MINUTE: type('[Clock] Add Minute'),
	ADD_SECOND: type('[Clock] Add Second')
};

export class AddHourAction implements Action {
	type = ActionTypes.ADD_HOUR;
}

export class AddMinuteAction implements Action {
	type = ActionTypes.ADD_MINUTE;
}

export class AddSecondAction implements Action {
	type = ActionTypes.ADD_SECOND;
}

export type Actions = AddHourAction | AddMinuteAction | AddSecondAction;
