import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';
import { CollectionEffects } from './store/collection.effects';
import { BookExistsGuard } from './guards/book-exists.guard';


import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BooksComponent } from './containers/books.component';
import { CollectionPageComponent } from './containers/collection-page.component';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { NotFoundPageComponent } from './containers/not-fount-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page.component';
import { ViewBokkPageComponent } from './containers/view-book-page.component';


import { BooksRouting } from './books.routing';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

import { GoogleBooksService } from './services/google-books.service';


import { reducer } from './store/index';
import { schema } from './books.db';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,

        StoreModule,
        EffectsModule,
        DBModule,
        RouterStoreModule,
        StoreDevtoolsModule,

        BooksRouting,
        ComponentsModule,
        PipesModule,
        StoreModule.provideStore(reducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(BookEffects),
        EffectsModule.run(CollectionEffects),
        DBModule.provideDB(schema),
        
    ],
    declarations: [
        BooksComponent,
        CollectionPageComponent,
        FindBookPageComponent,
        NotFoundPageComponent,
        SelectedBookPageComponent,
        ViewBokkPageComponent
    ],
    providers: [
        GoogleBooksService,
        BookExistsGuard
    ]
})
export class BooksModule { }
