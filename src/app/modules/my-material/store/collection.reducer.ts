import * as collection from './collection.actions';

export interface State {
	loaded: boolean;
	loading: boolean;
	ids: string[];
}
const initialState: State = {
	loaded: false,
	loading: false,
	ids: []
};
export function reducer(state = initialState, action: collection.Actions): State {
	switch (action.type) {
		case collection.ActionTypes.LOAD: {
			return Object.assign({}, state, {loading: true});
		}
		case collection.ActionTypes.LOAD_SUCCESS: {
			const books = action.payload;
			return {
				loaded: true,
				loading: false,
				ids: books.map(book => book.id)
			}
		}
		case collection.ActionTypes.ADD_BOOK_SUCCESS:
		case collection.ActionTypes.REMOVE_BOOK_FAIL: {
			const book = action.payload;
			if (state.ids.indexOf(book.id) > -1) {
				return state;
			}
			return Object.assign({}, state, {ids: [...state.ids, book.id]});
		}
		case collection.ActionTypes.REMOVE_BOOK_SUCCESS:
		case collection.ActionTypes.ADD_BOOK_FAIL: {
			const book =action.payload;
			return Object.assign({}, state, {ids: state.ids.filter( id => id != book.id)});
		}
		default: {
			return state;
		}
	}
}
export const getLoaded  = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds     = (state: State) => state.ids;