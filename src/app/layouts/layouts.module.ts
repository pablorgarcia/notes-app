import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    MainComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MainModule
  ],
  exports: [
    LayoutModule
  ],
  providers: []
})

export class LayoutModule {}
