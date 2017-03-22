import { Component } from '@angular/core';

@Component({
	selector: 'mymat-layout',
	template: `
     	<md-sidenav-container>
     		<ng-content></ng-content>
     	</md-sidenav-container>
	` ,
	styles:[`
    	md-sidenav-container {
    		background: rgba(0, 0, 0, 0.03);
    	}    	
	`]
})
export class LayoutComponent {}