import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import * as fromStore from '../store/index';
import * as sidenav from '../store/sidenav.actions';

@Component({
    selector: 'my-material',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mymat-toolbar (toggleMenu)="toggleSidenav()">My Material</mymat-toolbar> 
         
        <mymat-layout>    
            <mymat-sidenav [open]="showSidenav$ | async">
                <mymat-nav-item
                    (activate)="closeSidenav()"
                    routerLink="/material/books"
                    icon="book"
                    hint="View your book collection"
                >
                    My Collection      
                </mymat-nav-item>  
                 <mymat-nav-item
                    (activate)="closeSidenav()"
                    routerLink="/material/book/find"
                    icon="search"
                    hint="Find your next book"
                >
                    Browse Books     
                </mymat-nav-item>    
            </mymat-sidenav>
            <md-card>
                <router-outlet></router-outlet>
            </md-card>
        </mymat-layout>
    `,
    styles:[`
        md-card {
            height: 800px;
        }
    `]
})
export class MyMaterialComponent {
    showSidenav$: Observable<boolean>;
    sidenavOpen: boolean;
   
    constructor(
        private store: Store<fromStore.State>
    ) {
        //this.store.select(fromStore);
        this.showSidenav$ = this.store.select(fromStore.getShowSidenav);
        this.showSidenav$.subscribe( (get) => this.sidenavOpen = get);
    }
    
    closeSidenav() {
        this.store.dispatch(new sidenav.CloseSidenavAction());
    }
    openSidenav() {
        this.store.dispatch(new sidenav.OpenSidenavAction());
    }
    toggleSidenav() {
        this.store.dispatch(new sidenav.ToggleSidenavAction());
        
    }
}