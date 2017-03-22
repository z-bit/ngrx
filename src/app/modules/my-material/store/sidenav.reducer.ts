import * as sidenav from './sidenav.actions';

export interface State {
	showSidenav: boolean;
}

const initialState: State = {
	showSidenav: false,
};

export function reducer(state = initialState, action: sidenav.Actions): State {
	switch (action.type) {
		case sidenav.ActionTypes.CLOSE_SIDENAV: {
			return {showSidenav: false};
		}
		case sidenav.ActionTypes.OPEN_SIDENAV: {
			return {showSidenav: true};
		}
		case sidenav.ActionTypes.TOGGLE_SIDENAV: {
			if (state.showSidenav) {
				return {showSidenav: false};
			} else {
				return {showSidenav: true};
			}
		}
		default: return state;
	}
}
export const getShowSidenav = (state: State) => state.showSidenav;