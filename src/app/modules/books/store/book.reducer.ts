import { createSelector } from 'reselect';
import { Book } from '../models/book.model';
import * as book from './book.actions';
import * as collection from './collection.actions';

export interface State {
  ids: string[];
  entities: {[id: string]: Book};
  selectedBookId: string | null;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedBookId: null
};

export function reducer(state: State = initialState, action: book.Actions | collection.Actions) {

  switch(action.type) {
    case book.ActionTypes.SEARCH_COMPLETE:
    case collection.ActionTypes.LOAD_SUCCESS: {
      const books = action.payload;
      const newBooks = books.filter( book => !state.entities[book.id]);
      const newBookIds = newBooks.map( book => book.id );
      const newBookEntities = newBooks.reduce(
        (entities: {[id: string]: Book}, book: Book) => {
          return Object.assign(
            entities,
            {[book.id]: book}
          );
        }, {}
      );
      return {
        ids: [...state.ids, ... newBookIds],
        entities: Object.assign({}, state.entities, newBookEntities),
        selectedBookId: state.selectedBookId
      };
    }
    case book.ActionTypes.LOAD: {
      const book = action.payload;
      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }
      return {
        ids: [...state.ids, book.id],
        entities: Object.assign({}, state.entities, {[book.id]: book}),
        selectedBookId: state.selectedBookId
      };
    }
    case book.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedBookId: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
export const getEntities    = (state: State) => state.entities;
export const getIds         = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedBookId;

export const getSelected = createSelector(
  getEntities,
  getSelectedId,
  (entities, selectedId) =>  entities[selectedId]
);

export const selectAll = createSelector(
  getEntities,
  getIds,
  (entities, ids) => ids.map( id => entities[id] )
);