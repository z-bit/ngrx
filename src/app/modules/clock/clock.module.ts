import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './containers/clock.component';
import { ClockRouting } from './clock.routing';


@NgModule({
  imports: [
    CommonModule,
    ClockRouting
  ],
  declarations: [
    ClockComponent
  ]
})
export class ClockModule { }
