import { Component, Output, EventEmitter } from '@angular/core';
	
@Component({
	selector: 'mymat-toolbar',
	template: `
    	<md-toolbar>    
        	<md-icon (click)="toggleMenu.emit()">menu</md-icon>
              	&nbsp;&nbsp;   
              	<ng-content></ng-content>
         	</md-toolbar>
	`,
	styles: [`
         md-icon:hover {
              cursor: pointer;
         }
         md-toolbar {
         	  background-color: blue;
              color: wheat; 
         }
	`]
})
export class ToolbarComponent {
	@Output() toggleMenu = new EventEmitter();
}