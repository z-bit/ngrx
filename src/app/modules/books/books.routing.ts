import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './containers/books.component';
import { BookExistsGuard } from './guards/book-exists.guard';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { ViewBokkPageComponent } from './containers/view-book-page.component';
import { CollectionPageComponent } from './containers/collection-page.component';
import { NotFoundPageComponent } from './containers/not-fount-page.component';

const routes: Routes = [
    {path: '', component: BooksComponent},
    {path: 'coll', component: CollectionPageComponent},
    {path: 'book/find', component: FindBookPageComponent},
    {path: 'book/:id', component: ViewBokkPageComponent, canActivate: [BookExistsGuard]},
    {path: '**', component: NotFoundPageComponent}

];
export const BooksRouting = RouterModule.forChild(routes);

