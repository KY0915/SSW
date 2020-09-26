import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindDriverProcessComponent } from './find-driver-process/find-driver-process.component';

const routes: Routes = [
  {
    path: 'process',
    component: FindDriverProcessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
