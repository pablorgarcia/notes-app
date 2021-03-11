import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutsComponent } from './layouts/layouts.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: LayoutsComponent, },
  { path: '**', component: PageNotFoundComponent }
];

/*
const routes: Routes = [
  { path: '', loadChildren: './layouts/main/main.module.ts' },
  //{ path: 'angular', loadChildren: './layouts/layouts.module.ts' },
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
