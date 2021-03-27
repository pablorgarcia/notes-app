import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'angular', loadChildren: () => import('./modules/angular.module').then(m => m.AngularModule)},
  { path: 'books', loadChildren: () => import('./modules/books.module').then(m => m.BooksModule)},
  { path: 'css-flexbox', loadChildren: () => import('./modules/css-flexbox.module').then(m => m.CssFlexboxModule)},
  { path: 'git', loadChildren: () => import('./modules/git.module').then(m => m.GitModule)},
  { path: 'open-manifesto', loadChildren: () => import('./modules/open-manifesto.module').then(m => m.OpenManifestoModule)},
  { path: 'vim', loadChildren: () => import('./modules/vim.module').then(m => m.VimModule)},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
