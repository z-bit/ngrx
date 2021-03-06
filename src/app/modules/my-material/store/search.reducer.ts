import * as book from './book.actions';

export interface State {
	ids: string[];
	loading: boolean;
	query: string;
}
const initialState: State = {
	ids: [],
	loading: false,
	query: ''
};
export function  reducer(state: State = initialState, action: book.Actions): State {
	switch (action.type) {
		case book.ActionTypes.SEARCH: {
			const query = action.payload;
			if (query === '') {
				return {
					ids: [],
					loading: false,
					query
				} ;
			}
			return Object.assign({}, state, {query, loading: true});
		}
		case book.ActionTypes.SEARCH_COMPLETE: {
			const books = action.payload;
			return {
				ids: books.map( book => book.id ),
				loading: false,
				query: state.query
			}
		}
		default: return state;
	}
}
export const getIds         = (state: State) => state.ids;
export const getQuery       = (state: State) => state.query;
export const getLoading     = (state: State) => state.loading;