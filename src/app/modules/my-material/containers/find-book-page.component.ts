import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';

import * as fromStore from '../store';
import * as book from '../store/book.actions';
import { Book } from '../models/book.model';

@Component({
	selector: 'mymat-find-book-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
        <mymat-book-search
       		[query]="searchQuery$ | async"	
       		[searching]="loading$ | async"
       		(search)="search($event)"
       	></mymat-book-search>
       	
       	<mymat-book-preview-list
       		[books]="books$ | async"
       	></mymat-book-preview-list>
	`,
	styles: [`

	`]
})
export class FindBookPageComponent {
	searchQuery$: Observable<string>;
	books$: Observable<Book[]>;
	loading$: Observable<boolean>;

	constructor(
		private store: Store<fromStore.State>
	) {
		this.searchQuery$ = store.select(fromStore.getSearchQuery).take(1);
		this.books$ = store.select(fromStore.getSearchResults);
		this.loading$ = store.select(fromStore.getSearchLoading);
	}

	search(query: string) {
		this.store.dispatch(new book.SearchAction(query));
	}
}