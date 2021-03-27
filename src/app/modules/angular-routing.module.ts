import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularPageComponent } from '../components/angular-page/angular-page.component';

const routes: Routes = [
  { path: '', component: AngularPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AngularRoutingModule {}
