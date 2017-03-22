import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as storeIndex from '../store';
import * as collection from '../store/collection.actions';
import { Book } from '../models/book.model';

@Component({
	selector: 'mymat-selected-book-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
        <mymat-book-detail
        	[book]="book$ | async"
        	[inCollection]="isSelectedBookInCollection$ | async"
        	(add)="addToCollection($event)"
        	(remove)="removeFromCollection($event)"
        ></mymat-book-detail>
	`,
	styles: [`

	`]
})
export class SelectedBookPageContainer {
	book$: Observable<Book>;
	isSelectedBookInCollection$: Observable<boolean>;

	constructor(
		private store: Store<storeIndex.State>
	) {
		this.book$ = store.select(storeIndex.getSelectedBook);
		this.isSelectedBookInCollection$ = store.select(storeIndex.isSelectedBookInCollection);
	}

	addToCollection(book: Book) {
		this.store.dispatch(new collection.AddBookAction(book));
	}

	removeFromCollection(book: Book) {
		this.store.dispatch(new collection.RemoveBookAction(book));
	}
}



