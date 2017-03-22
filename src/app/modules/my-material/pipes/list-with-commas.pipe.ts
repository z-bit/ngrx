import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'listWithCommas'
})
export class ListWithCommasPipe implements PipeTransform {
	transform(authors: null | string[]) {
		if (!authors) {
			return 'Author unknown';
		}
		switch (authors.length) {
			case 0: {
				return 'Author unknown';
			}
			case 1: {
				return authors[0];
			}
			case 2: {
				return authors.join(' and ')
			}
			default: {
				const last = authors[authors.length - 1];
				const remaining = authors.slice(0, -1);
				return `${remaining.join(', ')}, and ${last}`;
			}
		}
	}
}