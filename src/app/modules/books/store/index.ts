import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromSearch from './search.reducer';
import * as fromBooks from './book.reducer';
import * as fromCollection from './collection.reducer';
import * as fromLayout from './layout.reducer';

export interface State {
  search: fromSearch.State;
  books: fromBooks.State;
  collection: fromCollection.State;
  layout: fromLayout.State;
  router: fromRouter.RouterState;
}

const reducers = {
  search: fromSearch.reducer,
  books: fromBooks.reducer,
  collection: fromCollection.reducer,
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State>
  = compose(storeFreeze, combineReducers)(reducers);

const productionReducer: ActionReducer<State>
  = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 *    selector functions
      class MyComponent {
          constructor(state$: Observable<State>) {
              this.booksState$ = state$.select(getBooksState)
          }
      }
 */
export const getBooksState = (state: State) => state.books;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
export const getBookEntities      = createSelector(getBooksState, fromBooks.getEntities);
export const getBookIds           = createSelector(getBooksState, fromBooks.getIds);
export const getSelectedBookId    = createSelector(getBooksState, fromBooks.getSelectedId);
export const getSelectedBook      = createSelector(getBooksState, fromBooks.getSelected);

export const getSearchState = (state: State) => state.search;

export const getSearchBookIds     = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery       = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading     = createSelector(getSearchState, fromSearch.getLoading);

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
*/
export const getSearchResults     = createSelector(getBookEntities, getSearchBookIds, (books, searchIds) => {
  return searchIds.map( id => books[id] );
});

export const getCollectionState = (state:State) => state.collection;

export const getCollectionLoaded  = createSelector(getCollectionState, fromCollection.getLoaded);
export const getCollectionLoading = createSelector(getCollectionState, fromCollection.getLoading);
export const getCollectionBookIds = createSelector(getCollectionState, fromCollection.getIds);

export const getBookCollection = createSelector(getBookEntities, getCollectionBookIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

export const isSelectedBookInCollection = createSelector(getCollectionBookIds, getSelectedBookId, (ids, selected) => {
  return ids.indexOf(selected) > -1;
});

export const getLayoutState = (state: State) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
