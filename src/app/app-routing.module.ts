import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { SideNavRightComponent } from './components/side-nav-right/side-nav-right.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'angular', component: LayoutComponent, children: [
    { path: '', component: SideNavRightComponent }] },
  { path: 'git', component: LayoutComponent, children: [
    { path: '', component: SideNavRightComponent }] },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
