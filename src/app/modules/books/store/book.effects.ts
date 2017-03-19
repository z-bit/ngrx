import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/Observable/empty';
import { of } from 'rxjs/Observable/of';

import { GoogleBooksService } from '../services/google-books.service';
import * as book from './book.actions';

@Injectable()
export class BookEffects {
    serch$: Observable<Action> = this.actions$
        .ofType(book.ActionTypes.SEARCH)
        .debounceTime(300)
        .map(toPayload)
        .switchMap( query => {
            if (query === '') {
                return empty();
            }
            const nextSearch$ = this.actions$.ofType(book.ActionTypes.SEARCH).skip(1);
            
            return this.googleBooks.searchBooks(query)
                .takeUntil(nextSearch$)
                .map( books => new book.SearchCompleteAction(books) )
                .catch( () => of(new book.SearchCompleteAction([])) )
            ;
        })
    ;
    
    constructor(
        private actions$: Actions,
        private googleBooks: GoogleBooksService
    ) {}
}
