import * as clock from './clock.actions';

export interface State {
	clock: any;
}

const initialState: State = {
	clock: new Date()
};

export function reducer(state = initialState, action: clock.Actions): State {
	const date = new Date(state.clock);
	switch(action.type) {
		case clock.ActionTypes.ADD_HOUR:
			date.setHours(date.getHours() + 1);
			return {clock: date};
		case clock.ActionTypes.ADD_MINUTE:
			date.setMinutes(date.getMinutes() + 1);
			return {clock: date};
		case clock.ActionTypes.ADD_SECOND:
			date.setSeconds(date.getSeconds() + 1);
			return {clock: date};
			
		default: return state;
	}
}