import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'cutAfter'
})
export class CutAfterPipe implements PipeTransform {
	transform(str: string, strLength: number = 250) {
		const ohneHtml = str.replace(/(<([^>]+)>)/ig, '');
		if (str.length > strLength) {
			return `${ohneHtml.slice(0, strLength)}...`
		}
		return ohneHtml;
	}
}