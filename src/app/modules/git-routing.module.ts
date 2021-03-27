import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitPageComponent } from '../components/git-page/git-page.component';

const routes: Routes = [
  { path: '', component: GitPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GitRoutingModule {}
