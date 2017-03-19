import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../store/index';
import * as book from '../store/book.actions';

@Component({
    selector: 'app-view-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<app-selected-book-page></app-selected-book-page>`
})
export class ViewBokkPageComponent {
    actionsSubscription: Subscription;
    
    constructor(
        store: Store<fromRoot.State>,
        route: ActivatedRoute
    ) {
        this.actionsSubscription = route.params
            .select<string>('id')
            .map( id => new book.SelectAction(id))
            .subscribe(store)
        ;
    }
    
    ngOnDestroy() {
        this.actionsSubscription.unsubscribe();
    }
}
