import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromBook from './book.reducer';
import * as fromCollection from './collection.reducer';
import * as fromSearch from './search.reducer';
import * as fromSidenav from './sidenav.reducer';
// ...

export interface State {
	book: fromBook.State,
	collection: fromCollection.State,
	search: fromSearch.State,
	sidenav: fromSidenav.State,
	// ...
}

const reducers = {
	book: fromBook.reducer,
	collection: fromCollection.reducer,
	search: fromSearch.reducer,
	sidenav: fromSidenav.reducer,
	// ...
};
export const getBookState = (state: State) => state.book;
export const getBookEntities = createSelector(getBookState, fromBook.getEntities);
export const getBookIds = createSelector(getBookState, fromBook.getIds);
export const getSelectedBookId = createSelector(getBookState, fromBook.getSelectedId);
export const getSelectedBook = createSelector(getBookState, fromBook.getSelected);

export const getCollectionState = (state: State) => state.collection;
export const getCollectionLoaded = createSelector(getCollectionState, fromCollection.getLoaded);
export const getCollectionLoading = createSelector(getCollectionState, fromCollection.getLoading);
export const getCollectionBookIds = createSelector(getCollectionState, fromCollection.getIds);

export const getBookCollection = createSelector(
	getBookEntities,
	getCollectionBookIds,
	(entities, ids) => {return ids.map( id => entities[id] );}
);
export const isSelectedBookInCollection = createSelector(
	getCollectionBookIds,
	getSelectedBookId,
	(ids, selected) => {return ids.indexOf(selected) > -1;}
);

export const getSearchState = (state: State) => state.search;
export const getSearchBookIds = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);

export const getSearchResults = createSelector(
	getBookEntities,
	getSearchBookIds,
	(books, searchIds) => {return searchIds.map( id => books[id] );}
);

export const getSidenavState = (state: State) => state.sidenav;
export const getShowSidenav = createSelector(getSidenavState, fromSidenav.getShowSidenav);
//..

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	if (environment.production) {
		return productionReducer(state, action);
	} else {
		return developmentReducer(state, action);
	}
}



