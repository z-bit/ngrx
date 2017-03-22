import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'mymat-collection-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
        <md-card><h1>Collection Page</h1></md-card>
	`,
	styles: [`

	`]
})
export class CollectionPageComponent {
	
}