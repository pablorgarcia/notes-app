import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenManifestoPageComponent } from '../components/open-manifesto-page/open-manifesto-page.component';

const routes: Routes = [
  { path: '', component: OpenManifestoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OpenManifestoRoutingModule {}
