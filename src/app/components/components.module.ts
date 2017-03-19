import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// all modules ever used in any of the components

import { IndexComponent } from './index.component';

export const COMPONENTS = [
    IndexComponent,

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule {}

