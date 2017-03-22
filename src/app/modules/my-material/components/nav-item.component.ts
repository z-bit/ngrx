import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'mymat-nav-item',
	template: `
       	<md-list-item
      
       		[routerLink]="routerLink"
       		(click)="activate.emit()"
       	>
       		<md-icon md-list-icon>{{ icon }}</md-icon>	
       		<span md-line><ng-content></ng-content></span>
       		<span md-line class="secondary">{{ hint }}</span>
       	
		</md-list-item> 
	`,
	styles: [`
		md-list-item:hover {
			cursor: pointer;
		}
        .secondary {
        	color: rgba(0, 0, 0, 0.54);
        }
	`]
})
export class NavItemComponent {
	@Input() icon = '';
	@Input() hint = '';
	@Input() routerLink: string | any[] = '/';
	@Output() activate = new EventEmitter();
}