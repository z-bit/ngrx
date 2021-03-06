import { Component, Input } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
	selector: 'mymat-book-preview-list',
	template: `
     	<mymat-book-preview
     		*ngFor="let book of books"
     		[book]="book"
     	></mymat-book-preview>
	`,
	styles: [`
        :host {
        	display: flex;
        	flex-wrap: wrap;
        	justify-content: center;
        }
	`]
})
export class BookPreviewListComponent {
	@Input() books: Book[];
}
