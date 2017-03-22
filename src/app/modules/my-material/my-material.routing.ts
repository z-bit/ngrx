import { Routes, RouterModule } from '@angular/router';

import { MyMaterialComponent } from './containers/my-material.component';
import { CollectionPageComponent } from './containers/collection-page.component';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { NotFoundPageContainer } from './containers/not-found-page.container';


const childRoutes: Routes = [
    {path: '', component: CollectionPageComponent},
    {path: 'books', component: CollectionPageComponent},
    {path: 'book/find', component: FindBookPageComponent},

    {path: '**', component: NotFoundPageContainer}
];

const routes: Routes = [
    {path:'', component: MyMaterialComponent, children: childRoutes},
   
];

export const MyMaterialRouting = RouterModule.forChild(routes);