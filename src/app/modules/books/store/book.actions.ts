import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';
import { type } from './type-cache.util';


export const ActionTypes = {
  SEARCH:           type('[Book] Search'),
  SEARCH_COMPLETE:  type('[Book] Search Complete'),
  LOAD:             type('[Book] Load'),
  SELECT:           type('[Book] Select')
};

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;
  constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  type = ActionTypes.SEARCH_COMPLETE;
  constructor(public payload: Book[]) {}
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;
  constructor(public payload: Book) {}
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;
  constructor(public payload: string) {}
}

export type Actions = SearchAction | SearchCompleteAction | LoadAction | SelectAction;