import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VimPageComponent } from '../components/vim-page/vim-page.component';

const routes: Routes = [
  { path: '', component: VimPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VimRoutingModule {}
