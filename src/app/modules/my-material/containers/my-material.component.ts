import { Component } from '@angular/core';

@Component({
    selector: 'my-material',
    template: `
         <md-toolbar>
                
                <md-icon (click)="sidenav.toggle()">menu</md-icon>
                &nbsp; &nbsp;
                My Material
                &nbsp; &nbsp;
            </md-toolbar>
        <md-sidenav-container>    
            <md-sidenav #sidenav mode="over">
                Jolly good!
            </md-sidenav>
            
            <md-card>
                Main Content
            </md-card>   
        </md-sidenav-container>
    `,
    styles:[`
        md-icon:hover {
            cursor: pointer;
        }
        md-toolbar {
            background-color: blue;
            color: wheat;
        }
        md-sidenav {
            border: 20px;
            padding: 20px;
            background-color: blue;
            color: wheat;
        }
        md-card {
            height: 800%;
        }
    `]
})
export class MyMaterialComponent {
    
}