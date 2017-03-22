import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import * as storeIndex from '../store/index';
import * as book from '../store/book.actions';

@Component({
	selector: 'mymat-view-book-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: '<mymat-selected-book-page></mymat-selected-book-page>'
})
export class ViewBookPageContainer implements OnDestroy {
	actionsSubscription : Subscription;

	constructor(
		private store: Store<storeIndex.State>,
	    private route: ActivatedRoute
	) {
		this.actionsSubscription = route.params
			.select<string>(id)
			.map( id => new book.SelectAction(id) )
			.subscribe(store)
		;
	}

	ngOnDestroy() {
		this.actionsSubscription.unsubscribe();
	}
}




