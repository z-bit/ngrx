import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './containers/clock.component';

const routes: Routes = [
  {path: '', component: ClockComponent},

];
export const ClockRouting = RouterModule.forChild(routes);
