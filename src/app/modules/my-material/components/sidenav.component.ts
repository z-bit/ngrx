import { Component, Input } from '@angular/core';

@Component({
	selector: 'mymat-sidenav',
	template: `
    	 <md-sidenav [opened]="open">
    	 	 <md-list>
    	 		  <ng-content></ng-content>	 
			 </md-list>
    	 	
		 </md-sidenav>
	`,
	styles: [`
      	 md-sidenav {
         	border: 20px;
            padding: 20px;
            background-color: white;
        }		  	
	`]
})
export class SidenavComponent {
	@Input() open = false;
}