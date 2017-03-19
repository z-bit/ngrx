import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { MyMaterialComponent } from './containers/my-material.component';
import { MyMaterialRouting } from './my-material.routing';



@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      MyMaterialRouting,
      
  ],
  declarations: [
      MyMaterialComponent,
  ]
})
export class MyMaterialModule { }
