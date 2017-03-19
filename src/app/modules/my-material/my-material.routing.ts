import { Routes, RouterModule } from '@angular/router';

import { MyMaterialComponent } from './containers/my-material.component';
    
const routes: Routes = [
    {path:'', component: MyMaterialComponent}
];

export const MyMaterialRouting = RouterModule.forChild(routes);