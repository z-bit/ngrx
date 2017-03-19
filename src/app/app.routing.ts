import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'clock', loadChildren: './modules/clock/clock.module#ClockModule'},
    {path: 'books', loadChildren: './modules/books/books.module#BooksModule'},
    {path: 'material', loadChildren: './modules/my-material/my-material.module#MyMaterialModule'},

];
export const AppRouting = RouterModule.forRoot(routes);

