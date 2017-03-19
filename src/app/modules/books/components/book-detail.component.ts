import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-book-detail',
    template: `
        <md-card *ngIf="book">
            <md-card-title-group>
                <md-card-title>{{ title }}</md-card-title>
                <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
                <md-card-xl-image *ngIf="thumbnail" src="thumbnail"></md-card-xl-image>
              
            </md-card-title-group>
            <md-card-content>
                <p [innerHtml]="description"></p>
            </md-card-content>
            <md-card-footer class="footer">
                <app-book-authors [book]="book"></app-book-authors>   
            </md-card-footer>
            <md-card-actions align="start">
                <button md-raised-button color="warn" *ngIf="inCollection" (click)="remove.emit(book)">
                    Remove Book from Collection
                </button>
                <button md-raised-button color="primary" *ngIf="!inCollection" (click)="add.emit(book)">
                    Add Book to Collection
                </button>
            </md-card-actions>
        </md-card>
    `,
    styles: [`
        :host {
            display: flex;
            justify-content: center;
            margin: 75px 0;
        }  
        md-card {
            max-width: 600px;
        }
        md-card-title-group {
            margin-left: 0;
        }
        img {
            width: 60px;
            min-width: 60px;
            margin-left: 5px;
        }
        md-card-content {
            margin: 15px 0 50px;
        }
        md-card-actions {
            margin: 25px 0 0 !important;
        }
        md-card-footer {
            padding: 0 25px 25px;
            position: relative;
        }
    `]
})
export class BookDetailComponent {
    @Input() book: Book;
    @Input() inCollection: boolean;
    @Output() add = new EventEmitter<Book>();
    @Output() remove = new EventEmitter<Book>();
    
    /**
     * getters keep the template clean
     */
    get id() {
        return this.book.id;
    }
    get title() {
        return this.book.volumeInfo.title;
    }
    get subtitle() {
        return this.book.volumeInfo.subtitle;
    }
    get description() {
        return this.book.volumeInfo.description;
    }
    get thumbnail() {
        return this.book.volumeInfo.imageLinks
            && this.book.volumeInfo.imageLinks.smallThumbnail
        ;
    }
}
