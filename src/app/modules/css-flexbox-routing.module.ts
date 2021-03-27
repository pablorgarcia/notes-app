import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssFlexboxPageComponent } from '../components/css-flexbox-page/css-flexbox-page.component';

const routes: Routes = [
  { path: '', component: CssFlexboxPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CssFlexboxRoutingModule { }
