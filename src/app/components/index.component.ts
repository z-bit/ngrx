import { Component } from '@angular/core';

@Component({
    selector: 'app-index',
    template: `
        <ul>
            <li><a routerLink="/clock">Clock</a></li>
            <li><a routerLink="/material">My Material</a></li>
            <li><a routerLink="/books">Book Collection - <i>ngrx</i> Example</a></li>
             
        </ul>
    `
})
export class IndexComponent {}