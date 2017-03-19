import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/let';

import * as fromRoot from '../store';
import * as layout from '../store/layout.actions';

@Component({
    selector: 'app-books',
    template: `
        <app-layout>
            <app-sidenav [open]="showSidenav$ | async">
                <app-nav-item (activate)="closeSidenav()" routerLink="/books/coll" icon="book" hint="View your book collection">
                    My Collection
                </app-nav-item>
                <app-nav-item (activate)="closeSidenav()" routerLink="/books/book/find" icon="search" hint="Find your next book!">
                    Browse Books
                </app-nav-item>
            </app-sidenav>
            <app-toolbar (openMenu)="openSidenav()">
                Book Collection
            </app-toolbar>
            <router-outlet></router-outlet>
        </app-layout>
    `
})
export class BooksComponent {
  showSidenav$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
  }

  closeSidenav(){
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav(){
    this.store.dispatch(new layout.OpenSidenavAction());
  }

}
