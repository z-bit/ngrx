import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/let';

import * as fromRoot from '../store/index';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-card>
            <md-card-title>My Collection</md-card-title> 
        </md-card>
        <app-book-preview-list [books]="books$ | async"></app-book-preview-list>
    `,
    styles: [`
        md-card-title {
            display: flex;
            justify-content: center;
        }
    `]
})
export class CollectionPageComponent {
    books$: Observable<Book[]>;
  
    constructor(
        store: Store<fromRoot.State>
    ) {
      this.books$ = store.select(fromRoot.getBookCollection);
    }
    
}
