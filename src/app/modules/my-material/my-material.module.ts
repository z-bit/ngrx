import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/index';

import { MyMaterialComponent } from './containers/my-material.component';
import { CollectionPageComponent } from './containers/collection-page.component';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { NotFoundPageContainer } from './containers/not-found-page.container';
import { SelectedBookPageContainer } from './containers/selected-book-page.container';



import { ComponentsModule } from './components';
import { PipesModule } from './pipes';
import { MyMaterialRouting } from './my-material.routing';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      StoreModule.provideStore(reducer),
      MyMaterialRouting,
      ComponentsModule,
      PipesModule,

  ],
  declarations: [
      MyMaterialComponent,
      CollectionPageComponent,
      FindBookPageComponent,
      NotFoundPageContainer,
      SelectedBookPageContainer,
  ]
})
export class MyMaterialModule { }
