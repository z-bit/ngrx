import { Action } from '@ngrx/store';
import { type } from './type-cache.util';

export const ActionTypes = {
	OPEN_SIDENAV: type('[SIDENAV] Open Sidenav'),
	CLOSE_SIDENAV: type('[SIDENAV] Close Sidenav'),
	TOGGLE_SIDENAV: type('[SIDENAV] Toggle Sidenav')
};

export class OpenSidenavAction implements Action {
	type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
	type = ActionTypes.CLOSE_SIDENAV;
}

export class ToggleSidenavAction implements Action {
	type = ActionTypes.TOGGLE_SIDENAV;
}

export type Actions = OpenSidenavAction | CloseSidenavAction | ToggleSidenavAction;