import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookAuthorsComponent } from './book-authors.component';
import { BookDetailComponent } from './book-detail.component';
import { BookPreviewComponent } from './book-preview.component';
import { BookPreviewListComponent } from './book-preview-list.component';
import { BookSearchComponent } from './book-search.component';
import { LayoutComponent } from './layout.component';
import { NavItemComponent } from './nav-item.component';
import { SidenavComponent } from './sidenav.component';
import { ToolbarComponent } from './toolbar.component';

import { PipesModule } from '../pipes/pipes.module';


export const COMPONENTS = [
    BookAuthorsComponent,
    BookDetailComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookSearchComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
        PipesModule,

    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule {}






